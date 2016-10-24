import React, { Component, PropTypes } from 'react';

class TimeSlider extends Component {
    static propTypes = {
        currentTime : PropTypes.number.isRequired,
        duration    : PropTypes.number.isRequired,
        onSeeking   : PropTypes.func.isRequired
    }

    static convertTime(time) {
        const m = `0${Math.floor(time / 60)}`.slice(-2);
        const s = `0${Math.floor(time % 60)}`.slice(-2);

        return `${m}:${s}`;
    }

    render() {
        return (
            <div>
                <label><input type="range" value={ this.props.currentTime } min="0" max={ this.props.duration } step="1" onChange={ () => this.onChange() } ref="timeslider" /> [<span>{ TimeSlider.convertTime(this.props.currentTime) }</span> / <span>{ TimeSlider.convertTime(this.props.duration) }</span>]</label>
            </div>
        );
    }

    onChange() {
        this.props.onSeeking(this.refs.timeslider.valueAsNumber);
    }

}

export default TimeSlider;
