import React from 'react';
import { Image, View, Animated, StyleSheet, StyleProp } from 'react-native';
import { useLoading } from './useLoading';
import { Images } from '../../constants/constants';

export const BlinkingImage = ({ uri, style }:{uri?:string|null,style:{}}) => {
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
              source={uri?{uri}:Images.profile.toString()}
          style={[style, isLoading && { opacity: 0 }]}
          onLoadEnd={() => setIsLoading(false)}
        />
      </View>
    );
  };
  