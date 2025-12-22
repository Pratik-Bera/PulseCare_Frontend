import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

const Size = {
    windowWidth: width,
    windowHeight: height,
};

export default Size;