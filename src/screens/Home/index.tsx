import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttaractionCard";

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

            <View style={styles.row}>
              <AttractionCard 
                title="Entertaiment Park"
                subTitle="Rome"
                imageScr="https://www.petitfute.com/medias/mag/12133/835/8896-les-10-parcs-d-attraction.jpg"
              />
              <AttractionCard 
                title="Entertaiment Park"
                subTitle="Rome"
                imageScr="https://www.petitfute.com/medias/mag/12133/835/8896-les-10-parcs-d-attraction.jpg"
              />
            </View>
            
          </View>

      </SafeAreaView>
    );
}

export default Home;