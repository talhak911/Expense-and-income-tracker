import {ActivityIndicator, Image, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EditPictureIcon from '../../assets/icons/editPicture';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {useUpdateProfile} from './useUpdateProfile';
import {styles} from './styles';
import {Images} from '../../constants/constants';
import { COLORS } from '../../constants/color';
export default function UpdateProfile() {
  const {
    user,
    emailEditable,
    name,
    email,
    imageLoading,
    image,
    loading,
    handleImageLoad,
    handleImagePicker,
    onChangeEmail,
    onChangeName,
    onPressUpdate,
  } = useUpdateProfile();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <View>
            {imageLoading ? (
              <ActivityIndicator size={'small'} color={COLORS.purple}/>
            ) : (
              <Image
                onLoadEnd={()=>{handleImageLoad(false)}}
                source={{uri: image || user?.photoURL || ''} || Images.profile}
                style={styles.image}
              />
            )}
            <View style={styles.editIcon}>
              <TouchableOpacity onPress={handleImagePicker}>
                <EditPictureIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bottomView}>
          <View>
            <Text style={styles.headingText}>Email</Text>
            <CustomInput
              editable={emailEditable}
              onChange={onChangeEmail}
              placeHolder="youremail@xyz.com"
              value={email}
            />
          </View>
          <View>
            <Text style={styles.headingText}>Name</Text>
            <CustomInput
              onChange={onChangeName}
              placeHolder="Talha Khan"
              value={name}
            />
          </View>
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
