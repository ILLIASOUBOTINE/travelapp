import React, { useState } from "react";
import { FlatList, Pressable, Text, TouchableOpacity} from "react-native";
import styles from "./styles";

type CategorieProps = {
    categories: string[];
    selectedCategory: string;
    onPressCategory: (category: string) => void;
} 


const Categories = ({categories, selectedCategory, onPressCategory}: CategorieProps) => {

  

    return (
        <FlatList 
            horizontal 
            style={{ marginRight: -32}}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({item})=>{
                const selected = selectedCategory === item;
                return(
                    <TouchableOpacity onPress={() => onPressCategory(item)} style={[styles.itemContainer, selected ? styles.selectedItemContainer: {}]}>
                        <Text  style={[styles.item, selected ? styles.selectedItem : {}]}> {item} </Text>
                    </TouchableOpacity>
                );
            }}
        />
    )
}

export default Categories;