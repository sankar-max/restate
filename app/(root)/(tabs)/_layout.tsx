import TabIcon from "@/components/TabIcon"
import { homeTabData } from "@/data/homeTabData"
import { Tabs } from "expo-router"
import React from "react"

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "red",
          boxShadow: "",
        },
      }}
    >
      {homeTabData?.map((tab, ind) => (
        <Tabs.Screen
          key={tab.label}
          name={tab.label}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon label={tab.label} icon={tab.icon} focused={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
  )
}

export default Layout
