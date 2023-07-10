import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';


const LoadingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.loadingText}>Loading</Text>
            <ActivityIndicator size="large" />
            <Button
                title="Go to Homepage"
                onPress={() => navigation.dispatch(
                    StackActions.replace('MainNavigator',
                      {}
                    )
                )}
            />
            <Button
                title="Go to Login"
                onPress={() => navigation.dispatch(
                  StackActions.replace('AuthNavigator',
                    {}
                  )
              )}
            />

        </View>
    );
  
  };

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

  export default LoadingPage;