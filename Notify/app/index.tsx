import "react-native-gesture-handler";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Topic } from "../interface";
import React, { useEffect, useState, createContext } from "react";
import registerForPushNot from "./registerForPushNot";
import { NavigationContainer } from "@react-navigation/native";
import PaginaPrincipalScreen from "../components/PaginaPrincipalScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./RegisterScreen";
import TemaScreen from "./tema";
import nuevoTema from "./modal_nuevo_tema";
import ngrok_url from "../constants/serverlink";
import ConfigTemaScreen from "./config_tema";
import AuthContext from "../components/context";
import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();

const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log("AsyncStorage cleared successfully");
  } catch (error) {
    console.log("Error clearing AsyncStorage: ", error);
  }
};

export default function Home() {
  clearAsyncStorage();
  const [userId, setUserId] = useState<String | null>(null);
  const authContext = {
    userId: userId,
    register: (id) => {
      setUserId(id);
    },
  };
  useEffect(() => {
    const api = async () => {
      try {
        const data = await fetch("https://c97e-131-178-102-160.ngrok-free.app/api/subscriptions", {
          method: "GET",
          headers: {
            "x-user-id": "2",
            "Content-Type": "application/json",
          },
        });
        if (!data.ok) {
          console.error(
            `API responded with status ${data.status}: ${data.statusText}`
          );
        }

        const jsonData = await data.json();
        const topics = jsonData.map(parseUserData);
        return setState([...state, ...topics]);
        // return setState(jsonData.results);
      } catch (e) {
        console.error(e);
      }
    };
    api();
    //Check if user is logged in using asyncStorage
    async function getUserId() {
      const storedId = await AsyncStorage.getItem("userId");
      console.log(storedId + "storedId");
      setUserId(storedId);
    }
    getUserId();
    console.log(userId);
  }, []);
  return (
    <NavigationContainer independent={true}>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator>
          {userId ? (
            <>
              <Stack.Screen name="home" component={PaginaPrincipalScreen} />
              <Stack.Screen name="themeInfo" component={TemaScreen} />
              <Stack.Screen name="themeConfig" component={ConfigTemaScreen} />
              <Stack.Screen name="nuevoTema" component={nuevoTema} />
            </>
          ) : (
            <>
              <Stack.Screen name="register" component={RegisterScreen} />
              <Stack.Screen name="zlogin" component={LoginScreen} />
            </>
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
