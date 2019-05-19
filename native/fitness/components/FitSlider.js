import React from 'react';
import {View, Text, Slider, StyleSheet} from 'react-native';

export default function FitSlider({max, unit, step, value, onChange}) {
  return (
    <View style={styles.container}>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
				style={styles.slider}
      />
			<View style={styles.textContainer}>
				<Text style={styles.text}>{value} </Text>
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
	slider: {
		width: 165,
	},
  textContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
