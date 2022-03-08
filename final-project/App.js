import * as React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "./Themes/colors";
import { MaterialIcons } from "@expo/vector-icons";
import Main from "./Main";
import OrdersList from "./OrdersList";
import Explore from "./Explore.js";
import Images from "./Themes/images";
import NextScreen from "./NextScreen";
import Details from "./Details";
// import { DynamicColorIOS } from "react-native";

// export default function App() {
//   const Stack = createStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Main"
//           component={Main}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="Details" component={NextScreen} />
//         <Stack.Screen name="Preview" component={NextScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

function HomeScreen() {
  const Stack = createStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="External" component={NextScreen} />
        <Stack.Screen name="Activity" component={NextScreen} />
      </Stack.Navigator>
    </View>
  );
}

function ExploreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Explore />
    </View>
  );
}

function OrdersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <OrdersList />
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Account!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Explore") {
              iconName = focused ? "search" : "search";
            } else if (route.name === "Orders") {
              iconName = focused ? "receipt" : "receipt";
            } else if (route.name === "Account") {
              iconName = focused ? "account-circle" : "account-circle";
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={26} color={color} />;
          },
          tabBarActiveTintColor: Colors.red,
          tabBarInactiveTintColor: Colors.gray,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
