import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useTheme } from '@kovacsikdev/lib/themeContext/themeContext';
import { Title } from '@kovacsikdev/components/Title/Title';
import { GameSelectionTile } from '@kovacsikdev/components/GameSelectionTile/GameSelectionTile';

export const HomePage = () => {
  const tileSizes = [3, 4, 5, 6, 7, 8];
  return (
    <View style={styles.screen}>
      <Title />
      <View style={styles.container}>
        {tileSizes.map((size, index) => {
          return <GameSelectionTile key={index} size={size} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 50,
  },
});
