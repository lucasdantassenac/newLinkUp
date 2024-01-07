import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const myDimensions = StyleSheet.create({
    myConfig:{
        width: windowWidth,
        height: windowHeight,
    }

});

export default myDimensions;