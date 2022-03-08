import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "./Themes/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import Details from "./Details";

export default function Activity({
  id,
  name,
  rating,
  discount,
  original,
  description,
  currentnum,
  total,
  url,
  address,
  website,
  buy,
  navigation,
}) {
  return (
    <Pressable
      onPress={() => navigation.navigate("Activity", { webview: buy })}
    >
      <View style={styles.card}>
        <Image style={styles.image} source={url} />
        <View style={styles.text}>
          <View style={styles.info}>
            <View style={styles.title}>
              <Text style={styles.name}>{name}</Text>
              <MaterialIcons name="star" size={18} />
              <Text style={styles.rating}>{rating}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <ProgressBar
              progress={currentnum / total}
              color={Colors.red}
              style={styles.progress}
            />
          </View>
          <View style={styles.price}>
            <Text style={styles.discount}>{discount}</Text>
            <Text style={styles.original}>{original}</Text>
            <Pressable
              onPress={(e) => {
                e.stopPropagation();
                navigation.navigate("External", { webview: website });
              }}
            >
              <Feather
                name="external-link"
                size={20}
                style={{ paddingTop: 15 }}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    maxWidth: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    backgroundColor: "white",
    flex: 1,
    marginTop: 10,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  info: {
    flex: 3,
  },
  price: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    aspectRatio: 2.4,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    alignContent: "flex-start",
    paddingRight: 10,
  },
  discount: {
    fontWeight: "800",
    color: Colors.green,
    fontSize: 22,
    justifyContent: "flex-end",
  },
  rating: {
    fontWeight: "500",
    color: "black",
    fontSize: 14,
  },
  description: {
    color: "black",
    fontSize: 14,
    flexWrap: "wrap",
    paddingTop: 5,
  },
  original: {
    fontWeight: "500",
    color: Colors.gray,
    fontSize: 14,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  progress: {
    height: 8,
    borderRadius: 5,
    marginTop: 10,
  },
});
