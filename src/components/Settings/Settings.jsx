import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export const Settings = props => {
  return (
    <DrawerContentScrollView>
      <View>
        <Text style={styles.text}>Settings</Text>
      </View>
      <View style={styles.themeToggle}>
        <ThemeToggle />
      </View>
      <DrawerItem
        style={styles.text}
        label="Close"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  themeToggle: {
    padding: 10,
  },
});
