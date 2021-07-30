import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async ({ itemName, defaultValue }) => {
  try {
    const savedItem = await AsyncStorage.getItem(itemName);
    if (!savedItem) {
      await AsyncStorage.setItem(itemName, defaultValue);
      return defaultValue;
    }
    return savedItem;
  } catch (error) {
    console.log('getStorage error', error);
    return error;
  }
};

export const setStorage = async ({ itemName, itemValue }) => {
  try {
    await AsyncStorage.setItem(itemName, itemValue);
  } catch (error) {
    console.log('setStorage error', error);
  }
};
