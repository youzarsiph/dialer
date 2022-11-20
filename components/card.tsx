import React from "react";
import { View, StyleSheet } from "react-native";

interface CardProps {
  children?: React.ReactNode[];
}

export default class Card extends React.Component<CardProps> {
  render(): React.ReactNode {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    shadowColor: "#333",
    backgroundColor: "#fff",
  },
});
