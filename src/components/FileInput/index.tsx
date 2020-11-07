import React from 'react';
import Dropzone from 'react-dropzone'

const FileInput: React.FC<FileInputProps> = ({onDropFiles}) => {
  return (
    <>
      <label htmlFor="filesToResize">Files To Resize</label>
      <Dropzone
        maxFiles={10}
        maxSize={1e7}
        multiple
        accept='image/png, image/jpeg, image/jpg'
        onDrop={onDropFiles}
      >
        {({getRootProps, getInputProps}) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
    </>
  );
}

interface FileInputProps {
  onDropFiles: (files: File[]) => void,
}

export default FileInput;