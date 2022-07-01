import { Text } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled3 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <TextInput style={{
      left: 18,
      top: 37,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }}></TextInput><TextInput style={{
      left: 18,
      top: 84,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 27
    }}></TextInput><TextInput style={{
      left: 22,
      top: 128,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }}></TextInput><Text style={{
      left: 12,
      top: 70,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Lorem ipsum… </Text><Text style={{
      left: 13,
      top: 18,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Lorem ipsum… </Text><View style={{
      left: 61,
      top: 265,
      position: "absolute",
      height: 42,
      width: 84,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}></View><TextInput style={{
      left: 17,
      top: 171,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }}></TextInput></View>;
};

export default Untitled3;