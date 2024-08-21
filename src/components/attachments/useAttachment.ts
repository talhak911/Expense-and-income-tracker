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
  // const [selectedFile, setSelectedFile] = useState<string |null>();
  // const [image,setImage]=useState<string | undefined >()
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
        ], // Change to all files to allow documents
      });

      if (result) {
        setSelectedFile(result.name);
        console.log('coppy rui  is ', result.fileCopyUri);
        setModalVisible(false);
        console.log('document uri is  ', result.uri);
        onAttachmentChange(result.uri);
      }
    } catch (err) {
      console.log('eror is  ', err);
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
        console.log('image uri  ', response.assets[0].uri);
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
        // setSelectedFile(response.assets[0]);
        console.log('image is', response.assets[0].uri);
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
