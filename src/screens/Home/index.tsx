import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import Title from "../../components/Title";

const Home = () => {
  const [stateCount, setCount] = useState(0);

  // useEffect(()=>{
  //   const intervalId = setInterval(()=>{
  //   setCount(prevCount => prevCount + 1)
  // },3000)

  // return () => clearInterval(intervalId);
  // },[])

 

    return (
        <SafeAreaView style={[styles.safeView, styles.flex]}>
        <View style={[styles.flex, styles.view]}>
          <Title text='My first component' counter={stateCount.valueOf()}/>
      
        </View>
      </SafeAreaView>
    );
}

export default Home;