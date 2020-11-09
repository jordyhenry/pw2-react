import React from 'react';
import { 
  Container,
  FileInfo,
  FileIcon,
  FileName,
  FileActions,
  DownloadFileButton,
  LoadingMessage,
  RemoveItemButton,
} from './styles';

const ResizedFileItem: React.FC<ResizedFileItemProps> = ({
  itemName,
  hasBlob,
  onDownload,
  onRemove,
}) => {
  return (
    <Container>
      <FileInfo>
        <FileIcon />
        <FileName>{itemName}</FileName>
      </FileInfo>

      <FileActions>
        { (hasBlob) 
            ? <DownloadFileButton onClick={() => onDownload(itemName)}>Download</DownloadFileButton> 
            : <LoadingMessage>Resizing ...</LoadingMessage> 
        }
        <RemoveItemButton onClick={() => onRemove(itemName)}>Remove</RemoveItemButton>
      </FileActions>
    </Container>
  );
}

interface ResizedFileItemProps {
  itemName: string,
  hasBlob: boolean,
  onDownload: (name: string) => void,
  onRemove: (name: string) => void,
}

export default ResizedFileItem;