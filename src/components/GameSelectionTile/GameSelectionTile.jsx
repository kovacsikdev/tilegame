import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '@kovacsikdev/lib/themeContext/themeContext';

export const GameSelectionTile = ({ size }) => {
  const {
    theme: { colors },
  } = useTheme();
  const navigation = useNavigation();

  const goToGame = () => {
    navigation.navigate('Game', { size });
  };

  return (
    <TouchableOpacity
      onPress={() => goToGame()}
      style={{ ...styles.tile, borderColor: colors.text }}>
      <Text
        style={{
          ...styles.text,
          color: colors.text,
        }}>
        {size} x {size}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
  },
});
