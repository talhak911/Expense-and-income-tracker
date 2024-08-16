import {Image, TouchableOpacity, View} from 'react-native';
import {useAttachment} from './useAttachment';
import {Button} from 'react-native';
import AttachmentIcon from '../../assets/icons/attachment';
import {Text} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FontSize, Height} from '../../utils/responsive';
import CrossIcon from '../../assets/icons/cross';
import AttachmentModel from '../attachmentModel/AttachmentModel';

export const Attachment = () => {
  const {image, modalVisible,setModalVisible,handleDocumentPicker, handleImagePicker,handleCamera, remove} =
    useAttachment();

  return (
    <View style={{gap: 16}}>
      <TouchableOpacity
        onPress={()=>{setModalVisible(!modalVisible)}}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 10,
          borderStyle: 'dashed',
          borderWidth: 3,
          borderColor: '#F1F1FA',
          height: Height(7),
          borderRadius: 16,
        }}>
        <AttachmentIcon />
        <Text style={{color: COLORS.grey, fontSize: FontSize(16)}}>
          Add attachment
        </Text>
      </TouchableOpacity>
      <AttachmentModel visible={modalVisible} onCameraPress={handleCamera} onClose={()=>{setModalVisible(!modalVisible)}} onDocumentPress={handleDocumentPicker} onImagePress={handleImagePicker}/>
      {image && (
        <View style={{position: 'relative', alignSelf: 'flex-start'}}>
          <Image
            source={{uri: image}}
            style={{height: 112, width: 112, borderRadius: 8}}
          />
          <TouchableOpacity
            onPress={remove}
            style={{
              position: 'absolute',
              top: -5,
              right: -5,
            }}>
            <CrossIcon />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
