

import { Text, View } from "react-native";
import styles from "./styles";

type TMessage = {
    text: string;
}


const Message = ({text}: TMessage) => {
    return (
        <View style={styles.containerMessage}>
            <Text style={styles.text}>{text}</Text>
        </View>
      
    )
}

export default Message;