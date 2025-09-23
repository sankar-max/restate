import React from "react"
import { Image, Text, View } from "react-native"

type Props = {
  icon: any
  label: string
  focused: boolean
}
export default function TabIcon({ label, icon, focused }: Props) {
  return (
    <View className="flex-1 items-center justify-center mt-3">
      <Image source={icon} resizeMode="contain" className="size-6 " />
      <Text className="font-rubik-medium text-xs">{label}</Text>
    </View>
  )
}
