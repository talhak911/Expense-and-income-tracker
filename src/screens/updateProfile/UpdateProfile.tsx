import {Image, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EditPictureIcon from '../../assets/icons/editPicture';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {useUpdateProfile} from './useUpdateProfile';
import {styles} from './UpdateProfileStyles';
import {IMAGES} from '../../constants/constants';
export default function UpdateProfile() {
  const {user, fields, image, loading, handleImagePicker, onPressUpdate} =
    useUpdateProfile();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <View>
            <Image
              source={
                image || user?.photoURL
                  ? {uri: image || user?.photoURL}
                  : IMAGES.profile.toString()
              }
              style={styles.image}
            />

            <View style={styles.editIcon}>
              <TouchableOpacity onPress={handleImagePicker}>
                <EditPictureIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          {fields.map((field, index) => (
            <View key={index}>
              <Text style={styles.headingText}>{field.label}</Text>
              <CustomInput
                value={field.value}
                onChange={field.onChange}
                placeHolder={field.placeholder}
              />
            </View>
          ))}
        </View>
        <View style={styles.buttonEnd}>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Update Profile"
              loading={loading}
              onPress={onPressUpdate}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
