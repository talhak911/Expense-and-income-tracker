import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../constants/colors';
import {FontSize, Height, Width} from '../../utils/responsive';
import {FontInter} from '../../constants/fonts';
import {CustomInput} from '../../components/customInput/CustomInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-gesture-handler';
import {Attachment} from '../../components/attachments/Attachment';
import {CustomButton} from '../../components/customButton/CustomButtom';
import CustomDropdown from '../../components/customDropDown/CustomDropDown';
import {Incomes} from '../../constants/constants';
import {useAddIncome} from './useAddIncome';
import {TransactionStatusModal} from '../../components/transactionStatusModal/TransactionStatusModal';

export default function AddIncome() {
  const {
    loading,
    modalVisible,
    amount,
    category,
    image,
    selectedFile,
    description,
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
      <View style={{flex: 4, paddingLeft: Width(6.5)}}>
        <Text
          style={{
            opacity: 0.64,
            color: COLORS.white,
            fontSize: FontSize(18),
            marginTop: Height(6.5),
          }}>
          How much?
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text
            style={{
              fontSize: FontSize(64),
              color: COLORS.white,
              fontWeight: 'semibold',
              fontFamily: FontInter,
            }}>
            $
          </Text>
          <TextInput
            keyboardType="numeric"
            placeholder="0"
            value={amount}
            onChangeText={e => {
              onChangeAmount(e);
            }}
            placeholderTextColor={COLORS.white}
            style={{
              flex: 1,
              fontSize: FontSize(64),
              color: COLORS.white,
              fontWeight: 'semibold',
              fontFamily: FontInter,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 4,

          backgroundColor: 'white',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <KeyboardAwareScrollView>
          <View
            style={{
              paddingVertical: Height(2.5),
              paddingHorizontal: Width(4),
              flex: 1,
              gap: 16,
            }}>
            <CustomDropdown
              selectedValue={category}
              onSelect={onChangeCategory}
              items={Incomes.filter(item => item.value)}
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

            <CustomButton
              loading={loading}
              onPress={addIncome}
              title="Continue"
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}
