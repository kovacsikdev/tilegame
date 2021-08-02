import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
  Dimensions,
} from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { useTheme } from '@kovacsikdev/lib/themeContext/themeContext';
import { getStorage } from '@kovacsikdev/lib/asyncStorage/asyncStorage';
import { arrayGenerator, checkIfTileCanMoveToEmpty } from './helpers';

export const Game = ({ size }) => {
  const [gameNumbers, setGameNumbers] = React.useState([]);
  const [winCondition, setWinCondition] = React.useState([]);
  const [difficultyLevel, setDifficultyLevel] = React.useState('');
  const [tileSize, setTileSize] = React.useState(0);

  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const {
    theme: { colors },
  } = useTheme();

  let isWon = false;

  // Reset the game if the player navigates away from the screen
  if (!isFocused && gameNumbers.length > 0) {
    setGameNumbers([]);
  }

  const jumbleTiles = async () => {
    try {
      const difficulty = await getStorage({
        itemName: '@difficulty',
        defaultValue: '1',
      });
      setDifficultyLevel(`difficulty level ${difficulty}`);
      setTileSize((Dimensions.get('window').width / size) * 0.9);
      setGameNumbers(
        arrayGenerator({
          size,
          difficulty,
        }),
      );
    } catch (error) {
      console.log('GAME get item error', error);
    }
  };

  const moveTile = tileIndex => {
    const emptyIndex = gameNumbers.indexOf(0);
    const canMove =
      checkIfTileCanMoveToEmpty({ tileIndex, emptyIndex, size }) && !isWon;

    if (canMove) {
      let newPositions = [...gameNumbers];

      newPositions[emptyIndex] = gameNumbers[tileIndex];
      newPositions[tileIndex] = 0;
      setGameNumbers(newPositions);
    }
  };

  const resetTiles = () => {
    Alert.alert(
      'Reset game',
      'Jumble a new game?',
      [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          onPress: () => jumbleTiles(),
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const winGame = () => {
    isWon = true;
    Alert.alert('Congrats!', 'You WON! Play again?', [
      {
        text: 'Play again',
        onPress: () => {
          isWon = false;
          jumbleTiles();
        },
      },
      {
        text: 'Go home',
        onPress: () => navigation.navigate('Home'),
      },
    ]);
  };

  React.useEffect(() => {
    if (isFocused) {
      setWinCondition(arrayGenerator({ size }));
      jumbleTiles();
    }
  }, [isFocused]);

  React.useEffect(() => {
    if (
      gameNumbers.length > 0 &&
      JSON.stringify(gameNumbers) === JSON.stringify(winCondition)
    ) {
      winGame();
    }
  }, [gameNumbers]);

  return (
    <>
      {gameNumbers.length ? (
        <>
          <Text style={{ ...styles.text, color: colors.text }}>
            Tap tiles to move into numerical order
          </Text>
          <View style={styles.game}>
            {gameNumbers.map((num, index) => {
              if (num === 0)
                return (
                  <View
                    key={`gameNum_${num}`}
                    style={{
                      ...styles.empty,
                      width: tileSize,
                      height: tileSize,
                      backgroundColor: colors.foreground,
                    }}></View>
                );

              return (
                <TouchableOpacity
                  key={`gameNum_${num}`}
                  style={{
                    ...styles.tile,
                    width: tileSize,
                    height: tileSize,
                    borderColor: colors.text,
                  }}
                  onPress={() => moveTile(index)}>
                  <Text style={{ ...styles.tileNum, color: colors.text }}>
                    {num}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.text}>{difficultyLevel}</Text>
          <View>
            <Button
              title="Reset"
              onPress={() => {
                resetTiles();
              }}
            />
          </View>
        </>
      ) : (
        <Text style={{ ...styles.loading, color: colors.text }}>
          Generating board...
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 20,
    textAlign: 'center',
  },
  game: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  tileNum: {
    fontSize: 18,
  },
  empty: {
    borderWidth: 1,
    borderRadius: 5,
  },
  loading: {
    textAlign: 'center',
    marginTop: 50,
  },
});
