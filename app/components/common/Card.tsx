import {Button, Image, Pressable, StyleSheet, Text, View} from "react-native";

// @ts-ignore
const Card = ({title,imagePath})=>{
    return <Pressable style={styles.container}>
        <Image source={imagePath} style={{height:50, width:50}}></Image>
        <View style={{width:"auto"}} >
            <Text>{title}</Text>
            <Button title="More" onPress={()=>{
                console.log("Button in Card pressed");
            }}></Button>
        </View>

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
        backgroundColor:"#fff",
        // paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        flexDirection: "row",
    },
})