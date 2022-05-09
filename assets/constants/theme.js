import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const Colors = {
    // base colors
    primary: "#2CB9B0", //Green
    secondary: "#0C0D34",   // Almost Black
    lightGray: "#C5C5C5",
    Gray: "#F6F5F5",

    // colors
    black: "#000000",
    white: "#FFFFFF",
    red: "#B92C2C",

    // Others
    lightBlue: "#BFEAF5",
    lightPrimary: "#42C0B8",
    lightPink: "#FFDDDD",
    lightOrange: "#FDE8CA",
    lightGreen: "#BEECC4",
    lightYellow: "#FFF4C5",
    lightRed: "#E65758",
    primaryTransparent: 'rgba(44, 185, 176, 0.2)',
    whiteTransparent40: 'rgba(255, 255, 255, 0.4)',
    whiteTransparent10: 'rgba(255, 255, 255, 0.1)'
};


export default Colors;