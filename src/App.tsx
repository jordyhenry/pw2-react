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
