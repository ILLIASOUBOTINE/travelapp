import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constans/color";

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
   text: {
        
        color: Colors.LIGHT_BLUE,
        fontSize: 24,
        textAlign: "center",
        // marginHorizontal: width*0.05,
        marginVertical: height*0.05,
   },
   containerMessage: {
       
   }
});

export default styles;