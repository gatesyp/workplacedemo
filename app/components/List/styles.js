import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';
const styles = EStyleSheet.create({
    $underlayColor: '$border',
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '$lightGray'

    },
    text: {
        fontSize: 16,
        color: '$darkText',

    },
    separator: {
        marginLeft: 20,
        backgroundColor: '$border',
        flex: 1,
        height: StyleSheet.hairlineWidth,

    }
});

export default styles;
