import * as React from "react";
import Navigator from "./navigators";
import { NavigationContainer } from "@react-navigation/native";

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  }
}
