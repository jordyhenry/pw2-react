import styled from 'styled-components';
import { device } from '../../GlobalStyles'
import Image from '@material-ui/icons/Image'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;
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

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;

  @media ${device.desktop} {
    padding-bottom: 0;
  }
`
export const FileIcon = styled(Image)``

export const FileName = styled.h2`
  font-size: 1.4rem;
  padding-left: 1rem;

  @media ${device.desktop} {
    font-size: 1.2rem;
  }
`

export const FileActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  @media ${device.desktop} {
    width: auto;
  }
`

export const DownloadFileButton = styled.button`
  margin-right: 1rem;
  padding: 0.45rem;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1.8rem;
  
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

  @media ${device.desktop} {
    font-size: .8rem;
    line-height: 1.2rem;
  }
`

export const LoadingMessage = styled.span``

export const RemoveItemButton = styled.button`
  padding: 0.45rem;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1.8rem;
  
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

  @media ${device.desktop} {
    font-size: .8rem;
    line-height: 1.2rem;
  }
`

