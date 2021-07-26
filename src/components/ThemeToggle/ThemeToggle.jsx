import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export const ThemeToggle = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <View>
      <Text>App theme</Text>
      <View style={styles.checkbox}>
        <CheckBox
          value={checked}
          onValueChange={() => {
            setChecked(!checked);
          }}
        />
        <Text>{checked ? 'Dark' : 'Light'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
