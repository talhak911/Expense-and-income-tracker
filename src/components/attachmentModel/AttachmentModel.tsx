import {View, Text, TouchableOpacity, Modal, Animated} from 'react-native';
import CameraIcon from '../../assets/icons/camera';
import ImageIcon from '../../assets/icons/image';
import DocumentIcon from '../../assets/icons/document';
import {useAttachmentModel} from './useAttachmentModel';
import {AttachmentModelProps} from '../../types/types';
import {styles} from './styles';

const AttachmentModel = ({
  visible,
  onClose,
  onCameraPress,
  onImagePress,
  onDocumentPress,
}: AttachmentModelProps) => {
  const {panResponder, translateY} = useAttachmentModel({visible, onClose});

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="none"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[styles.modalContent, {transform: [{translateY}]}]}
          {...panResponder.panHandlers}>
          <View style={styles.line} />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={onCameraPress}>
              <CameraIcon />
              <Text style={styles.buttonText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onImagePress}>
              <ImageIcon />
              <Text style={styles.buttonText}>Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onDocumentPress}>
              <DocumentIcon />
              <Text style={styles.buttonText}>Document</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default AttachmentModel;
