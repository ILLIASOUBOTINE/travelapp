import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";



type TAttractionProps = {
    imageScr: string,
    title: string,
    subTitle: string,
}

const AttractionCard = ({imageScr, title, subTitle}: TAttractionProps) => {

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri: imageScr}}/>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Image style={styles.icon} source={require("../../assets/img/location.png")}/>
               <Text style={styles.subTitle}>{subTitle}</Text> 
            </View>
            
            
        </View>
    )
}

export default AttractionCard;