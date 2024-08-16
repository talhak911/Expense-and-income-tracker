import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
 import { Dimensions, PixelRatio } from "react-native";
 const {height,width,fontScale} = Dimensions.get("window")
  console.log("Heing is " ,height)
  console.log("width is " ,width)
  //export const Width = (w:number)=> responsiveWidth(w)
  // export const Height = (h:number)=> responsiveHeight(h)
   //export const FontSize = (f:number)=> responsiveFontSize(f)
   export const Height = (h:number)=> {
    const size = height * (h/100)
    return size
  }
   export const Width = (w:number)=> {
    const size = width * (w/100)
    return size
  }
  
  export const FontSize = (f:number) => {
    // PixelRatio is used to adjust based on the pixel density of the device
    const size = PixelRatio.roundToNearestPixel((width / 375) * f);
    return size;
  };
  