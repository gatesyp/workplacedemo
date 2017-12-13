import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import questionsList from '../data/questionsList';
import { VideoRecorder } from '../components/VideoRecorder';
// import {IonIcons} from '@expo/vector-icons';

class RecordVideo extends Component {
    
    render() {
        return (
        
                // status bar
                // camera view
            < View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="light-content" />
                <VideoRecorder/>
            </View>
        
        )
    };

}

export default RecordVideo;