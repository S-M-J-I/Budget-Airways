import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
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
        // margin: 10,
        alignItems: 'center',
        padding: 30
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
    },
    logout: {
        borderColor: '#ff6863',
        borderRadius: 3,
        color: '#ff6863'
    },
    cardView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderRadius: 15,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        margin: 10
    },
    cardViewOutline: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        padding: 10
    },
    input: {
        backgroundColor: Colors.white,
        borderColor: Colors.purple,
        borderRadius: 15
    }
});