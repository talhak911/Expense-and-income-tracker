import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../constants/color';
import {CustomInput} from '../../components/customInput/CustomInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-gesture-handler';
import {Attachment} from '../../components/attachments/Attachment';
import {CustomButton} from '../../components/customButton/CustomButtom';
import CustomDropdown from '../../components/customDropDown/CustomDropDown';
import {INCOMES} from '../../constants/constants';
import {useAddIncome} from './useAddIncome';
import {TransactionStatusModal} from '../../components/transactionStatusModal/TransactionStatusModal';
import { styles } from '../addExpense/styles';

export default function AddIncome() {
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
  } = useAddIncome();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.green}}>
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
            items={INCOMES.filter(item => item.value)}
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
