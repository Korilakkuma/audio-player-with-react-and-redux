import React, { Component, PropTypes } from 'react';

class MuteButton extends Component {
    static propTypes = {
        isMute: PropTypes.bool.isRequired,
        onMute: PropTypes.func.isRequired
    };

    render() {
        return (
            <button type="button" onClick={ () => this.onClick() }>{ this.props.isMute ? 'Mute ON' : 'Mute OFF' }</button>
        );
    }

    onClick() {
        this.props.onMute(this.props.isMute);
    }

}

export default MuteButton;
