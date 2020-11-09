import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  padding-bottom: 1rem;
`

export const ResizingSelect = styled.select`
  width: 50%;
  font-size: 1.2rem;
  height: 2.4rem;
  line-height: 2.4rem;
  text-align: center;
  text-align-last: center;
  border: none;
`

export const ResizingSelectOption = styled.option`
  text-align: left;
`

export const ResizingModeDescription = styled.p`
  line-height: 1.8rem;
  padding-top: 1.2rem;
  font-size: 1.2rem;
  max-width: 50rem;
`