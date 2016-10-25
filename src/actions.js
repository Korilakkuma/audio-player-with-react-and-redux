function change(src) {
    return {
        type: 'CHANGE',
        src
    };
}

function play() {
    return {
        type: 'PLAY'
    };
}

function pause() {
    return {
        type: 'PAUSE'
    };
}

function stop() {
    return {
        type: 'STOP'
    };
}

function mute(state) {
    return {
        type: 'MUTE',
        state
    };
}

function loop(state) {
    return {
        type: 'LOOP',
        state
    };
}

function timeupdate(currentTime) {
    return {
        type: 'TIME_UPDATE',
        currentTime
    };
}

function seeking(currentTime) {
    return {
        type: 'SEEKING',
        currentTime
    };
}

function seeked() {
    return {
        type: 'SEEKED'
    };
}

function ended() {
    return {
        type: 'ENDED'
    };
}

function durationchange(duration) {
    return {
        type: 'DURATION_CHANGE',
        duration
    };
}

function volumechange(volume) {
    return {
        type: 'VOLUME_CHANGE',
        volume
    };
}

function ratechange(rate) {
    return {
        type: 'RATE_CHANGE',
        rate
    };
}

export { play, pause, stop, mute, loop, change, timeupdate, seeking, seeked, ended, durationchange, volumechange, ratechange };
