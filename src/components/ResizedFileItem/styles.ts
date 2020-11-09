import styled from 'styled-components';
import Image from '@material-ui/icons/Image'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 2rem;
  width: 90%;
  margin: 0 auto;

  border-bottom: 1px solid var(--secondary);
  
  transition: 0.15s ease-in-out;
  background: var(--primary);
  color: var(--secondary);

  :hover {
    background: var(--secondary);
    color: var(--primary);
  }

`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  
`
export const FileIcon = styled(Image)``

export const FileName = styled.h2`
  font-size: 1.2rem;
  padding-left: 2rem;
`

export const FileActions = styled.div``

export const DownloadFileButton = styled.button`
  margin-right: 1rem;
  padding: 0.45rem;
  font-weight: 500;
  cursor: pointer;

  border: 2px solid var(--secondary);
  color: var(--secondary);
  background: var(--primary);
  transition: 0.15s ease-in-out;

  border-radius: 5px;

  :hover {
    border: 2px solid var(--primary);
    color: var(--primary);
    background: var(--secondary);
  }
`

export const LoadingMessage = styled.span``

export const RemoveItemButton = styled.button`
  padding: 0.45rem;
  font-weight: 500;
  cursor: pointer;

  border: 2px solid var(--secondary);
  color: var(--secondary);
  background: var(--primary);
  transition: 0.15s ease-in-out;

  border-radius: 5px;

  :hover {
    border: 2px solid var(--primary);
    color: var(--primary);
    background: var(--secondary);
  }
`

