import styled from 'styled-components';

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin-top: 3rem;
  width: 40%;
  height: 3rem;

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

  :disabled,
  [disabled]{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
`;

export const DownloadButtonText = styled.span`
  padding-left: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
`
