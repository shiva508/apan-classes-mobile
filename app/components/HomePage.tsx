import {Image, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
// @ts-ignore
import logo from "../../assets/images/apan-class-logo.png";

// @ts-ignore
import contactUs from "../../assets/images/card_contact_us_1.png";
// @ts-ignore
import heroImage from '../../assets/images/pngwing.com-6-480x480.webp';
import {LinearGradient} from "expo-linear-gradient";
import Card from "@/app/components/common/Card";
import {useEffect, useRef, useState} from "react";

const HomePage = () => {
    const  scrollRef = useRef(null)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [touchStarted, setTouchStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            // console.log("Current Scrolling content position",contentWidth);
            // console.log("Container width",containerWidth);
            // console.log("Touch started",touchStarted);
            if(touchStarted){
                return;
            }
            if(scrollPosition + containerWidth >= contentWidth){
                setScrollPosition(0);
            }
            setScrollPosition(currentPosition => currentPosition + 2);
            // console.log(scrollPosition);
            scrollRef.current?.scrollTo({ x: scrollPosition, y: 0, animated: true});
        }, 200);

    },[scrollPosition,contentWidth,containerWidth,touchStarted])
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView edges={['top', 'left', 'right', 'bottom']} style={[styles.container, {  rowGap: 0, columnGap: 0}]}>
                <View style={[styles.container, {flexGrow: 1,margin: 0, padding: 0, rowGap: 0, borderRadius: 10, borderColor: "#000", borderWidth: 1}]}>
                    <Image source={logo} style={{height: 100, width: 100, resizeMode:"cover"}}></Image>
                    <Text style={styles.headerText}>APAN CLASSES</Text>
                    <Text style={styles.subHeaderText}>One to one online tutorials</Text>
                </View>
                <View style={[styles.container, {flexGrow: 2,backgroundColor: "#F5F5F5", height: "100%", padding: 1, rowGap: 0}]}>
                    <LinearGradient colors={['#8624E1','#3607A6']} style={{flex:1, justifyContent:"center", alignItems:"center", rowGap:5, padding:10, borderRadius:10}}>
                        <Text style={{fontSize: 20, color: "white"}}>Personalized learning through the perfect blend of traditional teaching with modern technology for academic excellence.</Text>
                        <Image source={heroImage} style={{height:150, width:150}}></Image>
                        <Text style={{fontSize: 16, color: "white"}}>“Learning gives Creativity
                            Creativity leads to Thinking
                            Thinking Provides Knowledge
                            Knowledge makes you great”</Text>
                        <Text style={{fontSize: 16, color: "white"}}> - Dr. A.P.J Abdul Kalam</Text>
                    </LinearGradient>
                </View>
                <View style={[styles.container, { backgroundColor: "#999", height: "100%", padding: 10, rowGap: 0, borderRadius: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10}]}>
                    <ScrollView ref={scrollRef}
                                style={{width: "100%"}}
                                contentContainerStyle={{alignItems: "center", rowGap: 0, paddingBottom: 10}} horizontal={true}
                                onContentSizeChange={(width, height) => setContentWidth(width)}
                                onLayout={(event)=>setContainerWidth(event.nativeEvent.layout.width)}
                                onTouchStart={(e)=>setTouchStarted((useState)=>true)}
                                onTouchEnd={(e)=>setTouchStarted((useState)=>false)}
                                onTouchMove={(e)=>{
                                    // console.log("Touch moving: ",e)
                                }}
                                onTouchCancel={(e)=>{
                                    const native = (e.nativeEvent as any);
                                    const pageX = native.pageX ?? native.touches?.[0]?.pageX;
                                    const pageY = native.pageY ?? native.touches?.[0]?.pageY;
                                    console.log('pageX', pageX);
                                    console.log('pageY', pageY);
                                    setTimeout(()=>{setTouchStarted((useState)=>false);}, 1000);
                                }}
                                >
                        <Card title="Home" imagePath={contactUs} ></Card>
                        <Card title="About us" imagePath={contactUs}></Card>
                        <Card title="Contact us" imagePath={contactUs}></Card>
                        <Card title="India" imagePath={contactUs}></Card>
                        <Card title="UK" imagePath={contactUs}></Card>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>

    );
}
export default HomePage;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#2E3192'
    },
    subHeaderText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#2E3192'
    }
})