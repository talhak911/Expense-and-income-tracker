import storage, { uploadBytes } from '@react-native-firebase/storage';
import { PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';


// export const uploadAttachment = async (uri: string |null, uid: string): Promise<string | null> => {
//   try {
//     if (!uri){
//       return null
//     }
//     requestStoragePermission()
//     if (uri.startsWith('content://')) {
//       const tempFile =  RNFS.TemporaryDirectoryPath
//        await RNFS.copyFile(uri,tempFile)
//       // const fileContent = await RNFS.readFile(uri, 'base64');
//       // const blob =new Blob([fileContent], { type: "application/pdf",lastModified:234 });

//       const filename = uri.substring(uri.lastIndexOf('/') + 1);

//       const storageRef = storage().ref(`attachments/${uid}/${filename}`);
//       await storageRef.putFile(tempFile, {
//   cacheControl: 'no-store', // disable caching
// })
//       const downloadURL = await storageRef.getDownloadURL();
//       return downloadURL;
//     }
// else
// {    const filename = uri.substring(uri.lastIndexOf('/') + 1);
//     //Platform.OS === 'ios' ? uri.replace('file://', '') :
//     const uploadUri =  uri;
//     const storageRef = storage().ref(`attachments/${uid}/${filename}`);
//     await storageRef.putFile(uploadUri);
//     const downloadURL = await storageRef.getDownloadURL();
//     return downloadURL;}
//   } catch (error) {
//     console.error('Error uploading attachment:', error);
//     return null;
//   }
// };

export const uploadAttachment = async (uri: string | null, uid: string): Promise<string | null> => {
  try {
    if (!uri) {
      return null;
    }
    
    let filePath = uri;
    if (uri.startsWith('content://')) {
      const tempFilePath = `${RNFS.TemporaryDirectoryPath}/file`;
      await RNFS.copyFile(uri, tempFilePath);
      filePath = tempFilePath;

    }

    const filename = filePath.substring(filePath.lastIndexOf('/') + 1);
    const storageRef = storage().ref(`attachments/${uid}/${filename}`);
    await storageRef.putFile(filePath, {
      cacheControl: 'no-store', // disable caching
    });
    const downloadURL = await storageRef.getDownloadURL();

    // Clean up the temporary file if necessary
    await RNFS.unlink(filePath);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading attachment:', error);
    return null;
  }
};
