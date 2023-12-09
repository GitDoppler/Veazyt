import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Logo from "../components/Logo";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function App() {
    const topInsets = useSafeAreaInsets().top;
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <View className="z-2 flex-1 items-center justify-center flex-col" style={{ paddingTop: topInsets ? topInsets + 10 : 20 }}>
                <Logo width={20} height={20} />
                <Text>Open up App.js to start working on your app!</Text>
                <Pressable onPress={() => router.push("HomeScreen")} className="shadow bg-green-300 p-5 rounded-xl">
                    <Text className="text-white text-lg text-center">GoToHome</Text>
                </Pressable>
            </View>
        </View>
    );
}
