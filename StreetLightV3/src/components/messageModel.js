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
                        <Text style={{color: "black"}}>
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
        height: '20%',
        marginBottom: "110%",
        backgroundColor: "#b720eB",
        borderRadius: 20,
    },
    textContainer: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 5,
    }
});

export default MessageModel;