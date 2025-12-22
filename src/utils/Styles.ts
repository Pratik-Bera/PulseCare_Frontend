import { StyleSheet } from 'react-native';
import Color from './Color';
import Size from './Size';

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    alignCenter: {
        // justifyContent: 'center',
        alignItems: 'center',
    },
    alignJustifyCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    //height and widths
    fullWidth: {
        width: Size.windowWidth,
    },
    fullHeight: {
        height: Size.windowHeight,
    },

    width95:{
        width: Size.windowWidth * 0.95,
    },
    width90:{
        width: Size.windowWidth * 0.9,
    },


})

export default GlobalStyles;