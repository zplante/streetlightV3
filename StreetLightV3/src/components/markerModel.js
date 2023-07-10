import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Keyboard, LayoutAnimation, TouchableWithoutFeedback, UIManager} from 'react-native';
import { Icon } from 'react-native-elements';



const MarkerModel = ({ e, setEvent, setShowMarkerModel, setMarkers, markers}) => {
    const [message, setMessage] = useState("");
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setIsKeyboardVisible(true);
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setIsKeyboardVisible(false);
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const handleSubmit = () => {
        setMarkers([...markers, { latlng: e, messsage: message}]);
        setEvent(null);
        setShowMarkerModel(false);
    }
    
    const handleExit = () => {
        setEvent(null);
        setShowMarkerModel(false);
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={isKeyboardVisible ? styles.modelWrapperKeyboardOpen : styles.modelWrapper}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setMessage}
                        placeholder={"What message would you like to leave?"}
                        multiline={true}
                        value={message}
                    />
                    <View style={styles.buttonContainer} onPress={handleSubmit}>
                        <Text style={{color: "white"}}>POST</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
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

export default MarkerModel;