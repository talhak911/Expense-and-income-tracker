import {Image, TouchableOpacity, View} from 'react-native';
import {useAttachment} from './useAttachment';
import AttachmentIcon from '../../assets/icons/attachment';
import {Text} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FontSize, Height} from '../../utils/responsive';
import CrossIcon from '../../assets/icons/cross';
import AttachmentModel from '../attachmentModel/AttachmentModel';
import {styles} from './styles';

export const Attachment = ({
  selectedFile,
  image,
  onAttachmentChange,
  setImage,
  setSelectedFile,
}: {
  image: string | null;
  setImage: (e: string | null) => void;
  selectedFile: string | null;
  setSelectedFile: (e: string | null) => void;
  onAttachmentChange: (e: string | null) => void;
}) => {
  const {
    modalVisible,
    setModalVisible,
    handleDocumentPicker,
    handleImagePicker,
    handleCamera,
    remove,
  } = useAttachment({
    selectedFile,
    onAttachmentChange,
    setImage,
    setSelectedFile,
  });

  return (
    <View style={{gap: 16}}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        style={styles.attachmentButton}>
        <AttachmentIcon />
        <Text style={{color: COLORS.grey, fontSize: FontSize(16)}}>
          Add attachment
        </Text>
      </TouchableOpacity>
      <AttachmentModel
        visible={modalVisible}
        onCameraPress={handleCamera}
        onClose={() => {
          setModalVisible(!modalVisible);
        }}
        onDocumentPress={handleDocumentPicker}
        onImagePress={handleImagePicker}
      />
      {image && (
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
          <TouchableOpacity onPress={remove} style={styles.remove}>
            <CrossIcon />
          </TouchableOpacity>
        </View>
      )}
      {selectedFile && (
        <View>
          <Text style={{color: 'black'}}>{selectedFile}</Text>
          <TouchableOpacity onPress={remove} style={styles.remove}>
            <CrossIcon />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
