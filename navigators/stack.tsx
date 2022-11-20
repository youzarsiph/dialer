import React from "react";
import Home from "../screens/home";
import Recent from "../screens/recent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default class StackNavigator extends React.Component {
  render(): React.ReactNode {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={Home}
          options={{ title: "Browse" }}
        />
        <Stack.Screen
          name={"Recent"}
          component={Recent}
          options={{ title: "Recent Files" }}
        />
      </Stack.Navigator>
    );
  }
}
