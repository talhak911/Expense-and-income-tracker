import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
      paddingTop: 30,
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderWidth:1,
        borderColor:"#F1F1FA",
        marginTop: 24,
        // marginBottom: 24,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    // buttonGoogle:{
    //   marginLeft: 16,
    //   marginRight: 16,
    //   flexDirection:"row",
    //   gap:10,
    //   height: 48,
    //  // backgroundColor:"grey",
    //   borderRadius: 16,
    //   borderColor:"#F1F1FA",
    //   borderWidth:1,
    //   alignItems: "center",
    //   justifyContent: 'center'
    // },
    button: {
        backgroundColor: '#7F3DFF',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        marginTop:19,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      footerText: {
        marginRight: 5,
      },
      footerLink: {
        borderBottomWidth:1,
        borderBottomColor:'#7F3DFF',
        color: '#7F3DFF', 
      },
})