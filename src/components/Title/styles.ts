import { StyleSheet } from "react-native";
import { Colors } from "../../constans/color";

const styles = StyleSheet.create({
    title:{
      fontSize: 32,
      color: Colors.LIGHT_BLUE,
      fontWeight: "bold",
    },
    titleNormalWeight: {
      fontWeight: "normal"
    },
    subTitle: {
      fontSize: 20,
      color: Colors.BLACK,
      marginTop: 40,
      marginBottom: 34,
    }
});

export default styles;