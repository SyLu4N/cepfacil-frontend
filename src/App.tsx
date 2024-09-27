import React, { useEffect, useState } from 'react';
import { MainRouter as Routes } from './router';

import { Header } from './components/Header';
import { GlobaStyle } from './styles/global';
import { Footer } from './components/Footer';

import { ligthTheme } from './styles/themes';
import { CepProvider } from './context/CepContext';

type ThemeStorageProps = {
  type: string;
  body: string;
  text: string;
  info: string;
};

export default function App() {
  const getThemeStorage = localStorage.getItem('theme');

  const themeStorage: ThemeStorageProps = getThemeStorage
    ? JSON.parse(getThemeStorage)
    : ligthTheme;

  const [theme, setTheme] = useState(themeStorage);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <CepProvider>
      <Header setTheme={setTheme} theme={theme} />
      <Routes />
      <GlobaStyle theme={theme} />
      <Footer />
    </CepProvider>
  );
}
