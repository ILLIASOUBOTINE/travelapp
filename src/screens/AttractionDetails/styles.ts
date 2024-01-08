import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constans/color";

const {height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
      marginHorizontal: 32,
    },
    subTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: Colors.BLACK,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 32,
    },
    imgBgd: {
      height: height/2,
      width: "100%",
      marginTop:10,
      paddingVertical: 16,
      flexDirection: "column",
      justifyContent: "space-between",
      
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: 16,
      
    },
    icon: {
      height: 36,
      width: 36,
    },
    footer: {
      flexDirection: "row",
      // width: width/2,
      //justifyContent: "space-evenly",
      backgroundColor: "rgba(256,256,256,0.35)",
      alignSelf: "center",
      borderRadius: 15,
      paddingVertical: 5,
      paddingHorizontal: 10,
      gap: 10,
    },
    minImg: {
      height: 40,
      width: 50,
      borderRadius: 10,
    },
    textMore: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      position: "absolute",
      right: 15,
      top: 10
      //right: 10,
    },
    flexForImg: {
      backgroundColor: "rgba(256,256,256,0.5)",
      zIndex: 10,
      //alignItems: "center",
      //justifyContent: "center"
    }
  });

