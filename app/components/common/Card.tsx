import {Pressable, StyleSheet, Text, View} from "react-native";

// @ts-ignore
const Card = ({title})=>{
    return <Pressable style={styles.container}>
        <Text>{title}</Text>
    </Pressable>;
}
export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 150,
        backgroundColor:"#E0E0E0",
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 5,
    },
})