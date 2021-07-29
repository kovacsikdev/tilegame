import React from 'react';
import { View } from 'react-native';

import { Title } from '@kovacsikdev/components/Title/Title';
import { Game } from '@kovacsikdev/components/Game/Game';

export const GamePage = ({ route }) => {
  const size = route?.params?.size || 3;
  return (
    <View>
      <Title size={size} />
      <Game size={size} />
    </View>
  );
};
