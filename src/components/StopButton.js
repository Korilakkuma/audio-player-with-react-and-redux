import React, { Component, PropTypes } from 'react';

class StopButton extends Component {
    static propTypes = {
        onStop: PropTypes.func.isRequired
    };

    render() {
        return (
            <button type="button" onClick={ () => this.onClick() }>Stop</button>
        );
    }

    onClick() {
        this.props.onStop();
    }

}

export default StopButton;
