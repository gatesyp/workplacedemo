import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';

export default class RecordButton extends Component {
    constructor(props) {
        super(props);

        this.startRecordingText = '[RECORD]';
        this.stopRecordingText = '[STOP]';
    }

    render() {
        return (
            <Text style={styles.capture} onPress={this.props.recording ? this.props.onStopRecording : this.props.onStartRecording}>
                {this.props.recording ? this.stopRecordingText : this.startRecordingText}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});