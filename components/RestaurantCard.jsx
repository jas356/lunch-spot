import {View, Text, Image, StyleSheet } from "react-native"

export default function RestaurantCard({ food }) {
    return(
        <View style={styles.card}>
            <Text style={styles.name}>{food.name}</Text>
            <Image style={styles.img} source={{uri: food.image }} />
        </View>
    )
}



const styles = StyleSheet.create({
    name: {
        fontSize: 24,
    },
    img: {
        width: 340,
        height: 200,
        borderRadius: 6,
    },
    card: {
        width: '100%',
        marginVertical: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 16,
        borderRadius: 10,
        borderColor: '#646D7E',
        borderWidth: 2,
    }
})