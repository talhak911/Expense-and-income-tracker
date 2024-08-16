import { useState } from 'react';
import DocumentPicker,{ DocumentPickerResponse } from 'react-native-document-picker';
import ImagePicker, { Asset,launchCamera,launchImageLibrary } from 'react-native-image-picker';

export const useAttachment = ()=>{
  const [modalVisible, setModalVisible] = useState(false);
    const [selectedFile, setSelectedFile] = useState<Asset|DocumentPickerResponse |null>();
    const [image,setImage]=useState<string | undefined >()
    const remove = ()=>{
      setSelectedFile(null)
      setImage("")
    }

    const handleDocumentPicker = async () => {
      try {
        const results = await DocumentPicker.pick({
          type: [DocumentPicker.types.doc,DocumentPicker.types.pdf,DocumentPicker.types.docx], // Change to all files to allow documents
        });
        if (results[0]) {
          // setImage(results[0].uri);
          setSelectedFile(results[0]);
        setModalVisible(false)
        }
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          setModalVisible(false)
          // User cancelled the picker, exit silently
        } else {
          throw err;
        }
      }
    };
    const handleImagePicker = () => {
      launchImageLibrary({mediaType: 'photo'}, response => {
        if (response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri);
          setSelectedFile(response.assets[0]);
          setModalVisible(false)
        }
      });
    };
  
    const handleCamera = () => {
      launchCamera({mediaType: 'photo'}, (response) => {
        if (!response.didCancel  && response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri);
          setSelectedFile(response.assets[0]);
          setModalVisible(false)
        }
      });
    };

return{
  modalVisible,
  setModalVisible,
    handleDocumentPicker,
    selectedFile,
    handleImagePicker,
    handleCamera,
    remove,
    image
}
}