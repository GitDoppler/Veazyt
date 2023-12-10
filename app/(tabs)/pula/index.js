import { Pressable, TextInput, View, Text } from "react-native";
// import { useState } from "react";
// import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PromptSearch from "../../../components/PromptSearch";
import { Stack } from "expo-router";

export default function Home() {
    const topInsets = useSafeAreaInsets().top;
    return (
        <>
            <View className="flex-1 bg-white">
                <View className="z-2 flex-1 flex-col" style={{ paddingTop: topInsets ? topInsets + 10 : 20 }}>
                    <PromptSearch />
                </View>
            </View>
        </>
    );
}