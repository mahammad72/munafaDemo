import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Productlist = () => {
    return (
        <View>
            <Text style={styles.title}>Profile Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {  fontSize:20,
        textAlign:'center'
    }
})

export default Productlist;
