import { StyleSheet, Dimensions } from 'react-native';
import { Height,Width,FontSize } from '../../utils/responsive';
export const styles = StyleSheet.create({
input:{
    height: Height(7),
    alignSelf:"center",
    // width:'100%',
    color:"black",
    width:'100%',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: FontSize(1),
    fontSize:FontSize(16),
    borderColor: '#F1F1FA',
    // maxWidth:500,
    //marginTop: 24,
    // marginBottom: 24,
    //width:Width(6),
    // marginLeft: 16,
    // marginRight: 16,
    //marginHorizontal:Width(4),
    paddingLeft: Width(5), 
}
    // input: {
    //   height: height * 0.06, // 48 pixels as a percentage of screen height
    //   borderRadius: 16,
    //   overflow: 'hidden',
    //   backgroundColor: 'white',
    //   borderWidth: 1,
    //   borderColor: "#F1F1FA",
    //   marginTop: height * 0.03, // 24 pixels as a percentage of screen height
    //   marginLeft: width * 0.08, // 30 pixels as a percentage of screen width
    //   marginRight: width * 0.08, // 30 pixels as a percentage of screen width
    //   paddingLeft: width * 0.04, // 16 pixels as a percentage of screen width
    // },
  });
  