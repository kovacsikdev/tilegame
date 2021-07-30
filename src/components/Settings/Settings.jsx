import React from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { useTheme } from '@kovacsikdev/lib/themeContext/themeContext';
import {
  getStorage,
  setStorage,
} from '@kovacsikdev/lib/asyncStorage/asyncStorage';

export const Settings = props => {
  const {
    theme: { colors },
  } = useTheme();
  const [savedDifficulty, setSavedDifficulty] = React.useState('1');

  const getSavedDifficulty = async () => {
    const difficulty = await getStorage({
      itemName: '@difficulty',
      defaultValue: '1',
    });
    setSavedDifficulty(difficulty);
  };

  const updateDifficulty = difficulty => {
    setStorage({
      itemName: '@difficulty',
      itemValue: difficulty,
    });
  };

  const radioButtons = [
    {
      label: 'Level 1',
      difficulty: '1',
    },
    {
      label: 'Level 2',
      difficulty: '2',
    },
    {
      label: 'Level 3',
      difficulty: '3',
    },
    {
      label: 'Level 4',
      difficulty: '4',
    },
    {
      label: 'Level 5',
      difficulty: '5',
    },
    {
      label: 'Random',
      difficulty: 'random',
    },
  ];

  React.useEffect(() => {
    getSavedDifficulty();
  }, []);

  return (
    <DrawerContentScrollView style={{ backgroundColor: colors.foreground }}>
      <View>
        <Text style={{ ...styles.text, color: colors.text }}>Settings</Text>
        <Text style={{ ...styles.subtext, color: colors.text }}>
          Choose a level to jumbled the tiles. Random will jumble the tiles
          randomly and will not gaurantee a solvable puzzle.
        </Text>
      </View>

      <RadioButtonRN
        data={radioButtons}
        selectedBtn={e => updateDifficulty(e.difficulty)}
        initial={savedDifficulty === 'random' ? 5 : parseInt(savedDifficulty)}
        box={false}
        textColor={colors.text}
        textStyle={styles.radio}
        deactiveColor={colors.text}
      />

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
  subtext: {
    textAlign: 'center',
  },
  radio: {
    marginTop: 10,
    marginBottom: 10,
  },
});
