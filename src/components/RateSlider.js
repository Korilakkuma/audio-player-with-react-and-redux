import React, { Component, PropTypes } from 'react';

class RateSlider extends Component {
    static propTypes = {
        rate        : PropTypes.number.isRequired,
        onRateChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <label><input type="range" value={ this.props.rate } min="0.5" max="2" step="0.05" onChange={ () => this.onChange() } ref="rateslider" /><span>{ this.props.rate }</span></label>
            </div>
        );
    }

    onChange() {
        this.props.onRateChange(this.refs.rateslider.valueAsNumber);
    }

}

export default RateSlider;
