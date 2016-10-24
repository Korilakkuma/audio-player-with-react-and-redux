import React, { Component, PropTypes } from 'react';

class Audio extends Component {
    static propTypes = {
        src             : PropTypes.string.isRequired,
        paused          : PropTypes.bool.isRequired,
        isMute          : PropTypes.bool.isRequired,
        isLoop          : PropTypes.bool.isRequired,
        isSeeking       : PropTypes.bool.isRequired,
        currentTime     : PropTypes.number.isRequired,
        volume          : PropTypes.number.isRequired,
        rate            : PropTypes.number.isRequired,
        onDurationChange: PropTypes.func.isRequired,
        onTimeUpdate    : PropTypes.func.isRequired,
        onSeeked        : PropTypes.func.isRequired,
        onEnded         : PropTypes.func.isRequired
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return !(this.props.src === nextProps.src);
    // }

    render() {
        return (
            <div>
                <audio
                    src={ (this.props.src === '') ? null : this.props.src }
                    onDurationChange={ () => this.onDurationChange() }
                    onTimeUpdate={ () => this.onTimeUpdate() }
                    onSeeked={ () => this.onSeeked() }
                    onEnded={ () => this.onEnded() }
                    ref="audio">
                </audio>
            </div>
        );
    }

    // componentDidMount() {
    //     this.toggleAudio();
    // }

    componentDidUpdate() {
        this.toggleAudio();
    }

    toggleAudio() {
        const audio = this.refs.audio;

        if (this.props.paused) {
            if (this.props.currentTime === 0) {
                audio.currentTime = 0;
            }

            audio.pause();
        } else {
            if (this.props.isSeeking) {
                audio.currentTime = this.props.currentTime;
            }

            audio.volume       = this.props.volume;
            audio.playbackRate = this.props.rate;
            audio.muted        = this.props.isMute;
            audio.loop         = this.props.isLoop;

            const promise = audio.play();

            if (promise) {
                promise.then(() => {
                }, () => {
                });
            }
        }
    }

    onDurationChange() {
        this.props.onDurationChange(this.refs.audio.duration);
    }

    onTimeUpdate() {
        this.props.onTimeUpdate(this.refs.audio.currentTime);
    }

    onSeeked() {
        this.props.onSeeked();
    }

    onEnded() {
        this.props.onEnded();
    }

}

export default Audio;
