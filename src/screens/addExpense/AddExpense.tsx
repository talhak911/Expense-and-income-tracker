import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../constants/colors';
import {CustomInput} from '../../components/customInput/CustomInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-gesture-handler';
import {Attachment} from '../../components/attachments/Attachment';
import {CustomButton} from '../../components/customButton/CustomButtom';
import CustomDropdown from '../../components/customDropDown/CustomDropDown';
import {Expenses} from '../../constants/constants';
import {useAddExpense} from './useAddExpense';
import {TransactionStatusModal} from '../../components/transactionStatusModal/TransactionStatusModal';
import {styles} from './styles';

export default function AddExpense() {
  const {
    loading,
    modalVisible,
    amount,
    category,
    image,
    selectedFile,
    description,
    currency,
    addIncome,
    closeModal,
    setSelectedFile,
    setImage,
    onChangeAmount,
    onChangeAttachment,
    onChangeDescription,
    onChangeCategory,
  } = useAddExpense();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.red}}>
      <TransactionStatusModal
        transactionStatus="Transaction has been successfully added"
        isVisible={modalVisible}
        onClose={closeModal}
      />
      <View style={styles.topView}>
        <Text style={styles.heading}>How much?</Text>

        <View style={styles.amountContainer}>
          <Text style={styles.currency}>{currency}</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="0"
            value={amount}
            onChangeText={e => {
              onChangeAmount(e);
            }}
            placeholderTextColor={COLORS.white}
            style={styles.amountInput}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <KeyboardAwareScrollView>
          <View style={styles.bottomContent}>
            <CustomDropdown
              selectedValue={category}
              onSelect={onChangeCategory}
              items={Expenses.filter(item => item.value)}
            />
            <CustomInput
              onChange={onChangeDescription}
              placeHolder="Description"
              value={description}
            />
            <Attachment
              setSelectedFile={setSelectedFile}
              setImage={setImage}
              selectedFile={selectedFile}
              image={image}
              onAttachmentChange={onChangeAttachment}
            />

          <View style={{alignItems:"center"}}>
          <CustomButton
              loading={loading}
              onPress={addIncome}
              title="Continue"
            />
          </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}
