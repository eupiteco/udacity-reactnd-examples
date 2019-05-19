import React from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {
  getMetricMetaInfo,
  timeToString,
  getDailyReminderValue,
} from '../utils/helpers';
import {submitEntry, removeEntry} from '../utils/api';
import {lightPurp, white} from '../utils/colors';
import {addEntry, receiveEntries} from '../actions';
import FitSlider from './FitSlider';
import FitSteppers from './FitSteppers';
import DateHeader from './DateHeader';
import TextBtn from './TextBtn';

function SubmitButton({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.submitButton,
        Platform.os === 'ios'
          ? styles.iosSubmitButton
          : styles.androidSubmitButton,
      ]}>
      <Text style={styles.submitButtonText}>SUBMIT</Text>
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
    this.props.dispatch;
    //send to homescreen
    this.props.dispatch(
      addEntry({
        [key]: getDailyReminderValue(),
      }),
    );
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
    this.props.dispatch(
      addEntry({
        [key]: entry,
      }),
    );
    //Update UI
    this.setState(() => ({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0,
    }));
    submitEntry({entry, key});
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
      <View style={styles.container}>
        <DateHeader date={new Date().toLocaleDateString()} />
        {Object.keys(metaInfo).map(key => {
          const {value, type, displayName, ...rest} = getMetricMetaInfo(key);
          return (
            <View style={styles.controlsContainer} key={key}>
              {getMetricMetaInfo(key).getIcon()}
              <View>
                <Text style={styles.displayName}>{displayName}</Text>
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
            </View>
          );
        })}
        <SubmitButton onPress={this.submit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
  controlsContainer: {
    flexDirection: 'row',
		marginBottom: 30,
  },
  displayName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: lightPurp,
		padding: 15,
		width: 180,
  },
  submitButtonText: {
    color: white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  androidSubmitButton: {
		borderRadius: 10,
		alignSelf: "flex-end",
	},
  iosSubmitButton: {
		borderRadius: 4,
		alignSelf: "center",
	},
});

function mapStateToProps(state) {
  const key = timeToString();

  return {
    alreadyLogged: state[key] && typeof state[key].today === 'undefined',
  };
}

export default connect(mapStateToProps)(AddEntry);
