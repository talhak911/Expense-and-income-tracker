import {Animated, Modal, View} from 'react-native';
import {useBottomModel} from './useBottomModel';
import {styles} from './BottomModelStyles';

export const BottomModel = ({
  visible,
  element,
  onClose,
}: {
  visible: boolean;
  element: React.JSX.Element;
  onClose: () => void;
}) => {
  const {panResponder, translateY} = useBottomModel({visible, onClose});
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="none"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[styles.modalContent, {transform: [{translateY}]}]}
          {...panResponder.panHandlers}>
          <View style={styles.line} />
          <View>{element}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};
