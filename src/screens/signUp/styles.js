import { StyleSheet } from 'react-native';
import { Height,Width } from '../../utils/responsive';
export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
      paddingTop: Height(6), //56
    },

    // logo: {
    //     flex: 1,
    //     height: 120,
    //     width: 90,
    //     alignSelf: "center",
    //     margin: 30
    // },
    // input: {
    //     height: 48,
    //     borderRadius: 16,
    //     overflow: 'hidden',
    //     backgroundColor: 'white',
    //     borderWidth:1,
    //     borderColor:"#F1F1FA",
    //     marginTop: 24,
    //     // marginBottom: 24,
    //     marginLeft: 30,
    //     marginRight: 30,
    //     paddingLeft: 16
    // },

    // button: {
    //     backgroundColor: '#7F3DFF',
    //     marginHorizontal:Width(4),
    //     // marginLeft: 30,
    //     // marginRight: 30,
    //     marginTop: 20,
    //     height: 48,
    //     borderRadius: 16,
    //     alignItems: "center",
    //     justifyContent: 'center'
    // },
    // buttonTitle: {
    //     color: 'white',
    //     fontSize: 16,
    //     fontWeight: "bold"
    // },
    gap:{
      gap:Height(2.9),
       marginHorizontal:Width(4)
    //  gap:26
    },
    footerView: {
       // marginTop:19,
       marginTop:Height(2),
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
        marginRight: Width(1),
        color:"#91919F"
      },
      footerLink: {
        borderBottomWidth:1,
        borderBottomColor:'#7F3DFF',
        color: '#7F3DFF', 
      },
})