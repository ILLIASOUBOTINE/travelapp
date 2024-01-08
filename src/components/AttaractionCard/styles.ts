import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constans/color";

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
    card: {
        
       padding: 4,
       borderWidth: 1,
       borderColor: Colors.GREY,
       borderRadius: 15,
       width: (width - 64 - width*0.025)/2,
        marginBottom: width*0.025,
       marginRight: width*0.025,
    },
    image: {
        // width: (width - 64 - width*0.05)/2,
        // height: 100,
        
        minHeight: 100,
        borderRadius: 15,
    },
    title: {
        fontSize: 12,
        fontWeight: "500",
        color: Colors.BLACK,
        marginTop: 12,
        marginLeft: 6,
    },
    subTitle: {
        fontSize: 8,
        fontWeight: "300",
       
        
        opacity: 0.5,
    },
    icon: {
        width: 8,
        height: 8,
        marginRight: 6,
    },
    row: {
        marginLeft: 6,
        marginBottom: 12,
        marginTop: 2,
        flexDirection: "row",
        alignItems: "center",
    }
});

export default styles;