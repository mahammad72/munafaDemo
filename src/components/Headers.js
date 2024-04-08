import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {colors} from '../common/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Headers = ({title,onPressBack}) => {
  return (
    <View style={styles.header}>
      <View style={{flex: 1, }}>
        <Pressable
        style={{marginLeft:17}}
          onPress={onPressBack}>
          <Ionicons name="arrow-back" color={colors.green} size={25} />
        </Pressable>
      </View>
      <View style={{flex: 2}}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Headers;
