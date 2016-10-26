const initState = {
    src        : '',
    paused     : true,
    isMute     : false,
    isLoop     : false,
    isSeeking  : false,
    currentTime: 0,
    duration   : 0,
    volume     : 0.5,
    rate       : 1.0
};

function reducer(state = initState, action) {
    switch (action.type) {
        case 'CHANGE':
            return Object.assign({}, state, { src: action.src, paused: false, currentTime: 0 });
        case 'PLAY':
            return Object.assign({}, state, { paused: false });
        case 'PAUSE':
            return Object.assign({}, state, { paused: true });
        case 'STOP':
            return Object.assign({}, state, { paused: true, currentTime: 0 });
        case 'MUTE':
            return Object.assign({}, state, { isMute: !state.isMute });
        case 'LOOP':
            return Object.assign({}, state, { isLoop: !state.isLoop });
        case 'TIME_UPDATE':
            return Object.assign({}, state, { currentTime: action.currentTime });
        case 'SEEKING':
            return Object.assign({}, state, { currentTime: action.currentTime, isSeeking: true });
        case 'SEEKED':
            return Object.assign({}, state, { isSeeking: false });
        case 'ENDED':
            return Object.assign({}, state, { paused: true });
        case 'DURATION_CHANGE':
            return Object.assign({}, state, { duration: action.duration });
        case 'VOLUME_CHANGE':
            return Object.assign({}, state, { volume: action.volume });
        case 'RATE_CHANGE':
            return Object.assign({}, state, { rate: action.rate });
        default:
            return state;
    }
}

export default reducer;
