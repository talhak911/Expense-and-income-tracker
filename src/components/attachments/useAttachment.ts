import {useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import FilePickerManager from 'react-native-file-picker';
import DocumentPicker from 'react-native-document-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const useAttachment = ({
  onAttachmentChange,
  setImage,
  selectedFile,
  setSelectedFile,
}: {
  setImage: (e: string | null) => void;
  selectedFile: string | null;
  setSelectedFile: (e: string | null) => void;
  onAttachmentChange: (e: string | null) => void;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const remove = () => {
    setSelectedFile(null);
    setImage('');
    onAttachmentChange(null);
  };

  const handleDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [
          DocumentPicker.types.doc,
          DocumentPicker.types.pdf,
          DocumentPicker.types.docx,
        ],
      });

      if (result) {
        setSelectedFile(result.name);
        setModalVisible(false);

        onAttachmentChange(result.uri);
      }
    } catch (err) {
      console.log('error in document picker ', err);
    }
  };
  const handleImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (
        response.assets &&
        response.assets[0].uri &&
        response.assets.length > 0
      ) {
        setImage(response.assets[0].uri);
        setModalVisible(false);
        onAttachmentChange(response.assets[0].uri);
      }
    });
  };

  const handleCamera = () => {
    launchCamera({mediaType: 'photo'}, response => {
      if (
        !response.didCancel &&
        response.assets &&
        response.assets[0].uri &&
        response.assets.length > 0
      ) {
        setImage(response.assets[0].uri);
        setModalVisible(false);
        onAttachmentChange(response.assets[0].uri);
      }
    });
  };

  return {
    modalVisible,
    setModalVisible,
    handleDocumentPicker,
    handleImagePicker,
    handleCamera,
    remove,
  };
};
