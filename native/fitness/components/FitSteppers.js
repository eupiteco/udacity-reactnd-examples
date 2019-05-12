import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {FontAwesome, Entypo} from '@expo/vector-icons'

export default function FitStepper({max, unit, step, value, onIncrement, onDecrement}) {
	return (
		<View>
			<TouchableOpacity onPress={onDecrement}>
				<FontAwesome name="minus" size={35} color="black" />
			</TouchableOpacity>
			<TouchableOpacity onPress={onIncrement}>
				<Entypo name="plus" size={35} color="black" />
			</TouchableOpacity>
			<Text>{value}</Text>
			<Text>{unit}</Text>
		</View>
	)
}
