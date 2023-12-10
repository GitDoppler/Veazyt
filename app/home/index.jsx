import { Pressable, TextInput, View, Text } from "react-native";
// import { useState } from "react";
// import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PromptSearch from "../../components/PromptSearch";
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

// export default function Home() {
//     const [city, setCity] = useState("");
//     const router = useRouter();
//     return (
//         <View className="flex-1 bg-white justify-center items-center">
//             <View className="w-full px-3 flex flex-col items-center gap-4">
//                 <TextInput onChangeText={setCity} value={city} placeholder="What city do you wish to visit ?" className="border-2 border-[#1E5AFF] rounded-xl text-black text-base p-3 w-full" />
//                 <Pressable className="rounded-xl p-4 bg-[#1E5AFF]" onPress={() => router.push(`/city/${city}`)}>
//                     <Text className="text-lg text-white font-bold text-center">Search</Text>
//                 </Pressable>
//             </View>
//         </View>
//     );
// }
