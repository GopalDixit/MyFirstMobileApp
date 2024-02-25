// App.tsx
import React from "react";
import { View, Button, Alert } from "react-native";

function App() {
  const handlePress = () => {
    Alert.alert("Button Pressed", "Hello, React Native Button!");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
}

export default App;
