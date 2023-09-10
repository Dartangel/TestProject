import { Dimensions, StyleSheet } from "react-native";
import { config } from "../../config/config";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    content: {
        height: 120,
        elevation: 3,
        shadowRadius: 5,
        shadowOpacity: 0.5,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        width: width / 2 - 20,
        justifyContent: 'center',
        shadowColor: config.black,
        backgroundColor: config.transparentMainColor,
    },
    scrollView: {
        flex: 1,
        paddingTop: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: config.white,
    },
    contentContainer: {
        flexWrap: 'wrap',
        paddingBottom: 35,
        flexDirection: 'row',
    },
    title: {
        paddingTop: 10,
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 25,
        color: config.mainColor,
    },
    moreButton: {
        width: '100%',
        borderRadius: 15,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: config.mainColor
    },
    moreTitle: {
        fontSize: 20,
        fontWeight:'bold'
    }
});

export default styles;