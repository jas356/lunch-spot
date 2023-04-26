import { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RestaurantContext } from "../App";

export default function Random({navigation, foodList}) {

    const { setSelectedRestaurant } = useContext(RestaurantContext)

    const chooseRandom = () => {
        const index = Math.floor(Math.random() * foodList.length)
        setSelectedRestaurant(foodList[index])
        navigation.navigate('Details')
    }

    return(
        <TouchableOpacity onPress={chooseRandom}>
            <View style={styles.fab}>
                <Text style={styles.fabText}>🎲</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fabText: {
        fontSize: 40,
    },
    fab: {
        display: 'abosolute',
        bottom: 30,
        left: 176,
        backgroundColor: '#15317E',
        padding: 5,
        height: 60,
        width: 60,
        borderRadius: 30,
        boderWidth: 2,
        borderColor: 'whitesmoke',
        shawdowColor: 'black',
        elevation: 4,
        shawdowOffset: {width:1, height: 2},
        shawdowOpacity: 0.4,
        showRadius: 3,
    },
})