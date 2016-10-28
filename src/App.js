import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import Audio from './components/Audio';
import FileUploader from './components/FileUploader';
import TimeSlider from './components/TimeSlider';
import VolumeSlider from './components/VolumeSlider';
import RateSlider from './components/RateSlider';
import PlayButton from './components/PlayButton';
import StopButton from './components/StopButton';
import MuteButton from './components/MuteButton';
import LoopButton from './components/LoopButton';

class App extends Component {
    static propTypes = {
        dispatch   : PropTypes.func.isRequired,
        src        : PropTypes.string.isRequired,
        paused     : PropTypes.bool.isRequired,
        isMute     : PropTypes.bool.isRequired,
        isLoop     : PropTypes.bool.isRequired,
        isSeeking  : PropTypes.bool.isRequired,
        currentTime: PropTypes.number.isRequired,
        duration   : PropTypes.number.isRequired,
        volume     : PropTypes.number.isRequired,
        rate       : PropTypes.number.isRequired
    };

    render() {
        const { dispatch, src, paused, isMute, isLoop, isSeeking, currentTime, duration, volume, rate } = this.props;

        return (
            <div>
                <Audio
                    src={ src }
                    paused={ paused }
                    isMute={ isMute }
                    isLoop={ isLoop }
                    isSeeking={ isSeeking }
                    currentTime={ currentTime }
                    volume={ volume }
                    rate={ rate }
                    onDurationChange={ duration => dispatch(Actions.durationchange(duration)) }
                    onTimeUpdate={ currentTime => dispatch(Actions.timeupdate(currentTime)) }
                    onSeeked={ () => dispatch(Actions.seeked()) }
                    onEnded={ () => dispatch(Actions.ended()) } />
                <FileUploader onChange={ src => dispatch(Actions.change(src)) } />
                <TimeSlider currentTime={ currentTime } duration={ duration } onSeeking={ currentTime => dispatch(Actions.seeking(currentTime)) } />
                <VolumeSlider volume={ volume } onVolumeChange={ volume => dispatch(Actions.volumechange(volume)) } />
                <RateSlider rate={ rate } onRateChange={ rate => dispatch(Actions.ratechange(rate)) } />
                <div>
                    <PlayButton src={ src } paused={ paused } onPlay={ () => dispatch(Actions.play()) } onPause={ () => dispatch(Actions.pause()) } />
                    <StopButton onStop={ () => dispatch(Actions.stop()) } />
                    <MuteButton isMute={ isMute } onMute={ state => dispatch(Actions.mute(state)) } />
                    <LoopButton isLoop={ isLoop } onLoop={ state => dispatch(Actions.loop(state)) } />
                </div>
            </div>
        );
    }

}

export default connect(state => state)(App);
