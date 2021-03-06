import React from 'react';
import Slider from 'material-ui/Slider';

class PaySlider extends React.Component {

  state = {
    firstSlider: 0.5,
    secondSlider: 50,
  }

  handleFirstSlider(event, value) {
    this.setState({firstSlider: value});
  }

  handleSecondSlider(event, value) {
    this.setState({secondSlider: value});
  }

  render() {
    return (
      <div>
        <Slider
          min={0}
          max={100}
          step={1}
          defaultValue={50}
          value={this.state.secondSlider}
          onChange={this.handleSecondSlider.bind(this)}
        />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{this.state.secondSlider}</span>
          <span>{' from a range of 0 to 100 inclusive'}</span>
        </p>
      </div>
    );
  }

}

export default PaySlider;