import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';
const styles = EStyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    body: {
        flex: 2,
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default styles;
