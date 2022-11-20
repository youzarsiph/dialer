import React from "react";
import Home from "../screens/home";
import Recent from "../screens/recent";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default class BottomTabNavigator extends React.Component {
  render(): React.ReactNode {
    const Tabs = createBottomTabNavigator();

    return (
      <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "folder" : "folder-outline";
            } else if (route.name === "Recent") {
              iconName = "history";
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tabs.Screen
          name={"Home"}
          component={Home}
          options={{
            title: "Browse",
          }}
        />
        <Tabs.Screen
          name={"Recent"}
          component={Recent}
          options={{ title: "Recent Files" }}
        />
      </Tabs.Navigator>
    );
  }
}
