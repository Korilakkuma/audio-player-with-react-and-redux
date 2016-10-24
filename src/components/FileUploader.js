import React, { Component, PropTypes } from 'react';

class FileUploader extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return !(this.props.src === nextProps.src);
    // }

    render() {
        return (
            <div>
                <label><input type="file" accept="audio/*" onChange={ event => this.onChange(event) } /></label>
            </div>
        );
    }

    onChange(event) {
        const file = event.target.files[0];

        if (!(file instanceof File)) {
            alert('Please Upload File');
        } else if (file.type.indexOf('audio') === -1) {
            alert('Please Upload Audio File');
        } else {
            const reader = new FileReader();

            // reader.onprogress = event => {
            //     if (event.lengthComputable && event.total > 0) {
            //         const rate = Math.floor((event.loaded / event.total) * 100);
            //         console.log(rate);
            //     }
            // };

            reader.onload = () => {
                this.props.onChange(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }

}

export default FileUploader;
