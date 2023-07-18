import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Keyboard, LayoutAnimation, TouchableWithoutFeedback, UIManager, Pressable   } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';



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
        setMarkers([...markers, { latlng: e, message: message}]);
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
                <View style={styles.closeButtonWrapper}>
                    <Icon.Button 
                        size={30} 
                        name="close-circle-outline" 
                        color="black" 
                        onPress={handleExit} 
                        borderRadius={100} 
                        backgroundColor={'rgba(52, 52, 52, 0)'} 
                        iconStyle={{marginRight:0}}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setMessage}
                        placeholder={"What message would you like to leave?"}
                        multiline={true}
                        value={message}
                    />
                    <Pressable style={styles.buttonContainer} onPress={handleSubmit}>
                        <Text style={{color: "white"}}>
                            POST
                        </Text>
                    </Pressable>
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
        borderRadius: 100,
        marginTop: 10,
    },
    closeButtonWrapper: {
        alignItems: 'flex-end',
        marginRight: 5,
        marginTop: 5,
    }
});

export default MarkerModel;