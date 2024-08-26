import {Image, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EditPictureIcon from '../../assets/icons/editPicture';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {useUpdateProfile} from './useUpdateProfile';
import {styles} from './styles';

export default function UpdateProfile() {
  const {
    user,
    emailEditable,
    name,
    email,
    image,
    loading,
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
            <Image
              source={{
                uri:
                  image ||
                  user?.photoURL ||
                  'https://th.bing.com/th/id/OIP.7dTfyRneXPY5b7pj0NKuUgAAAA?rs=1&pid=ImgDetMain',
              }}
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
