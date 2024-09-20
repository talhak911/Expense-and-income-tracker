import {SafeAreaView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {BottomModel} from '../../components/bottomModel/BottomModel';
import {useDetailTransaction} from './useDetailTransaction';
import {Image} from 'react-native';
import {DetailTransactionProps} from '../../types/types';
import {styles} from './DetailTransactionStyles';
import {ConfirmModal} from '../../components/confirmModal/confirmModal';

export default function DetailTransaction({
  route,
  navigation,
}: DetailTransactionProps) {
  const {amount, description, date, type, category, url, id} = route.params;
  const {
    currency,
    modalVisible,
    closeModal,
    deleteTransactionFunction,
    openAttachment,
  } = useDetailTransaction({
    route,
    navigation,
  });

  return (
    <SafeAreaView style={styles.container}>
      {modalVisible && (
        <BottomModel
          visible={modalVisible}
          element={
            <ConfirmModal
              close={closeModal}
              action={() => {
                deleteTransactionFunction(id as string);
              }}
              description="Are you sure do you wanna remove this transaction"
              title="Remove This transaction?"
            />
          }
          onClose={closeModal}
        />
      )}
      <View
        style={[
          styles.topView,
          {
            backgroundColor: route.params.headerColor,
          },
        ]}>
        <View style={styles.topViewContent}>
          <Text style={styles.amount}>
            {currency}
            {amount}
          </Text>
          <Text style={styles.descriptionInHeader}>{description}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.floatingCard}>
        <View style={styles.floatingCardTextContainer}>
          <Text style={styles.greyText}>Type</Text>
          <Text style={styles.bold_16}>{type}</Text>
        </View>
        <View style={styles.floatingCardTextContainer}>
          <Text style={styles.greyText}>Category</Text>
          <Text style={styles.bold_16}>{category}</Text>
        </View>
        <View style={styles.floatingCardTextContainer}>
          <Text style={styles.greyText}>Wallet</Text>
          <Text style={styles.bold_16}>Wallet</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.details}>
          <View style={styles.border} />
          <Text style={styles.heading}>Description</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.heading}>Attachment</Text>
          {!url && <Text style={styles.description}>No Attachment</Text>}
          {url && <Image style={styles.image} source={{uri: url}} />}
        </View>
      </ScrollView>

      {url && (
        <View style={styles.button}>
          <CustomButton
            title="View Attachment"
            loading={false}
            onPress={() => {
              openAttachment(url);
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
