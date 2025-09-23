import { useGlobalContext } from "@/providers/global"
import { Redirect, Slot } from "expo-router"
import React from "react"
import { ActivityIndicator } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Layout = () => {
  const { isLogged, loading } = useGlobalContext()
  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full place-items-center">
        <ActivityIndicator  className="text-primary-300" size={"large"} />
      </SafeAreaView>
    )
  }
  if (!isLogged) return <Redirect href={"/sign-in"} />
  return <Slot />
}

export default Layout
