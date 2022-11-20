import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text>Browse</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
