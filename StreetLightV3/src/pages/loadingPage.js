import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    loading: {
      fontSize: 24,
      padding: 20,
    },
  });

const LoadingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.loadingText}>Loading...</Text>
            <ActivityIndicator size="large" />
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('MainTabNavigator')}
            />

        </View>
    );
  
  };
  export default LoadingPage;