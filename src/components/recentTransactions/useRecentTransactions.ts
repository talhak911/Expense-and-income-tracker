import { useNavigation } from "@react-navigation/native"
import { useAppSelector } from "../../hooks/useStore"
import { COLORS } from "../../constants/colors"

export const useRecentTransactions = () => {
    const navigation = useNavigation()
    const navigateToTransactions=()=>{
        navigation.navigate("Transaction")
    }
    const navigateToDetailTransaction = ({id, type, description, url, amount, date, category}:any) => {
        navigation.navigate('Detail Transaction', {
          headerColor: type === 'income' ? COLORS.green : COLORS.red,
          id,
          date,
          type,
          url,
          category,
          description,
          amount,
        });
      };
  const transaction = useAppSelector(state=>state.transactions.transactions).slice(0,4)
   const transactions= transaction.map(transaction => ({
        ...transaction,
        date: new Date(transaction.date as string), // Convert date back to Date object
      }))
  return {
transactions,
navigateToTransactions,
navigateToDetailTransaction
  }
}

