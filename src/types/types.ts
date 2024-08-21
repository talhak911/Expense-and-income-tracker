import dayjs from "dayjs";

export type AttachmentModelProps = {
  visible: boolean;
  onClose: () => void;
  onCameraPress: () => void;
  onImagePress: () => void;
  onDocumentPress: () => void;
};

export type voidFunction = () => void;

export type TransactionCardProps = {
  icon?: React.JSX.Element;
  category: string;
  description: string;
  type: 'income' | 'expense';
  time: string;
  amount: string;
};

export type TransactionStatusModalProps = {
  transactionStatus: string;
  isVisible: boolean;
  onClose: () => void;
};
export type TransactionType = {
  uid: string;
  type: 'expense' | 'income';
  category: string;
  amount: number;
  date?:dayjs.ConfigType |Date,
  id?:string,
  attachment_url?: string | null;
  description: string;
};

export type TransactionsSliceType ={
  transactions:TransactionType[],
// loading: "idle" | "pending" | "succeeded" | "failed";
loading: boolean;
}