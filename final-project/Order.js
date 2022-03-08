import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "./Themes/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";

export default function Order({ name, currentnum, total, status, navigation }) {
  function getTextStyle(status) {
    if (status === "Processing") {
      return {
        fontWeight: "500",
        color: Colors.red,
        fontSize: 16,
        justifyContent: "flex-end",
      };
    } else {
      return {
        fontWeight: "500",
        color: Colors.gray,
        fontSize: 16,
        justifyContent: "flex-end",
      };
    }
  }

  return (
    <View style={styles.card}>
      <View style={styles.text}>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <ProgressBar
            progress={currentnum / total}
            color={Colors.red}
            style={styles.progress}
          />
        </View>
        <View style={styles.state}>
          <Text style={getTextStyle(status)}>{status}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    maxWidth: "100%",
    padding: 10,
  },
  text: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    backgroundColor: "white",
    flex: 1,
    marginTop: 10,
  },
  name: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    alignContent: "flex-start",
    paddingRight: 10,
  },
  info: {
    flex: 3,
  },
  state: {
    flex: 1,
    alignItems: "flex-end",
  },
  progress: {
    height: 8,
    borderRadius: 5,
    marginTop: 10,
  },
});
