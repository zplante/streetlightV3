import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Keyboard, LayoutAnimation, TouchableWithoutFeedback, UIManager} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const MessageModel = ({ currentMarker, setCurrentMarker, setShowMarkerMessage}) => {

    console.log(currentMarker.message);
    const handleExit = () => {
        setCurrentMarker(null);
        setShowMarkerMessage(false);
    }

    return(
        <View style={styles.modelWrapper}>
            <View style={styles.closeButtonWrapper}>
                <Icon.Button 
                    size={30} 
                    name="close-circle-outline" 
                    color="black" 
                    onPress={handleExit} 
                    borderRadius={100} 
                    backgroundColor={'rgba(0, 0, 0, 0)'} 
                    iconStyle={{marginRight:0}}
                />
            </View>
                <View style={styles.textContainer}>
                    <Text style={styles.messageStyle}>
                        {currentMarker.message}
                    </Text>
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
        marginBottom: "110%",
        backgroundColor: "#b720eB",
        borderRadius: 20,
    },
    textContainer: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 5,
        margin: 5,
    },
    closeButtonWrapper: {
        alignItems: 'flex-end',
        marginRight: 5,
        marginTop: 5,
        zIndex: 10,
    },
    messageStyle: {
        color: "black",
        margin: 5,
    }
});

export default MessageModel;