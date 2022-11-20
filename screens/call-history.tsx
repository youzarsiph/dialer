import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class CallHistory extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text>Call History</Text>
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
