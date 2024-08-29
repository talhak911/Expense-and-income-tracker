import React, { useState, useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const useLoading = () => {

    const [isLoading, setIsLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      if (isLoading) {
        Animated.loop(
          Animated.sequence([
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }),
          ])
        ).start();
      } else {
        fadeAnim.stopAnimation();
      }
    }, [isLoading]);
  return {
setIsLoading,isLoading,fadeAnim
  }
}

