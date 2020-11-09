/*
  TODO
    - mobile css
      - scale down description in <Header />
      - change flex-direction of <ResizedItems />
      - increase the <DownloadAllButton /> width
      - center tex in <Footer /> and change flex-direction
    - write README
    - deploy
*/

import React from 'react';
import GlobalStyles from './GlobalStyles'
import LandingPageContainer from './pages/LandingPage'

import { SnackbarProvider } from 'notistack'

function App() {
  return (
    <SnackbarProvider maxSnack={4}>
      <GlobalStyles />
      <LandingPageContainer />
    </SnackbarProvider>
  );
}

export default App;
