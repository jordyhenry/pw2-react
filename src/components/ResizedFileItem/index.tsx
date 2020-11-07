import React from 'react';

// import { Container } from './styles';

const ResizedFileItem: React.FC<ResizedFileItemProps> = ({
  itemName,
  hasBlob,
  onDownload,
  onRemove,
}) => {
  return (
    <>
      <h2>{itemName}</h2>
      { (hasBlob) ? <button onClick={() => onDownload(itemName)}>Download</button> : <p>Carregando...</p> }
      <button onClick={() => onRemove(itemName)}>Remove</button>
    </>
  );
}

interface ResizedFileItemProps {
  itemName: string,
  hasBlob: boolean,
  onDownload: (name: string) => void,
  onRemove: (name: string) => void,
}

export default ResizedFileItem;