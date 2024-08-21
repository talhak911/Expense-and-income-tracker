import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/colors';
import {FontSize, Height, Width} from '../../utils/responsive';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {BottomModel} from '../../components/bottomModel/BottomModel';
import {useDetailTransaction} from './useDetailTransaction';
import { Image } from 'react-native';

export default function DetailTransaction({route, navigation}) {
  const {amount,description,date,type,category,url,id}=route.params
  const {modalVisible, closeModal, DeleteModal,deleteTransactionFunction} = useDetailTransaction({
    route,
    navigation,
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {modalVisible && (
        <BottomModel
          visible={modalVisible}
          element={<DeleteModal closeModal={closeModal} action={()=>{deleteTransactionFunction(id)}}/>}
          onClose={closeModal}
        />
      )}
      <View
        style={{
          backgroundColor: route.params.headerColor,
          borderBottomLeftRadius: Width(6),
          borderBottomRightRadius: Width(6),
        }}>
        <View
          style={{
            alignSelf: 'center',
            marginTop: Height(0.5),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: FontSize(48),
              color: COLORS.white,
              fontWeight: 'bold',
            }}>
            ${amount}
          </Text>
          <Text
            style={{
              marginTop: Height(0.8),
              color: COLORS.white,
              fontSize: FontSize(16),
            }}>
            {description}
          </Text>
          <Text
            style={{
              marginTop: Height(0.7),
              marginBottom: Height(7),
              color: COLORS.white,
              fontSize: FontSize(13),
            }}>
           {date}
          </Text>
        </View>
      </View>
      <View style={styles.floatingCard}>
        <View style={{gap: 5, alignItems: 'center'}}>
          <Text style={styles.greyText}>Type</Text>
          <Text style={styles.bold_16}>{type}</Text>
        </View>
        <View style={{gap: 5, alignItems: 'center'}}>
          <Text style={styles.greyText}>Category</Text>
          <Text style={styles.bold_16}>{category}</Text>
        </View>
        <View style={{gap: 5, alignItems: 'center'}}>
          <Text style={styles.greyText}>Wallet</Text>
          <Text style={styles.bold_16}>Wallet</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.details}>
          <View style={styles.border} />
          <Text style={styles.heading}>Description</Text>
          <Text style={styles.description}>
    {description}
          </Text>
          <Text style={styles.heading}>Attachment</Text>

         
          {url && <Image style={styles.image} source={{uri:url}}  />}
          <View style={styles.button}>
            <CustomButton title="Edit" loading={false} onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  greyText: {
    color: COLORS.grey,
  },
  bold_16: {
    textTransform:"capitalize",
    fontSize: FontSize(16),
    fontWeight: '600',
    color: COLORS.charcoal,
  },
  floatingCard: {
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: Width(4),
    marginTop: -26,
    borderRadius: 12,
    borderWidth: FontSize(1),
    borderColor: COLORS.lightGrey,
    backgroundColor: 'white',
    paddingVertical: 12,
  },
  border: {
    borderColor: COLORS.lightBlack,
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  details: {
    marginTop: Height(2),
    paddingHorizontal: Width(4),
    gap: Height(1.6),
  },
  description: {
    fontSize: FontSize(16),
    color: COLORS.charcoal,
  },
  heading: {
    fontSize: FontSize(16),
    color: COLORS.grey,
    fontWeight: '600',
  },
  image: {
    resizeMode:"cover",
    height: 116,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  button: {
    marginTop: Height(8),
    marginBottom: 16,
  },
});
