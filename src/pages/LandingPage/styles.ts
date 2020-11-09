import styled from 'styled-components';
import { device } from '../../GlobalStyles'

export const Header = styled.div`
  padding: 2rem 0;
  text-align: center;
  width: 80%;
  margin: 0 auto;

  @media ${device.desktop} {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 500;
  padding-bottom: 1rem;
`

export const Headline = styled.p`
  font-size: 1.2rem;
`


export const InputForm = styled.div`
  padding: 1rem 0 3rem 0;
`

export const ResizedFilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 2rem 0;
`

export const ResizedFilesList = styled.ul`
  width: 90%;
  list-style: none;
`

export const ResizedFilesListTitle = styled.h1`
  font-weight: 500;
  margin-bottom: 2rem;
`

export const ResizedFilesListItem = styled.li``

export const GeneralInfoContainer = styled.div`
  padding: 3rem;
  text-align: center;
`

export const GeneralInfoHeader = styled.h1`
  font-weight: 500;
  margin-bottom: 2rem;
`

export const GeneralInfo = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0;

  @media ${device.desktop} {
    flex-direction: row;
  }
`

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1rem;
  
  @media ${device.desktop} {
    align-items: initial;
    padding-bottom: 0;
  }
`

export const Pw2Name = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`

export const MadeBy = styled.a`
  padding-bottom: .75rem;
  text-decoration: underline;
  color: var(--secondary);
  font-size: 1rem;

  transition: 0.15s ease-in-out;

  :hover {
    text-decoration: underline;
  }

  @media ${device.desktop} {
    padding-bottom: .5rem;
    text-decoration: none;
  }
`

export const License = styled.a`
  text-decoration: underline;
  color: var(--secondary);
  font-size: 1rem;

  transition: 0.15s ease-in-out;

  :hover {
    text-decoration: underline;
  }

  @media ${device.desktop} {
    text-decoration: none;
  }
`


export const RelatedLinksList = styled.ul`
  list-style: none;
  text-align: center;
  padding-top: 1rem;

  @media ${device.desktop} {
    text-align: left;
    padding-top: 0;
  }
`

export const RelatedLinkItem = styled.li`
  line-height: 1.6rem;
`

export const RelatedLink = styled.a`
  text-decoration: underline;
  color: var(--secondary);
  font-size: 1rem;

  transition: 0.15s ease-in-out;

  :hover {
    text-decoration: underline;
  }

  @media ${device.desktop} {
    text-decoration: none;
  }
`



