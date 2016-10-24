import React, { Component, PropTypes } from 'react';

class PlayButton extends Component {
    static propTypes = {
        src    : PropTypes.string.isRequired,
        paused : PropTypes.bool.isRequired,
        onPlay : PropTypes.func.isRequired,
        onPause: PropTypes.func.isRequired
    };

    render() {
        return (
            <button type="button" onClick={ () => this.onClick() }>{ this.props.paused ? "Play" : "Pause" }</button>
        );
    }

    onClick() {
        if (this.props.src) {
            if (this.props.paused) {
                this.props.onPlay();
            } else {
                this.props.onPause();
            }
        }
    }

}

export default PlayButton;
