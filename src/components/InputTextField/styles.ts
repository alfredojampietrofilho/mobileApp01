import {Dimensions, StyleSheet} from 'react-native';


export default StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 5,
    },
    
    input: {
        width: Dimensions.get('screen').width - 40,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 20,
        height: 50,
    },
  });