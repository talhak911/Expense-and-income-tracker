import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/colors';
import {FontSize, Height, Width} from '../../utils/responsive';
import { CustomButton } from '../../components/customButton/CustomButtom';
import { BottomModel } from '../../components/bottomModel/BottomModel';
import { useDetailTransaction } from './useDetailTransaction';


export default function DetailTransaction({route, navigation}) {

const {modalVisible,closeModal,DeleteModal}=useDetailTransaction({route,navigation})


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
       {modalVisible &&    <BottomModel visible={modalVisible} element={<DeleteModal/>} onClose={closeModal}/>}
      <View
        style={{
          backgroundColor: COLORS.red,
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
            $120
          </Text>
          <Text
            style={{
              marginTop: Height(0.8),
              color: COLORS.white,
              fontSize: FontSize(16),
            }}>
            Buy some grocery
          </Text>
          <Text
            style={{
              marginTop: Height(0.7),
              marginBottom:Height(7),
              color: COLORS.white,
              fontSize: FontSize(13),
            }}>
            Saturday 4 June 2021 16:20
          </Text>
        </View>
      </View>
      <View style={styles.floatingCard}>
        <View style={{gap: 5, alignItems: 'center'}}>
          <Text style={styles.greyText}>Type</Text>
          <Text style={styles.bold_16}>Expense</Text>
        </View>
        <View style={{gap: 5, alignItems: 'center'}}>
          <Text style={styles.greyText}>Category</Text>
          <Text style={styles.bold_16}>Shopping</Text>
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
        <Text style={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aut. Ipsum voluptatem explicabo incidunt dolorum iste illo rem omnis cupiditate fugiat eius, deserunt voluptate quod voluptatibus ipsa beatae laborum fuga.</Text>
        <Text style={styles.heading}>Attachment</Text>
      
      <View 
      style={styles.image}
      />
      <View style={styles.button}>
      <CustomButton title='Edit' loading={false} onPress={()=>{}}/>
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
    marginTop:Height(2),
    paddingHorizontal:Width(4),
    gap:Height(1.6)
  },
  description:{
    fontSize:FontSize(16),
    color:COLORS.charcoal,
  },
  heading:{
    fontSize:FontSize(16),
    color:COLORS.grey,
    fontWeight:"600"
  },
  image:{
    height:116,
    backgroundColor:"black",
    borderRadius:8
  },
  button:{
    marginTop:Height(8),
    marginBottom:16
  }
});
