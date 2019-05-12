import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function TextBtn({text, onPress}) {
  return (
    <TouchableOpacity onpress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
