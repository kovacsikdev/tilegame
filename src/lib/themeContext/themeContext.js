import React from 'react';
import { Appearance } from 'react-native';
import { styles } from './styles';

const colorScheme = Appearance.getColorScheme();

export const ThemeContext = React.createContext({
  theme: { ...styles[colorScheme] },
});

export const useTheme = () => React.useContext(ThemeContext);
