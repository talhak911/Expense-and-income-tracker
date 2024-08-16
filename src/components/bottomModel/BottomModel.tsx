import { Animated, Modal, Text, View } from "react-native"
import { useBottomModel } from "./useBottomModel"
import { styles } from "./styles"

export const BottomModel=({visible,onClose,element}:{visible:boolean,onClose:()=>void,element:React.JSX.Element})=>{
    const {panResponder,translateY} = useBottomModel({visible,onClose})
    return(
        
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
            <View >
    {element}
            </View>
          </Animated.View>
        </View>
      </Modal>
    )
}