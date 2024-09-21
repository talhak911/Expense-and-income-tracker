import {SafeAreaView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {BottomModel} from '../../components/bottomModel/BottomModel';
import {useDetailTransaction} from './useDetailTransaction';
import {DetailTransactionProps} from '../../types/types';
import {styles} from './DetailTransactionStyles';
import {ConfirmModal} from '../../components/confirmModal/ConfirmModal';
import {DetailItem} from '../../components/detailItem/DetailItem';
import {BlinkingImage} from '../../components/loading/Loading';

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
        <DetailItem label="Type" value={type} styles={styles} />
        <DetailItem label="Category" value={category} styles={styles} />
        <DetailItem label="Wallet" value="Wallet" styles={styles} />
      </View>

      <ScrollView>
        <View style={styles.details}>
          <View style={styles.border} />
          <Text style={styles.heading}>Description</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.heading}>Attachment</Text>
          {!url && <Text style={styles.description}>No Attachment</Text>}
          {url && <BlinkingImage style={styles.image} uri={url} />}
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
