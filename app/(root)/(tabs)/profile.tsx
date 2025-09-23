import { useState } from "react"
import { Image, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

function LogoTitle() {
  return (
    <Image
      style={styles.image}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  )
}

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <SafeAreaView>
      <Text>Count: {count}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
})
