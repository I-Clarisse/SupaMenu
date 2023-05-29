import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({title, onPress}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 40,
        backgroundColor: '#F7941D',
        marginBottom: 10,
        paddingHorizontal: 10,
        border: 'none',
        borderRadius: 5,
        marginLeft: 20,
        shadowColor: '#7DEFDF',
        // shadowColor: 'red',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    }
});

export default CustomButton;