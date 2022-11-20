import React from "react";
import Dialer from "../screens/dialer";
import Contacts from "../screens/contacts";
import CallHistory from "../screens/call-history";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default class StackNavigator extends React.Component {
  render(): React.ReactNode {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen
          name={"Dialer"}
          component={Dialer}
          options={{ title: "Dialer" }}
        />
        <Stack.Screen
          name={"Contacts"}
          component={Contacts}
          options={{ title: "Contacts" }}
        />
        <Stack.Screen
          name={"Call"}
          component={CallHistory}
          options={{ title: "Call History" }}
        />
      </Stack.Navigator>
    );
  }
}
