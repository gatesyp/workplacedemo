import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

export default class FlipCameraButton extends Component {
    constructor(props) {
        super(props);

        this.flipCameraText = '[FLIP]';
        this.noFlipText = '[test]';

        this.getStyle = this.getStyle.bind(this);
    }

    render() {
        return (
            <Text style={this.getStyle()} onPress={this.props.onCameraFlip}>
                {this.props.recording ? this.noFlipText : this.flipCameraText}
            </Text>
        );
    }

    getStyle() {
        return {
            display: this.props.recording ? 'none' : 'flex',
            flex: 0,
            maxHeight: 40,
            maxWidth: 70,
            backgroundColor: '#fff',
            borderRadius: 5,
            color: '#000',
            padding: 10,
            margin: 40
        };
    }
}