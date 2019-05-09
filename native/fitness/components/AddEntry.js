import React from 'react';
import {View} from 'react-native';
import {getMetricMetaInfo} from '../utils/helpers';
import Slider from './Slider';
import Steppers from './Steppers';
import DateHeader from './DateHeader';

class AddEntry extends React.Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  };

  render() {
    const metaInfo = getMetricMetaInfo();
    return (
      <View>
				<DateHeader date={(new Date()).toLocaleDateString()} />
        {Object.keys(metaInfo).map(key => {
          const {value, type, ...rest} = getMetricMetaInfo(key);
          return (
            <View key={key}>
              {getMetricMetaInfo(key).getIcon()}
              {type === 'slider' ? (
                <Slider
                  value={value}
                  onChange={value => this.slide(value, key)}
                  {...rest}
                />
              ) : (
                <Steppers
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />
              )}
            </View>
          );
        })}
      </View>
    );
  }
}

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

slide = (metric, value) => {
  this.setState(() => ({
    [metric]: value,
  }));
};

export default AddEntry;
