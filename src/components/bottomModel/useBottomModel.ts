import { useEffect, useState } from "react";
import { Animated, Dimensions, PanResponder } from "react-native";

export const useBottomModel=({visible,onClose}:{visible:boolean,onClose:()=>void})=>{
    const screenHeight = Dimensions.get('window').height;
    const [translateY] = useState(new Animated.Value(screenHeight));
  
    useEffect(() => {
      if (visible) {
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(translateY, {
          toValue: screenHeight,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    }, [visible]);
  
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true, // Always start tracking
      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
        gestureState.dy > 5, // Start capturing after a small movement
      onPanResponderMove: Animated.event([null, {dy: translateY}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy > 100) {
          Animated.timing(translateY, {
            toValue: screenHeight,
            duration: 300,
            useNativeDriver: false,
          }).start(onClose);
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            bounciness: 8, // Adjust bounciness for a springy feel
            useNativeDriver: false,
          }).start();
        }
      },
    });

    return{
        panResponder,
        translateY
    }
}