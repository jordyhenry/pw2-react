import React from 'react';
import ResizingModeSelect from '../../components/ResizingModeSelect'
import FileInput from '../../components/FileInput'
import ResizedFileItem from '../../components/ResizedFileItem'
import DownloadAllButton from '../../components/DownloadAllButton'
import Stripe from '../../components/Stripe'
import RelatedLinks from '../../utils/RelatedLinks'

import {
  Header,
  Title,
  Headline,
  InputForm,
  ResizedFilesContainer,
  ResizedFilesListTitle,
  ResizedFilesList,
  ResizedFilesListItem,
  GeneralInfoContainer,
  GeneralInfoHeader,
  GeneralInfo,
  Footer,
  FooterInfo,
  Pw2Name,
  RelatedLinksList,
  RelatedLinkItem,
  RelatedLink,
  MadeBy,
  License,
} from './styles'

import { useSnackbar } from 'notistack'
import { saveAs } from 'file-saver'
import { createPw2 } from 'pw2'
import JSZip from 'jszip'

const LandingPage: React.FC<LandingPageProps> = ({
  resizingMode,
  resizedItems,
  isPackingFiles,
  onResizingModeChange,
  onNewFilesUpload,
  onDownloadItem,
  onRemoveItem,
  onDownloadAll,
}) => {
  return (
    <>
      <Stripe primary>
        <Header>
          <Title>⚡ PW²</Title>
          <Headline>An easy tool to re-scale your images to the right power of two dimensions.</Headline>
        </Header>
      </Stripe>

      <Stripe>
        <InputForm>
          <ResizingModeSelect 
            resizingMode={resizingMode}
            onChange={onResizingModeChange}
          />
          <FileInput onDropFiles={onNewFilesUpload}/>
        </InputForm>
      </Stripe>

      <Stripe primary>
        <ResizedFilesContainer>
          <ResizedFilesListTitle>RESIZED FILES</ResizedFilesListTitle>
          <ResizedFilesList>
            { resizedItems.map(resizedItem => (
                <ResizedFilesListItem key={resizedItem.name}>
                  <ResizedFileItem 
                    itemName={resizedItem.name}
                    hasBlob={(resizedItem.resizedFileBlob) ? true : false}
                    onDownload={onDownloadItem}
                    onRemove={onRemoveItem}
                  />
                </ResizedFilesListItem>
              )
            )}
          </ResizedFilesList>
          
          <DownloadAllButton
            hasOneOrLessFiles={resizedItems.length <= 1}
            isPackingFiles={isPackingFiles}
            onClick={onDownloadAll}
          >
            Download All
          </DownloadAllButton>
        </ResizedFilesContainer>
      </Stripe>
      
      <Stripe>
        <GeneralInfoContainer>
          <GeneralInfoHeader>
            MOTIVATION
          </GeneralInfoHeader>
          
          <GeneralInfo>
            Games and real-time applications, in general, tend to prefer images and textures with power-of-two dimensions, they make it easier to generate eventual mipmaps, consume less GPU memory, and increase the overall performance.
            <br />
            But it's time-consuming to find the right power-of-two dimensions for that 1200x612 texture and resize it yourself, that's where ⚡PW² comes in handy.
            <br /><br />
            ⚡ PW² uses <a href='https://github.com/oliver-moran/jimp' rel='noreferrer' target='_blank'>Jimp</a> to get your texture current dimensions and rescaled it to the right power-of-two dimensions automatically.
            <br /><br />
            This project was done for the cs50 Final Project assignment.
          </GeneralInfo>
        </GeneralInfoContainer>
      </Stripe>
 
      <Stripe primary>
        <Footer>
            <FooterInfo>
              <Pw2Name>
                ⚡ PW²
              </Pw2Name>

              <MadeBy rel='noreferrer' target='_blank' href='https://github.com/jordyhenry'>
                Made By: Jordy Henry
              </MadeBy>

              <License rel='noreferrer' target='_blank' href='https://opensource.org/licenses/MIT'>
                License: MIT
              </License>
            </FooterInfo>

            <RelatedLinksList>
              { RelatedLinks.map(link => (
                <RelatedLinkItem key={link.label}>
                  <RelatedLink rel='noreferrer' target='_blank' href={link.url}>
                    {link.label}
                  </RelatedLink>
                </RelatedLinkItem>
              )) }
            </RelatedLinksList>
        </Footer>
      </Stripe>
    </>
  );
}

const LandingPageContainer: React.FC = () => {  
  const [resizableItems, setResizableItems] = React.useState<IResizableItem[]>([])
  const [resizingMode, setResizingMode] = React.useState(0)
  const [isPackingFiles, setIsPackingFiles] = React.useState(false)
  
  const pw2 = createPw2()
  const jsZip = new JSZip()
  const { enqueueSnackbar, } = useSnackbar()

  const addResizableItemAndReadFile = (file: File) => {
    const filteredResizableItem = resizableItems.filter(item => item.name === file.name)[0]
    const fileAlreadyExists = filteredResizableItem !== undefined
    
    if (fileAlreadyExists){
      enqueueSnackbar(`${filteredResizableItem.name} already uploaded!`, { autoHideDuration: 3000 })
      return
    }

    readFile(file)
    
    const newResizableItem = { name: file.name, }
    setResizableItems(prevResizableItems => [
      ...prevResizableItems,
      newResizableItem
    ])
  }

  const removeResizableItem = (itemToRemoveName: string) => { 
    const filteredResizableItems = resizableItems.filter(item => item.name !== itemToRemoveName)
    setResizableItems(filteredResizableItems)
  }

  const updateResizableItem = (itemToUpdate: IResizableItem) => {
    setResizableItems(prevResizableItems => {
      const updatedResizableItems = prevResizableItems.map(item => {
        return (item.name === itemToUpdate.name) ? itemToUpdate : item
      })

      return updatedResizableItems
    })
  }

  const readFile = (file: File) => {
    const fileReader = new FileReader()
    
    fileReader.onload = (event) => {
      const fileBuffer = event.target?.result as Buffer
      if (!fileBuffer) return

      resizeFileAndGenerateBlob(fileBuffer, file.name)
    }
    
    fileReader.readAsArrayBuffer(file)
  }

  const resizeFileAndGenerateBlob = async (fileBuffer: Buffer, fileName: string) => {
    const resizedFile = await pw2.resizeAndGetBuffer(fileBuffer, resizingMode)
    const resizedFileBlob = new Blob([resizedFile])

    const itemToUpdate: IResizableItem = {
      name: fileName,
      originalFileBuffer: fileBuffer,
      resizedFileBlob: resizedFileBlob,
    }
    
    updateResizableItem(itemToUpdate)
  }

  const handleDownloadItem = (itemName: string) => { 
    const resizableItemToDownload = resizableItems.filter(item => item.name === itemName)[0]
    if (resizableItemToDownload === undefined) return

    if (resizableItemToDownload.resizedFileBlob)
     saveAs(resizableItemToDownload.resizedFileBlob, resizableItemToDownload.name)
  }
  
  const handleDownloadAll = () => {
    if (resizableItems.length <= 0) return
    
    setIsPackingFiles(prevIsPackingFiles => true)
    
    resizableItems.forEach(item => {
      if (item.resizedFileBlob)
        jsZip.file(item.name, item.resizedFileBlob)
    })

    jsZip.generateAsync({ type: 'blob' }).then(zippedFile => {
      saveAs(zippedFile, 'pw2.zip')
      setIsPackingFiles(previousIsLoading => false)
    })
  }

  React.useEffect(() => {
    setResizableItems(prevResizableItems => {
      const updatedItems = prevResizableItems.map(item => {
        const updatedItem: IResizableItem = {
          name: item.name,
          originalFileBuffer: item.originalFileBuffer,
        }

        if (item.originalFileBuffer)
          resizeFileAndGenerateBlob(item.originalFileBuffer, item.name)

        return updatedItem
      })

      return updatedItems
    })
  // eslint-disable-next-line
  }, [resizingMode])

  return (
    <LandingPage 
      resizingMode={resizingMode}
      resizedItems={resizableItems}
      isPackingFiles={isPackingFiles}
      onResizingModeChange={setResizingMode}
      onNewFilesUpload={(fileList) => fileList.map(file => addResizableItemAndReadFile(file))}
      onDownloadItem={handleDownloadItem}
      onRemoveItem={removeResizableItem}
      onDownloadAll={handleDownloadAll}
    />
  )
}

interface IResizableItem {
  name: string,
  originalFileBuffer?: Buffer,
  resizedFileBlob?: Blob,
}

interface LandingPageProps {
  resizingMode: number,
  resizedItems: IResizableItem[],
  isPackingFiles: boolean,
  onResizingModeChange: (newResizingMode: number) => void,
  onNewFilesUpload: (fileList: File[]) => void,
  onDownloadItem: (name: string) => void,
  onRemoveItem: (name: string) => void,
  onDownloadAll: () => void,
}

export default LandingPageContainer;