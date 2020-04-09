import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

export default function App() {
  let [content, setContent] = useState('');

  useEffect(() => {
    async function loadCsvAsync() {
      let asset = Asset.fromModule(require("./assets/example.csv"));
      await asset.downloadAsync();
      if (!asset.localUri) {
        alert("Failed to load asset");
      } else {
        let str = await FileSystem.readAsStringAsync(asset.localUri);
        if (str) {
          setContent(str);
        }
      }
    }

    loadCsvAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
