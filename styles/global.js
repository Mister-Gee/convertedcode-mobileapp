import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    introContainer: {},
    introImage: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column"
    },
    introHeader: {
        marginTop: 100,
        flexDirection: 'row',
        padding: 20
    },
    logo: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        marginRight: 15
    },
    introHeaderText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontFamily: 'inter-black',
        lineHeight: 28,
        width: 200,
        marginTop: 5
    },
    converted: {
        color: '#2F970C'
    },
    code: {
        color: '#F06E0C',
    },
    introBtns: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    signIn: {
        color: '#FFFFFF',
        fontFamily: 'inter-regular',
        fontSize: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: '#2F970C',
        paddingVertical: 10,
        paddingHorizontal: 120,
        backgroundColor: '#2F970C'
    },
    signUp: {
        color: '#2F970C',
        fontFamily: 'inter-regular',
        fontSize: 20,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: '#FFFFFF',
        paddingVertical: 8,
        paddingHorizontal: 115,
        backgroundColor: '#FFFFFF'
    },
});

export default styles;