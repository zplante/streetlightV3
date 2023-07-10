import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';


const RegistrationPage = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.loadingText}>Register</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    placeholder={"Username"}
                    value={username}
            />
            <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    placeholder={"Password"}
                    value={password}
            />
            <TextInput
                    style={styles.input}
                    onChangeText={setConfirmPassword}
                    placeholder={"Confirm Password"}
                    value={confirmPassword}
            />
            <Button
                title="Register"
                onPress={() => navigation.dispatch(
                    StackActions.replace('MainNavigator',
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
    input: {
        width: "90%",
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 5,
    },
  });

  export default RegistrationPage;
  