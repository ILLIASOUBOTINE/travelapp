
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
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item}
            renderItem={({item, index})=>{
                const selected = selectedCategory === item;
                return(
                    <TouchableOpacity onPress={() => onPressCategory(item)} 
                        style={[styles.itemContainer, selected ? styles.selectedItemContainer: {}, index === 0 ? {marginLeft: 32} : {}]}
                        >
                        <Text  style={[styles.item, selected ? styles.selectedItem : {}]}> {item} </Text>
                    </TouchableOpacity>
                );
            }}
        />
    )
}

export default Categories;