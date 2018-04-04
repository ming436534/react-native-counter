import React, { Component } from 'react';
import { Text } from 'react-native';
import eases from 'eases';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  static propTypes = {
    start: PropTypes.number,
    target: PropTypes.number.isRequired,
    digits: PropTypes.number,
    time: PropTypes.number,
    easing: PropTypes.string,
    onComplete: PropTypes.func,
    style: PropTypes.any,
  };

  static defaultProps = {
    start: 0,
    digits: 0,
    time: 1000,
    easing: 'linear',
  };

  state = { value: this.props.start };

  componentDidMount() {
    if (this.props.target !== this.state.value) {
      this.initiate(this.props.target);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.target !== nextProps.target) {
      console.log('re');
      this.initiate(nextProps.target);
    }
  }

  initiate(targetValue) {
    this.stop = false;
    this.startTime = Date.now();
    this.initialValue = this.state.value;
    this.targetValue = targetValue;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    const { onComplete } = this.props;

    if (this.stop) {
      if (onComplete) onComplete();
      return;
    }

    requestAnimationFrame(this.animate.bind(this));
    this.draw();
  }

  draw() {
    const { time, easing } = this.props;
    const { initialValue, targetValue, startTime } = this;
    const now = Date.now();
    if (now - startTime >= time) this.stop = true;
    const percentage = Math.min((now - startTime) / time, 1);
    const easeVal = eases[easing](percentage);
    const value = initialValue + (targetValue - initialValue) * easeVal;

    this.setState({ value });
  }

  render() {
    const { digits, style } = this.props;
    const { value } = this.state;

    return (
      <Text style={style}>{value.toFixed(digits)}</Text>
    );
  }
}
