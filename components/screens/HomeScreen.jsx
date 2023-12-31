import React from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { useRouter } from "expo-router";

const HomeScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="bg-white flex-1 relative">
            <View className="flex-row px-6 mt-8 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#4DABB7] text-3xl font-semibold">Go</Text>
                </View>
                <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
            </View>

            <View className="space-y-3 px-6 mt-8">
                <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
                <Text className="text-[#00BCC9] text-[38px]">Good Moments</Text>

                <Text className="text-[#3C6072] text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id, esse harum ea reiciendis quia.</Text>
            </View>

            <View className="w-[380px] h-[380px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
            <View className="w-[380px] h-[380px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image animation="bounceIn" easing="ease-in-out" source={HeroImage} className="w-full h-full object-cover" />
                <View className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 botder-t-4 border-[#00BCCC9] rounded-full">
                    <TouchableOpacity onPress={() => router.push("Discover")}>
                        <Animatable.View animation={"pulse"} easing={"ease-in-out"} iterationCount={"infinite"} className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
