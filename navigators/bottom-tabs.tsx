import React from "react";
import Dialer from "../screens/dialer";
import Contacts from "../screens/contacts";
import CallHistory from "../screens/call-history";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default class BottomTabNavigator extends React.Component {
  render(): React.ReactNode {
    const Tabs = createBottomTabNavigator();

    return (
      <Tabs.Navigator
        initialRouteName="Dialer"
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ focused, color, size }) => {
              // Icon name
              let name;

              if (route.name === "Dialer") {
                name = focused ? "phone-dial" : "phone-dial-outline";
              } else if (route.name === "Contacts") {
                name = focused ? "contacts" : "contacts-outline";
              } else {
                name = "history";
              }

              return (
                <MaterialCommunityIcons name={name} size={size} color={color} />
              );
            },
            tabBarActiveTintColor: "indigo",
            tabBarInactiveTintColor: "gray",
          };
        }}
      >
        <Tabs.Screen
          name={"Dialer"}
          component={Dialer}
          options={{ title: "Dialer" }}
        />
        <Tabs.Screen
          name={"Contacts"}
          component={Contacts}
          options={{ title: "Contacts" }}
        />
        <Tabs.Screen
          name={"Call"}
          component={CallHistory}
          options={{ title: "Call History" }}
        />
      </Tabs.Navigator>
    );
  }
}
