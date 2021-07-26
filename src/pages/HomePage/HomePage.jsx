import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Title } from '@kovacsikdev/components/Title/Title';
import { GameSelectionTile } from '@kovacsikdev/components/GameSelectionTile/GameSelectionTile';

export const HomePage = () => {
  const tileSizes = [3, 4, 5, 6, 7, 8];
  return (
    <View>
      <Title />
      <View style={styles.tileContainer}>
        {tileSizes.map((size, index) => {
          return <GameSelectionTile key={index} size={size} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tileContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
  },
});
