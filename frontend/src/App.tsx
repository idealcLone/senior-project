import React from 'react';

import { Navbar } from './components/Navbar';
import { Router } from './utils/router';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Router />
      {/*<Footer />*/}
    </>
  );
};
