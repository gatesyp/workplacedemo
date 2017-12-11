import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import questionsList from '../data/questionsList';
import { ListItem } from '../components/List';
class QuestionsList extends Component {
    handlePress = () => {
        console.log('row press');
    };

    render() {
        return (<Container>

            < View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="light-content" />
                <FlatList
                    data={questionsList}
                    renderItem={({ item }) => <ListItem />}
                    keyExtractor={(item) => item}
                />
            </View>
        </Container>
        )
    };

}

export default QuestionsList;