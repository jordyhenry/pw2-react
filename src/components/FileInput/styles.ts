import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 1rem;
`;

const getColor = (props: any) => {
  if (props.isDragAccept) {
      return 'var(--senary)';
  }
  if (props.isDragReject) {
      return 'var(--tertiary)';
  }
  if (props.isDragActive) {
      return 'var(--quaternary)';
  }
  return 'var(--primary)';
}

export const DragAndDropContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 5rem;
  padding: 1rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  color: ${props => getColor(props)};
  border-style: dashed;

  outline: none;
  transition: border .24s ease-in-out;
  
  cursor: pointer;
`;

export const DragAndDropCallToAction = styled.p`
  font-size: 1rem;
  font-weight: 500;

  transition: border .24s ease-in-out;
`