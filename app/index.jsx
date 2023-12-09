import { Pressable, Text, View } from "react-native";
import Logo from "../components/Logo";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import * as Animatable from "react-native-animatable";
import { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import { River } from "../assets/index";
import LogIn from "../components/LogIn";
const fadeIn = {
    0: {
        opacity: 0,
    },
    0.5: {
        opacity: 1,
    },
    1: {
        opacity: 0,
    },
};
export default function App() {
    const topInsets = useSafeAreaInsets().top;
    const [anim, setAnim] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setAnim(true);
        }, 2000);
    }, []);
    return (
        <View className="flex-1 bg-[#1E5AFF]">
            <View className="z-2 flex-1 items-center justify-center flex-col" style={{ paddingTop: topInsets ? topInsets + 10 : 20 }}>
                {anim == false ? (
                    <Animatable.View animation={fadeIn} duration={2000} easing={"ease-in-out"}>
                        <View className="p-4 rounded-2xl bg-white">
                            <Logo width={106} height={100} />
                        </View>
                        <Text className="text-3xl font-bold text-center text-white pt-2">Veasyt</Text>
                    </Animatable.View>
                ) : (
                    <LogIn />
                )}
            </View>

            {/* <Pressable onPress={() => router.push("HomeScreen")} className="shadow bg-green-300 p-5 rounded-xl">
                    <Text className="text-white text-lg text-center">GoToHome</Text>
                </Pressable> */}
        </View>
    );
}
