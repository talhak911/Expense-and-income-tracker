import storage from '@react-native-firebase/storage';
import RNFS from 'react-native-fs';

export const uploadAttachment = async (
  uri: string | null,
  uid: string,
): Promise<string | null> => {
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
      cacheControl: 'no-store',
    });
    const downloadURL = await storageRef.getDownloadURL();

    await RNFS.unlink(filePath);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading attachment:', error);
    return null;
  }
};
