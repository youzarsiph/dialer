import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Recent extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text>Recent Files</Text>
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
