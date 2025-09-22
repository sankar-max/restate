import * as Linking from "expo-linking"
import { openAuthSessionAsync } from "expo-web-browser"
import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite"

export const config = {
  platform: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME!,
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
}

export const client = new Client()

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform)

export const avatar = new Avatars(client)
export const account = new Account(client)

export async function login() {
  try {
    const redirectUrl = Linking.createURL("/")

    const res = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUrl
    )

    if (!res) throw new Error("Authentication is failed")

    const browserResult = await openAuthSessionAsync(
      res.toString(),
      redirectUrl
    )

    if (browserResult.type !== "success")
      throw new Error("Create OAuth2 token failed")

    const url = new URL(browserResult.url)
    const secret = url.searchParams.get("secret")?.toString()
    const userId = url.searchParams.get("userId")?.toString()
    if (!secret || !userId) throw new Error("Create OAuth2 token failed")

    const session = await account.createSession({ userId, secret })
    if (!session) throw new Error("Failed to create session")

    return true
  } catch (error) {
    console.error(error)
  }
}

export async function logout() {
  try {
    const result = await account.deleteSession({ sessionId: "current" })

    return result
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function getCurrentUser() {
 try {
   const res = await account.get();
   if (res.$id) {
     const userAvatar = avatar.getInitials({name:res.name});
 
     return {
       ...res,
       avatar: userAvatar.toString(),
     };
   }

   return null;
 } catch (error) {
   console.log(error);
   return null;
 }
}

