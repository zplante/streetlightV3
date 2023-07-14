import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Keyboard, LayoutAnimation, TouchableWithoutFeedback, UIManager} from 'react-native';
import { Icon } from 'react-native-elements';



const MessageModel = ({ currentMarker, setCurrentMarker, setShowMarkerMessage}) => {
    
    const handleExit = () => {
        setCurrentMarker(null);
        setShowMarkerMessage(false);
    }

    return(
        <View style={styles.modelWrapper}>
            <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text>
                            {currentMarker.message}
                        </Text>
                    </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modelWrapper: {
        zIndex: 5,
        width: '90%',
        height: '40%',
        marginTop: "5%",
        marginBottom: "5%",
        backgroundColor: "#b720eB",
        borderRadius: 20,
    },
    modelWrapperKeyboardOpen: {
        zIndex: 5,
        width: '90%',
        height: '90%',
        marginTop: "5%",
        marginBottom: "5%",
        backgroundColor: "#b720eB",
        borderRadius: 20,
    },
    buttonWrapper: {
        width: "50%",
    },
    input: {
        width: "90%",
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 5,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "45%",
        height: "15%",
        backgroundColor: "black",
        color: "white",
        borderRadius: 20,
        marginTop: 10,
    }
});

export default MessageModel;