import { Image, View, Animated, StyleSheet } from 'react-native';
import { useLoading } from './useLoading';
import { IMAGES } from '../../constants/constants';

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
              source={uri?{uri}:IMAGES.profile.toString()}
          style={[style, isLoading && { opacity: 0 }]}
          onLoadEnd={() => setIsLoading(false)}
        />
      </View>
    );
  };
  