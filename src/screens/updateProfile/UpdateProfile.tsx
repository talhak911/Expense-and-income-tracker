import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '../../constants/colors';
import {FontSize, Height, Width} from '../../utils/responsive';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EditPictureIcon from '../../assets/icons/editPicture';
import { CustomInput } from '../../components/customInput/CustomInput';
import { CustomButton } from '../../components/customButton/CustomButtom';

export default function UpdateProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <View style={styles.editIcon}>
              <TouchableOpacity>
                <EditPictureIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bottomView}>
          <View>
            <Text style={styles.headingText}>Email</Text>
            <CustomInput onChange={()=>{}} placeHolder='youremail@xyz.com' value=''/>
          </View>
          <View>
            <Text style={styles.headingText}>Name</Text>
            <CustomInput onChange={()=>{}} placeHolder='John Doe' value=''/>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton title='Update Profile' loading={false} onPress={()=>{} }/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1, 
  },
  imageContainer: {
    marginTop: Height(4),
    borderColor: COLORS.deepPurple,
    borderRadius: 70,
    alignSelf: 'center',
    position: 'relative',
    borderWidth: 2,
    padding: 3,
  },
  image: {
    width: Width(29),
    height: Width(29),
    borderRadius: Width(14.5),
    backgroundColor: 'orange',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  bottomView: {
    marginTop: 51,
    paddingHorizontal: Width(4),
    gap: 24,
  },
  headingText: {
    color: COLORS.black50,
    fontSize: FontSize(18),
    fontWeight: "600",
    paddingLeft: Width(3),
    marginBottom: 8,
  },
  buttonContainer: {
    paddingHorizontal: Width(4),
    paddingBottom: Height(2),
    backgroundColor: 'white',
  },
});
