export type AttachmentModelProps = {
  visible: boolean;
  onClose: () => void;
  onCameraPress: () => void;
  onImagePress: () => void;
  onDocumentPress: () => void;
};

export type voidFunction = () => void;

export type TransactionCardProps = {
  icon: React.JSX.Element;
  category: string;
  description: string;
  type: 'income' | 'expense';
  time: string;
  amount: string;
};
