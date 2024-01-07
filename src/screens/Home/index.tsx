import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttaractionCard";
import jsonData from '../../data/attractions.json';
import categoriesJson from '../../data/categories.json';
import Message from "../../components/Message";

const ALL = "All";

interface ICard {
  id: number; 
  name: string; 
  city: string; 
  country: string; 
  entry_price: string; 
  address: string; 
  opening_time: string; 
  closing_time: string; 
  categories: string[]; 
  images: string[]; 
  coordinates: { lat: number; lon: number; };
}

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState<ICard[]>([]);

  useEffect(()=>{
    //console.log('jsonData :>> ', jsonData);
    setData(jsonData);
    // console.log(data);
    
  }, []);

  useEffect(() => {
    const result = selectedCategory === ALL ? jsonData : jsonData?.filter((e) => e.categories?.includes(selectedCategory));
    // console.log(result);
    setData(result);
  
  }, [selectedCategory])

    return (
      <SafeAreaView style={styles.safeView}>
          {/* <ScrollView showsVerticalScrollIndicator={false} style={styles.container}> */}
            

            {/* <ScrollView contentContainerStyle={styles.row}>
              {data?.map((item) =>(
                <AttractionCard 
                  key={item.id}
                  title={item.name}
                  subTitle={item.city}
                  imageScr={item.images[0]}
                />
              ))}
              
              
            </ScrollView> */}
                
                
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
              //contentContainerStyle={styles.row}
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
                />
              )}
            />
            
          {/* </ScrollView> */}

      </SafeAreaView>
    );
}

export default Home;