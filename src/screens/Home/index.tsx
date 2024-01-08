import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttaractionCard";
import jsonData from '../../data/attractions.json';
import categoriesJson from '../../data/categories.json';
import Message from "../../components/Message";
import { useNavigation } from "@react-navigation/native";
import ICard from "../../interface/ICard";
const ALL = "All";



//type THomeProps



const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState<ICard[]>([]);
  const navigation = useNavigation();

  useEffect(()=>{
    //console.log('jsonData :>> ', jsonData);
    setData(jsonData);
    // console.log('propsNav: ', navigation);
    
  }, []);

 

  useEffect(() => {
    const result = selectedCategory === ALL ? jsonData : jsonData?.filter((e) => e.categories?.includes(selectedCategory));
    // console.log(result);
    setData(result);
  
  }, [selectedCategory])

    return (
      <SafeAreaView style={styles.safeView}>
          
                
            <FlatList 
              ListEmptyComponent={<Message text="No items found."/> }
              ListHeaderComponent={
                <>
                <View style={styles.container}>
                  <Title text="Where do" isNormalfontWeight />
                  <Title text="you want to go?"/>
                  <SubTitle text="Explore Attractions" />
                </View>
                  

                  <Categories 
                    selectedCategory={selectedCategory} 
                    onPressCategory={setSelectedCategory}
                    categories={ [ALL, ...categoriesJson]}
                  />
                </>
              }
              
              data={data}
             
              numColumns={2}
              columnWrapperStyle={styles.row}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <AttractionCard 
                  key={item.id}
                  title={item.name}
                  subTitle={item.city}
                  imageScr={item.images[0]}
                  onPress={() => navigation.navigate('AttractionDetails', {item}) }
                />
              )}
            />
            
          

      </SafeAreaView>
    );
}

export default Home;