import React from 'react';
import { useDropzone } from 'react-dropzone'
import UploadConfig from '../../utils/UploadConfiguration'

import CloudUpload from '@material-ui/icons/CloudUpload'

import {
  Container,
  DragAndDropContainer,
  DragAndDropCallToAction,
} from './styles'

const FileInput: React.FC<FileInputProps> = ({onDropFiles}) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: UploadConfig.acceptedFiles,
    maxFiles: UploadConfig.maxFiles,
    maxSize: UploadConfig.maxFileSize,
    multiple: true,
    onDrop: onDropFiles,
  });

  return (
    <Container>
      <DragAndDropContainer {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />

        <CloudUpload fontSize='large' />

        <DragAndDropCallToAction>
          Click or drag files to upload
        </DragAndDropCallToAction>
      </DragAndDropContainer>
    </Container>
  );
}

interface FileInputProps {
  onDropFiles: (files: File[]) => void,
}

export default FileInput;