import React, { useState, useEffect, useRef } from 'react';
import { Image, View, Animated, StyleSheet, StyleProp } from 'react-native';
import { useLoading } from './useLoading';

export const BlinkingImage = ({ uri, style }:{uri:string,style:{}}) => {
   const {isLoading,fadeAnim,setIsLoading}=useLoading()
  
    return (
      <View style={[style, { backgroundColor: 'grey' }]}>
        {isLoading && (
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: 'grey', opacity: fadeAnim },
            ]}
          />
        )}
        <Image
          source={{ uri }}
          style={[style, isLoading && { opacity: 0 }]}
          onLoad={() => setIsLoading(false)}
        />
      </View>
    );
  };
  