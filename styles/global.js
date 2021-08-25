import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerStyle: {
        backgroundColor: '#FFFFFF',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    slideImage: {
        marginBottom: 52
    },
    slideTitle: {
        fontFamily: 'inter-bold',
        fontSize: 17,
        lineHeight: 21,
        marginBottom: 5
    },
    slideText: {
        fontFamily: 'inter-regular',
        fontSize: 15,
        lineHeight: 17
    },
    slideAuth: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    slideSignUp: {
        backgroundColor: '#F06E0C',
        borderRadius: 5,
        paddingHorizontal: 28,
        paddingVertical: 7,
        marginRight: 20
    },
    slideSignUpText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'inter-regular',
        lineHeight: 19
    },
    slideLogIn: {
        backgroundColor: '#2F970C',
        borderRadius: 5,
        paddingHorizontal: 33,
        paddingVertical: 7,
    },
    slideLogInText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'inter-regular',
        lineHeight: 19
    },
    slideDot: {
        backgroundColor: '#C1C1C1'
    },
    slideActiveDot: {
        backgroundColor: '#2F970C'
    },
    slidePrevBtn: {
        fontSize: 15,
        color: '#000000',
        fontFamily: 'inter-regular',
        lineHeight: 27,
        marginTop: 20,
        fontWeight: '800',
        marginLeft: 20
    },
    slideNextBtn: {
        fontSize: 15,
        color: '#2F970C',
        fontFamily: 'inter-regular',
        lineHeight: 27,
        marginTop: 18,
        fontWeight: '800',
        marginRight: 20
    },
    authSection: {
        marginBottom: 30,
    },
    authHeader: {
        marginVertical: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    authHeaderText: {
        fontFamily: 'inter-regular',
        fontWeight: 'bold',
        fontSize: 23,
        color: '#000000',
    },
    authFormContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    authInputField: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F2F2F2',
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#F2F2F2'
    },
    authError: {
        color: 'red',
        fontSize: 11,
        marginBottom: 7,
        marginTop: -15
    },
    authIcon: {
        padding: 10
    },
    authInput: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 11,
        color: '#9F9C9C',
        fontSize: 13
    },
    signupBtn: {
        backgroundColor: '#F06E0C',
        borderRadius: 5,
        color: '#FFFFFF',
        fontFamily: 'inter-regular',
        fontSize: 20,
        width: '100%',
        paddingHorizontal: 65,
        paddingVertical: 10,
        marginBottom: 10
    },
    authBtn: {
        width: '100%',
        backgroundColor: '#2F970C',
        paddingVertical: 10,
        paddingHorizontal: 70,
        fontSize: 20,
        borderRadius: 5,
        color: '#FFFFFF',
        paddingHorizontal: 100,
        fontFamily: 'inter-regular'
    },
    authLoginWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    rememberMeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 50
    },
    rememberSwitch: {
        color: '#8F8F8F',
        fontFamily: 'inter-regular',
        fontSize: 12,
        marginTop: 5
    },
    authForgotLink: {
        color: '#F06E0C',
        fontSize: 12,
        marginTop: 5
    },
    authLoginText: {
        fontFamily: 'inter-regular',
        color: '#444444'
    },
    authLoginLink: {
        fontFamily: 'inter-regular',
        color: '#2F970C'
    },
    header: {
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 9,
        paddingBottom: 3,
        paddingHorizontal: 0
    },
    headerTextWrap: {
        flexDirection: 'row',
        marginLeft: 69
    },
    headerImage: {
        width: 40,
        height: 40
    },
    headerText: {
        fontFamily: 'inter-medium',
        fontSize: 17,
        fontWeight: '100',
        marginTop: 8
    },
    convertedText: {
        color: '#2F970C'
    },
    codeText: {
        color: '#F06E0C'
    },
    mainHeaderText: {
        marginLeft: 10,
        fontSize: 23,
        fontFamily: 'inter-regular',
        fontWeight: 'bold'
    },
    mainDetailHeaderText: {
        fontSize: 18,
        fontFamily: 'inter-regular',
        fontWeight: 'bold'
    },
    lottie: {
        width: 500,
        height: 500
    },
    headerSlide: {
        marginBottom: 30
    },
    optionsWrapper: {
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#DFDFDF"
    },
    optionSlide: {
        backgroundColor: '#2F970C',
        borderRadius: 5,
        height: 72,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    OptionSlideTitle: {
        textAlign: 'center',
        fontFamily: 'inter-regular',
        color: '#FFFFFF',
        fontWeight: 'bold',
        paddingTop: 5
    },
    homeMRWrapper: {
        flexDirection: 'column',
        marginVertical: 20,
        marginHorizontal: 14,
        justifyContent: 'space-between'
    },
    homeMRHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    homeMRTitle: {
        fontFamily: 'inter-regular',
        color: '#F06E0C',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 27
    },
    homeMRRoute: {
        color: '#3F3F3F',
        fontFamily: 'inter-regular',
        fontSize: 13,
        fontWeight: '700',
        lineHeight: 19,
        marginTop: 3
    },
    HMRContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        height: 150
    },
    homeMRItem: {
        width: 107,
        marginRight: 5
    },
    homeMRImage: {
        width: 107,
        height: 76
    },
    homeMRContent: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    homeMRTitleText: {
        fontSize: 11,
        fontFamily: 'inter-bold',
        color: '#2F970C',
        marginBottom: 2
    },
    homeMRBody: {
        fontSize: 11,
        fontFamily: 'inter-regular',
        color: '#363A43',
        lineHeight: 11
    },
    homeAuthorDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    homeAuthor: {
        color: '#8B8787',
        fontFamily: 'inter-regular',
        fontSize: 10
    },
    homeDate: {
        color: '#8B8787',
        fontFamily: 'inter-regular',
        fontSize: 10
    },
    footer: {
        backgroundColor: '#363A43',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 18,
        paddingBottom: 45,
        paddingHorizontal: 25,
        position: 'relative',
        bottom: 0,
        left: 0
    },
    footerHeader: {
        fontFamily: 'inter-bold',
        color: '#FFFFFF',
        fontSize: 18,
    },
    footerText: {
        fontFamily: 'inter-regular',
        color: '#FFFFFF',
        fontSize: 11,
        textAlign: 'center',
        marginVertical: 5
    },
    bga: {
        width: 158,
        height: 26
    },
    detailImage: {
        height: 200
    },
    detailAuthorDateWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
        color: '#333333'
    },
    detailAuthorDate: {
        fontFamily: 'inter-regular',
        fontSize: 14,
    },
    bold: {
        fontWeight: 'bold',
    },
    detailTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'inter-bold',
        marginVertical: 10,
        color: '#2F970C'
    },
    detailContent: {
        paddingHorizontal: 10,
        fontFamily: 'inter-regular',
        fontSize: 15,
        paddingBottom: 10
    },
    MRsliderImage: {
        resizeMode: 'cover',
        justifyContent: 'center',
        height: 150,
    },
    MRslidertext: {
        fontSize: 55,
        color: '#FFFFFF',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        height: '100%',
        fontFamily: 'inter-bold',
        fontWeight: 'bold',
        paddingTop: 20
    },
    MRadText: {
        color: '#FFFFFF',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        height: '100%',
        fontFamily: 'inter-bold',
        fontWeight: 'bold',
        paddingTop: 40,
        fontSize: 30
    },
    listContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    listWrapper: {
        marginBottom: 15
    },
    listImage: {
        width: '100%',
        height: 150
    },
    listBodyContainer: {
        backgroundColor: '#DCDCDC',
        width: '100%',
        paddingVertical: 7,
        paddingHorizontal: 15,
        justifyContent: 'space-between'
    },
    listTitle: {
        color: '#2F970C',
        fontSize: 16,
        fontFamily: 'inter-bold',
    },
    listContent: {
        fontSize: 14,
        fontFamily: 'inter-regular',
        marginTop: 5
    },
    listADsection: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listAD: {
        fontSize: 13,
        fontFamily: 'inter-regular',
        color: '#333333'
    }
});

export default styles;