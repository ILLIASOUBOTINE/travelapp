import { StyleSheet } from "react-native";
import { Colors } from "../../constans/color";

const styles = StyleSheet.create({
    item: {
      fontSize: 12,
      color: Colors.BLACK,
      opacity: 0.5,
      paddingVertical: 2
     
    },
    selectedItem: {
        // textDecorationLine: 'underline',
        // textDecorationColor: Colors.LIGHT_BLUE,
        opacity: 1,
    },
    itemContainer: {
        marginRight: 17,
        marginVertical: 14
    },
    selectedItemContainer: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.LIGHT_BLUE,
    },
    container: {
        backgroundColor: "red",
    },
});

export default styles;