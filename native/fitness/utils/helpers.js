import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import {white, orange, red, blue, pink, lightPurp} from './colors';

export function isBetween(num, x, y) {
  if (num >= x && num <= y) {
    return true;
  }

  return false;
}

export function calculateDirection(heading) {
  let direction = '';

  if (isBetween(heading, 0, 22.5)) {
    direction = 'North';
  } else if (isBetween(heading, 22.5, 67.5)) {
    direction = 'North East';
  } else if (isBetween(heading, 67.5, 112.5)) {
    direction = 'East';
  } else if (isBetween(heading, 112.5, 157.5)) {
    direction = 'South East';
  } else if (isBetween(heading, 157.5, 202.5)) {
    direction = 'South';
  } else if (isBetween(heading, 202.5, 247.5)) {
    direction = 'South West';
  } else if (isBetween(heading, 247.5, 292.5)) {
    direction = 'West';
  } else if (isBetween(heading, 292.5, 337.5)) {
    direction = 'North West';
  } else if (isBetween(heading, 337.5, 360)) {
    direction = 'North';
  } else {
    direction = 'Calculating';
  }

  return direction;
}

export function timeToString(time = Date.now()) {
  const date = new Date(time);
  const todayUTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );
  return todayUTC.toISOString().split('T')[0];
}

const style = StyleSheet.create({
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		height: 70,
		marginRight: 10,
		width: 70,
	}
})

export function getMetricMetaInfo(metric) {
  const info = {
    run: {
      displayName: 'Run',
      max: 50,
      unit: 'km',
      step: 1,
      type: 'steppers',
      getIcon() {
        return (
          <View style={[style.iconContainer, {backgroundColor: red}]} >
            <MaterialIcons name="directions-run" color={white} size={40} />
          </View>
        );
      },
    },
    bike: {
      displayName: 'Bike',
      max: 100,
      unit: 'km',
      step: 1,
      type: 'steppers',
      getIcon() {
        return (
          <View style={[style.iconContainer, {backgroundColor: orange}]} >
            <MaterialCommunityIcons name="bike" color={white} size={40} />
          </View>
        );
      },
    },
    swim: {
      displayName: 'Swim',
      max: 9900,
      unit: 'm',
      step: 100,
      type: 'steppers',
      getIcon() {
        return (
          <View style={[style.iconContainer, {backgroundColor: pink}]} >
            <MaterialCommunityIcons name="swim" color={white} size={40} />
          </View>
        );
      },
    },
    sleep: {
      displayName: 'Sleep',
      max: 24,
      unit: 'hours',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[style.iconContainer, {backgroundColor: lightPurp}]} >
            <FontAwesome name="bed" color={white} size={40} />
          </View>
        );
      },
    },
    eat: {
      displayName: 'Eat',
      max: 10,
      unit: 'rating',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[style.iconContainer, {backgroundColor: blue}]} >
            <MaterialCommunityIcons name="food" color={white} size={40} />
          </View>
        );
      },
    },
  };
  return typeof metric === 'undefined' ? info : info[metric];
}

export function getDailyReminderValue() {
	return {
		today: "Don't forget to log your data today",
	}
}
