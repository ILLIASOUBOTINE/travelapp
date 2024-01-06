import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Categories from "../../components/Categories";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

    return (
      <SafeAreaView style={styles.safeView}>
          <View style={styles.container}>
            <Title text="Where do" isNormalfontWeight />
            <Title text="you want to go?"/>
            <SubTitle text="Explore Attractions" />

            <Categories 
              selectedCategory={selectedCategory} 
              onPressCategory={setSelectedCategory}
              categories={['All', 'Popular', 'Historical', 'Random', 'Trending', 'Exclusive']}
            />
          </View>
      </SafeAreaView>
    );
}

export default Home;