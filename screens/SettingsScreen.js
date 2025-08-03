import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const handleUpdate = () => {
    Alert.alert("Update", "Settings have been updated.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Page</Text>
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  title: {
    fontSize: 22, marginBottom: 20
  }
});
