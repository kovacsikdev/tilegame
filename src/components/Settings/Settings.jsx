import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { useTheme } from '@kovacsikdev/lib/themeContext/themeContext';

export const Settings = props => {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <DrawerContentScrollView style={{ backgroundColor: colors.foreground }}>
      <View>
        <Text style={{ ...styles.text, color: colors.text }}>Settings</Text>
      </View>
      <DrawerItem
        style={styles.text}
        labelStyle={{
          color: colors.text,
        }}
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
