import React, { Component, PropTypes } from 'react';

class VolumeSlider extends Component {
    static propTypes = {
        volume        : PropTypes.number.isRequired,
        onVolumeChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <label><input type="range" value={ this.props.volume } min="0" max="1" step="0.05" onChange={ () => this.onChange() } ref="volumeslider" /><span>{ this.props.volume }</span></label>
            </div>
        );
    }

    onChange() {
        this.props.onVolumeChange(this.refs.volumeslider.valueAsNumber);
    }

}

export default VolumeSlider;
