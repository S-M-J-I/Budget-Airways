import { StyleSheet } from "react-native";
import configs from "./styles.configs";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center',
    },
    containerhome: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        alignItems: 'center',
    },
    textInputMedium: {
        width: configs.input.WIDTH_MEDIUM,
        margin: configs.input.MARGIN
    },
    textInputLarge: {
        width: configs.input.WIDTH_LARGE,
        marginTop: configs.input.MARGIN,
        marginBottom: configs.input.MARGIN
    },
    formHeader: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    divider: {
        margin: configs.dividerInsets.MARGIN
    },
    btn: {
        padding: configs.buttonInsets.PADDING_MEDIUM,
        fontWeight: 'bold'
    }
});