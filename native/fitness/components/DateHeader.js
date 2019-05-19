import React from 'react';
import {lightPurp} from '../utils/colors';
import {Text} from 'react-native';

export default function DateHeader({date}) {
  return (
    <Text
      style={{
        color: lightPurp,
				marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
      }}>
      {date}
    </Text>
  );
}
