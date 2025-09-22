import icons from "@/constants/icons"
import images from "@/constants/images"
import React from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

function SignIN() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          resizeMode="contain"
          className="w-full h-3/5"
        />
        <View className="px-10">
          <Text className="text-center text-base uppercase font-rubik text-black-200">
            Welcome to Restate
          </Text>
          <Text className="text-center text-3xl capitalize font-rubik-bold text-black-300  mt-2">
            Let&apos;s get you closer to {"\n"}
            <Text className="text-primary-300">Your ideal home</Text>
          </Text>

          <Text className="capitalize text-center text-black-200 text-lg font-rubik mt-12">
            Login to estate with google
          </Text>

          <TouchableOpacity className="bg-white gap-3 shadow-md flex flex-row items-center justify-center  shadow-zinc-300 rounded-full py-4 mt-5 ">
            <Image
              source={icons.google}
              className="size-5"
              resizeMode="contain"
            />
            <Text>Sign in with google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIN
