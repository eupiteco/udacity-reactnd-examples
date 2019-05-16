import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {FontAwesome, Entypo} from '@expo/vector-icons';
import {lightPurp, white, gray} from '../utils/colors';

export default function FitStepper({
  max,
  unit,
  step,
  value,
  onIncrement,
  onDecrement,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onDecrement}
        style={[
          styles.button,
          Platform.os === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
        <FontAwesome
          name="minus"
          size={25}
          color={Platform.os === 'ios' ? gray : white}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onIncrement}
        style={[
          styles.button,
          Platform.os === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
        <Entypo
          name="plus"
          size={35}
          color={Platform.os === 'ios' ? gray : white}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{value}</Text>
        <Text style={styles.text}>{unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 40,
		marginRight: 5,
  },
  androidButton: {
    backgroundColor: lightPurp,
    width: 80,
  },
  iosButton: {
    backgroundColor: white,
    width: 60,
  },
  textContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
