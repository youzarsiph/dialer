import React from "react";
import { View, StyleSheet } from "react-native";

export default class Header extends React.Component {
  render(): React.ReactNode {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
