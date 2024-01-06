import React from "react";
import {Text} from "react-native";
import styles from "./styles";

type PropsForTitle = {
    text: string,
    isNormalfontWeight?: boolean,
}

const Title = ({text, isNormalfontWeight}: PropsForTitle) => {
   
    return (
        <Text style={isNormalfontWeight? [styles.title, styles.titleNormalWeight] : styles.title}> {text}</Text>
     
    );
}

Title.defaultProps = {
    text: "Default text",
};

export default Title;