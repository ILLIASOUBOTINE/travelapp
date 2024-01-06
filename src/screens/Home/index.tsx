import React from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";

const Home = () => {
  

    return (
      <SafeAreaView style={styles.safeView}>
          <View style={styles.container}>
            <Title text="Where do" isNormalfontWeight />
            <Title text="you want to go?"/>
            <SubTitle text="Explore Attractions" />
          </View>
      </SafeAreaView>
    );
}

export default Home;