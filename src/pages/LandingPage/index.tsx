import React from 'react';
import { Container} from '@material-ui/core'
import ResizingModeSelect from '../../components/ResizingModeSelect'
import FileInput from '../../components/FileInput'
import ResizedFileItem from '../../components/ResizedFileItem'

import {
  Header,
  Title,
  Headline,
  InputForm,
  ResizedFilesList,
  ResizedFilesListItem,
  DownloadAllButton,
  GeneralInfoContainer,
  GeneralInfoHeader,
  GeneralInfo,
  Footer,
  Pw2Name,
  RelatedLinksList,
  RelatedLink,
  MadeBy,
  License,
} from './styles'

const LandingPage: React.FC = () => {
  return (
    <Container maxWidth='sm' >
      <Header>
        <Title>⚡ PW²</Title>
        <Headline>An easy tool to re-scale your images for the right power of two dimensions.</Headline>
      </Header>

      <InputForm>
        <ResizingModeSelect />
        <FileInput />
      </InputForm>

      <ResizedFilesList>
        {[1, 2, 3].map(resizedFile => (
          <ResizedFilesListItem>
            <ResizedFileItem />
          </ResizedFilesListItem>
        ))}
      </ResizedFilesList>

      <DownloadAllButton>Download All</DownloadAllButton>

      <GeneralInfoContainer>
        <GeneralInfoHeader>
          Motivation
        </GeneralInfoHeader>
        
        <GeneralInfo>
          Games and real-time applications, in general, tend to prefer images and textures with power-of-two dimensions, they make it easier to generate eventual mipmaps, consume less GPU memory, and increase the overall performance.
          
          But it's time-consuming to find the right power-of-two dimensions for that 1200x612 texture and resize it yourself, that's where pw² comes in handy.

          pw² uses Jimp to get your texture current dimensions and rescaled it to the right power-of-two dimensions automatically.

          This project was done for the cs50 Final Project assignment.
        </GeneralInfo>
      </GeneralInfoContainer>

      <Footer>
        <Pw2Name>
          ⚡ PW²
        </Pw2Name>

        <RelatedLinksList>
          { ['npm page', 'github page', 'pw2-cli'].map(item => (
            <RelatedLink key={item}>
              {item}
            </RelatedLink>
          )) }
        </RelatedLinksList>

        <MadeBy>
          Made By: Jordy Henry
        </MadeBy>

        <License>
          License: MIT
        </License>
      </Footer>
    </Container>
  );
}

const LandingPageContainer: React.FC = () => {
  const addItem = () => {
    // filter if file exist
    // show the snack if exist and return

    // create the item
    // send it to process
    // update list
  }
  //const handleNewFilesUpload = () => {}
  //const filterDuplicatedFiles = () => {}


  const removeItem = () => {}
  //const removeResizedItem = () => {}
  
  
  const updateItem = () => {}
  //const updateResizedImage = () => {}

  const readAndProcessFile = () => {
    // create a file reader
    // add a callback
      // if (buffer) resizeandgenerateblob
    // read file
  }
  //const handleFileReaderLoad = () => {}

  const resizeFileAndGenerateBlob = () => {
    // resize the image
    // create the blob
    // update item
  }

  // change resize mode effect
  const handleSetResizingModeChange = () => {}
  
  const handleDownloadImage = () => {}
  
  const handleDownloadAll = () => {}

  


  return (
    <LandingPage />
  )
}

export default LandingPageContainer;