import React from "react";
import {Text} from "react-native";
import styles from "./styles";

type PropsForTitle = {
    text: string,
    
}

const SubTitle = ({text}: PropsForTitle) => {
   
    return (
        <Text style={styles.subTitle}> {text}</Text>
     
    );
}

SubTitle.defaultProps = {
    text: "Default text",
};

export default SubTitle;