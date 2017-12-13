import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import questionsList from '../data/questionsList';
import { ListItem, Separator} from '../components/List';
import {IonIcons} from '@expo/vector-icons';

const SELECTED = 'What was the most rewarding part of being an MIT?';
class QuestionsList extends Component {
    handlePress = () => {
        console.log('row press');
    };

    render() {
        return (
        <Container>

            < View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="light-content" />
                <FlatList
                    data={questionsList}
                    renderItem={({ item }) => 
                    <ListItem
                    text={item}
                    selected={item === SELECTED}
                    onPress={this.handlePress}
                     />
                    } 
                    keyExtractor={(item) => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        </Container>
        )
    };

}

export default QuestionsList;