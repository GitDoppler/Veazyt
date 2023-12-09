import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Google from "./Google";
import Apple from "./Apple";
import { useRouter } from "expo-router";

export default function LogIn() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View className="h-full w-full">
            <View className="w-full px-5 pt-8">
                <Text className="font-bold text-[#FF8C20] text-3xl pb-2">Welcome back!</Text>
                <Text className="text-base text-gray-300 pb-6">Sign to your account</Text>
                <View>
                    <View className="pb-4">
                        <Text aria-label="Label for Email" nativeID="labelEmail" className="text-white pb-2 font-bold">
                            Email
                        </Text>
                        <TextInput aria-label="input" aria-labelledby="labelEmail" onChangeText={setEmail} value={email} className="bg-white rounded-xl text-black p-3 " placeholder="Your email" />
                    </View>
                    <View className="pb-4">
                        <Text aria-label="Label for Password" nativeID="labelPassword" className="text-white pb-2 font-bold">
                            Password
                        </Text>
                        <TextInput aria-label="input" aria-labelledby="labelPassword" onChangeText={setPassword} value={password} className="bg-white rounded-xl text-black p-3 " placeholder="Your passsword" />
                    </View>
                    <Text className="text-sm text-[#FF8C20] pb-6">Forgot passsword ?</Text>
                    <Pressable onPress={() => router.push("Home")} className="shadow bg-[#FF8C20] w-full rounded-xl py-3">
                        <Text className="text-white text-lg text-center font-bold">Log In</Text>
                    </Pressable>
                </View>
                <View className="w-full flex justify-center flex-row pt-6">
                    <Text className="text-white text-base font-bold">Don't have an account ?</Text>
                    <Pressable className="pl-1">
                        <Text className="text-[#FF8C20] font-bold text-base">Sign Up!</Text>
                    </Pressable>
                </View>
            </View>
            <View className="relative border-t border-white mt-9">
                <Text className="text-white p-1 bg-[#1E5AFF] font-bold text-base absolute top-[-18px] left-[47%]">Or</Text>
            </View>
            <View className="pt-6">
                <Pressable className="mx-5 border-2 border-white py-3 rounded-xl px-3 flex flex-row justify-center items-center">
                    <View className="flex justify-center items-center mr-2">
                        <Google width={16} height={16} />
                    </View>

                    <Text className="text-white text-center font-bold">Sign in with Google</Text>
                </Pressable>
            </View>
            <View className="pt-6">
                <Pressable className="mx-5 border-2 border-white py-3 rounded-xl px-3 flex flex-row justify-center items-center">
                    <View className="flex justify-center items-center mr-2">
                        <Apple width={16} height={16} />
                    </View>
                    <Text className="text-white text-center font-bold">Sign in with Apple</Text>
                </Pressable>
            </View>
        </View>
    );
}
