import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '@kovacsikdev/lib/themeContext/themeContext';
import menuIconLight from '../../assets/menu-icon-light.png';
import backIconLight from '../../assets/back-icon-light.png';
import menuIconDark from '../../assets/menu-icon-dark.png';
import backIconDark from '../../assets/back-icon-dark.png';

export const Title = ({ size }) => {
  const navigation = useNavigation();
  const {
    theme: { colors, name },
  } = useTheme();
  const titleText = size ? `${size} x ${size}` : 'Simple Tile Game';
  // const backIcon = `../../assets/back-icon-light.png`;

  const menuButton = () => {
    if (size) {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            style={styles.image}
            source={name === 'dark' ? backIconLight : backIconDark}
          />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <Image
          style={styles.image}
          source={name === 'dark' ? menuIconLight : menuIconDark}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ ...styles.title, borderBottomColor: colors.text }}>
      {menuButton()}
      <Text style={{ ...styles.text, color: colors.text }}>{titleText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    height: 50,
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    paddingRight: 30,
    flexGrow: 1,
  },
});
