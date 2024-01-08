import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";



type TAttractionProps = {
    imageScr: string,
    title: string,
    subTitle: string,
    onPress: () => void,
}

const AttractionCard = ({imageScr, title, subTitle, onPress}: TAttractionProps) => {

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.image} source={{uri: imageScr}}/>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Image style={styles.icon} source={require("../../assets/img/location.png")}/>
               <Text style={styles.subTitle}>{subTitle}</Text> 
            </View>
            
            
        </TouchableOpacity>
    )
}

export default AttractionCard;