import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {getMetricMetaInfo, timeToString} from '../utils/helpers';
import FitSlider from './FitSlider';
import FitSteppers from './FitSteppers';
import DateHeader from './DateHeader';
import TextBtn from './TextBtn';

function SubmitButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  );
}
class AddEntry extends React.Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  };

  decrement = metric => {
    const {step} = getMetricMetaInfo(metric);
    this.setState(prevState => {
      const count = prevState[metric] - step;
      return {
        ...prevState,
        [metric]: count < 0 ? 0 : count,
      };
    });
  };

  increment = metric => {
    const {step, max} = getMetricMetaInfo(metric);
    this.setState(prevState => {
      const count = prevState[metric] + step;
      return {
        ...prevState,
        [metric]: count > max ? max : count,
      };
    });
  };

  reset = () => {
    const key = timeToString();
    //Update Redux
    //send to homescreen
    //Update "DB"
  };

  slide = (metric, value) => {
    this.setState(prevState => ({
      ...prevState,
      [metric]: value,
    }));
  };

  submit = () => {
    const key = timeToString();
    const entry = this.state;
    //Update Redux
    //Update UI
    this.setState(() => ({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0,
    }));
    //Update "DB"
    //Navigate to homescreen
    //Clean local notification
  };

  render() {
    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons name="ios-happy" size={100} />
          <Text>You already logged your information for today</Text>
          <TextBtn onPress={this.reset} text="Reset" />
        </View>
      );
    }
    const metaInfo = getMetricMetaInfo();
    return (
      <View>
        <DateHeader date={new Date().toLocaleDateString()} />
        {Object.keys(metaInfo).map(key => {
          const {value, type, ...rest} = getMetricMetaInfo(key);
          return (
            <View key={key}>
              {getMetricMetaInfo(key).getIcon()}
              {type === 'slider' ? (
                <FitSlider
                  onChange={value => this.slide(key, value)}
                  value={this.state[key]}
                  {...rest}
                />
              ) : (
                <FitSteppers
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  value={this.state[key]}
                  {...rest}
                />
              )}
            </View>
          );
        })}
        <SubmitButton onPress={this.submit} />
      </View>
    );
  }
}

export default AddEntry;
