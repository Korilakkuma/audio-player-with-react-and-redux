import { combineReducers } from 'redux';

function src(state = '', action) {
    switch (action.type) {
        case 'CHANGE':
            return action.src;
        default:
            return state;
    }
}

function paused(state = true, action) {
    switch (action.type) {
        case 'PLAY'  :
        case 'CHANGE':
            return false;
        case 'PAUSE':
            return true;
        case 'STOP':
            return true;
        case 'ENDED':
            return true;
        default:
            return state;
    }
}

function isMute(state = false, action) {
    switch (action.type) {
        case 'MUTE':
            return !action.state;
        default:
            return state;
    }
}

function isLoop(state = false, action) {
    switch (action.type) {
        case 'LOOP':
            return !action.state;
        default:
            return state;
    }
}

function isSeeking(state = false, action) {
    switch (action.type) {
        case 'SEEKING':
            return true
        case 'SEEKED':
            return false;
        default:
            return state;
    }
}

function currentTime(state = 0, action) {
    switch (action.type) {
        case 'CHANGE':
        case 'STOP'  :
            return 0;
        case 'TIME_UPDATE':
        case 'SEEKING'    :
            return action.currentTime
        default:
            return state;
    }
}

function duration(state = 0, action) {
    switch (action.type) {
        case 'DURATION_CHANGE':
            return action.duration;
        default:
            return state;
    }
}

function volume(state = 0.5, action) {
    switch (action.type) {
        case 'VOLUME_CHANGE':
            return action.volume;
        default:
            return state;
    }
}

function rate(state = 1, action) {
    switch (action.type) {
        case 'RATE_CHANGE':
            return action.rate;
        default:
            return state;
    }
}

const reducers = combineReducers({
    src,
    paused,
    isMute,
    isLoop,
    isSeeking,
    currentTime,
    duration,
    volume,
    rate
});

export default reducers;
