import {StyleSheet} from "react-native";

import HomePage from "@/app/components/HomePage";

export default function Index() {
    return (
        <HomePage>

        </HomePage>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "auto",
        maxHeight: "auto",
    },
    boldText: {
        fontWeight: "bold",
        color: "#fff"
    },
    fontSize30: {
        fontSize: 28
    },
    fontSize32: {
        fontSize: 32
    }
})
