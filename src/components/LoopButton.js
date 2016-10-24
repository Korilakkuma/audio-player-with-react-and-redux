import React, { Component, PropTypes } from 'react';

class LoopButton extends Component {
    static propTypes = {
        isLoop: PropTypes.bool.isRequired,
        onLoop: PropTypes.func.isRequired
    };

    render() {
        return (
            <button type="button" onClick={ () => this.onClick() }>{ this.props.isLoop ? 'Loop ON' : 'Loop OFF' }</button>
        );
    }

    onClick() {
        this.props.onLoop(this.props.isLoop);
    }

}

export default LoopButton;
