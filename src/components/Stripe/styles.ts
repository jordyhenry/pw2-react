import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props: { primary?: boolean }) => (props.primary) ? 'var(--bg-primary)' : 'var(--bg-secondary)'};
  color: ${(props: { primary?: boolean }) => (props.primary) ? 'var(--secondary)' : 'var(--primary)'};
  position: relative;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
`
