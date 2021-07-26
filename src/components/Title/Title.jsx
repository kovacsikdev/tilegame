import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Title = ({ size }) => {
  const navigation = useNavigation();
  const titleText = size ? `${size} x ${size}` : 'Simple Tile Game';

  const menuButton = () => {
    if (size) {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            style={styles.image}
            source={require('../../assets/back-icon.png')}
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
          source={require('../../assets/menu-icon.png')}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.title}>
      {menuButton()}
      <Text style={styles.text}>{titleText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
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
