# Tile Game

A simple Tile Game made in React Native where you arrange numbered tiles into numerical order. There are different levels of jumbling to determine how difficult each puzzle is to solve. Simply open the menu on the home screen to see your options

![app](https://kovacsikdev-media.s3.amazonaws.com/tilegame_game.png)

## Features

#### Tile Jumbling

- Wrote a custom script to determine how the tiles should be jumbled to ensure a guaranteed solvable puzzle
- Each level of jumbling determines how many times tiles are automatically moved to re-arrange the numbers
- When the tiles are automatically moved, they move in random order so that each game is randomized, yet solvable
- The "Random" level is a true random. This means that all of the tiles are randomly re-ordered to provide a true challenge. However, be warned, the puzzle may not be solvable

#### Theming

The color scheme of the game is based on the theme set on your device. If your device is in dark mode, then the game will be in dark mode as well

| Light Mode                                                                 | Dark Mode                                                                 |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| ![app](https://kovacsikdev-media.s3.amazonaws.com/tilegame_light_mode.png) | ![app](https://kovacsikdev-media.s3.amazonaws.com/tilegame_dark_mode.png) |

> Side note. React Native has a default text color for some of the text in the Alert box message that can't be changed. I had to edit this file - /android/app/src/main/res/values/styles.xml - to allow me to set the color of the text in the Alert box. Extra information on this issue [https://github.com/facebook/react-native/issues/31345](https://github.com/facebook/react-native/issues/31345)

#### LocalStorage

The level of jumbling that you select in the game is saved locally on your device so that you won't have to reselect a level if you find the right amount of jumbling for yourself

> Side note. React Native does not have the normal web localStorage (as to be expected), so I found a fantastic package that allows storage called [Async Storage](https://react-native-async-storage.github.io/async-storage/). Developing with this package is the same as with web localStorage in storing / getting local data. Very handy

# Local development

## Environment setup

You will need your environment set up correctly before running the app locally. Ensure you have a physical or virtual device available.
Details on setting up your environment for Android and iOS can be found at [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup). This project does not use Expo, so ensure that you are viewing the "React Native CLI Quickstart" section

## Run locally

Continue below once you have your environment set up with Node, npm, JDK, Android Studio, etc

#### Clone the repo

```sh
git clone git@github.com:kovacsikdev/tilegame.git
```

#### Install dependencies

```sh
yarn install
```

#### Start the app

```sh
yarn start
```

# TODO

## Google Play Store

Coming soon. I will add a link to this app on the Google Play Store once it is uploaded to Google Play

## Testing

Coming soon. Currently, I am writing 100% code coverage via Jest

## CI

Coming Soon. This project will use Github Actions to automatically push up a new build of the app to the Google Play Store
