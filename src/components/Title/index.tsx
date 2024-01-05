import React, { useEffect, useState } from "react";
import {Text} from "react-native";
import styles from "./styles";

type Props = {
    text: string,
    counter: number,
}

const Title = ({text, counter}: Props) => {
    console.log(text);

    const [stateText, setText] = useState(""); 

    useEffect(()=>{
        setText(text.concat(counter.toString()));
    },[counter]);
   
    const onPressText = () => {
        if (stateText === "Default text") {
            setText(text);
        }else {
            setText("Default text");
        }
    };
        
        

    return (
        <Text onPress={onPressText} style={styles.title}> {stateText}</Text>
     
    );
}

Title.defaultProps = {
    text: "Default text",
};

export default Title;