import React from "react";
import { Image, ImageBackground, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import ICard from "../../interface/ICard";

type AttractionDetailsProps = {
  navigation: any; // Здесь можно использовать более точный тип для объекта навигации
  route: {
    params?: {
      item?: ICard
    };
  };
};

const AttractionDetails :React.FC<AttractionDetailsProps>= ({navigation,route}) => {
  const { item }= route?.params || {};
  const mainImage = item?.images[0];

  const onBack = () => {
    navigation.goBack();
  };

  return (
      <SafeAreaView style={styles.container}>
        
          <ImageBackground  
            source={{uri: mainImage}}
            style={styles.imgBgd}
            imageStyle={{borderRadius: 20}}>
              <View style={styles.header}>
                <Pressable onPress={onBack}>
                  <Image style={styles.icon} source={require("../../assets/img/back.png")}/>
                </Pressable>
                <Pressable onPress={onBack}>
                  <Image style={styles.icon} source={require("../../assets/img/share.png")}/>
                </Pressable>
              </View>
              <View style={styles.footer}>
                {item?.images.map((imgUri, index) => {
                  if (index < 4) {
                    return (
                      <View key={imgUri} >
                        <Image source={{uri:imgUri}} style={styles.minImg}/>
                      </View>)
                  }  
                  if (index === 5) {
                    return (
                      <View key={imgUri} style={styles.flexForImg}>
                        <Image source={{uri:imgUri}} style={[styles.minImg, {opacity: 0.8}]}/>
                        <Text style={styles.textMore}>+{index}</Text>
                      </View>
                     
                      )
                  }
                   
                }
                )} 
              </View>
             
              
          </ImageBackground>
          <Text>{item?.name}</Text>
        
        

      </SafeAreaView>
  );
}

export default AttractionDetails;