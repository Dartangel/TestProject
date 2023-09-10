import { StyleSheet } from "react-native";
import { config } from "../../config/config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.grey,
        justifyContent: 'center',
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        color: config.black,
        fontWeight: '900',
        padding: 20
    },
    subtitle: {
        fontSize: 20,
        color: config.black,
        fontWeight: '400',
        padding: 20
    }
});

export default styles;