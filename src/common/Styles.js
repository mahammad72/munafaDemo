import {
    StyleSheet,
  
  } from 'react-native';
import { colors } from './Colors';

export const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 10,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
    },
    paymentTypeContainer: {
      flex: 1,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      margin: 5,
      padding: 10,
    },
    txtColor: {
      fontSize: 15,
      color: colors.textColor,
    },
    creditCardContainer: {
      height: 180,
      width: '100%',
      paddingTop: 10,
      borderRadius: 10,
      backgroundColor: colors.cardBackgroundColor,
    },
    creditImgCon: {
      width: 80,
      height: 50,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    txtContainerWithMargin: {
      marginTop: 19,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    txtStyle: {fontSize: 16, fontWeight: '700', color: colors.white},
    imgConWitMargin: {width: 80, height: 50, marginTop: 25},
    txtCardStyle: {color: colors.black, fontSize: 15, fontWeight: 'bold'},
    lastContainer: {
      backgroundColor: colors.green,
      height: 70,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 10,
    },
    buttonContainer: {
      height: 60,
      width: 60,
      backgroundColor: colors.white,
      shadowColor: '#000',
      shadowOffset: {height: 1, width: 0},
      borderWidth: 1,
      borderColor: colors.green,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    commonBtnContainer: {
      height: 80,
      width: 60,
      padding: 5,
      margin: 10,
      alignItems: 'center',
    },
    txtItmeName: {
      textAlign: 'center',
      fontSize: 12,
      color: colors.textColor,
      fontWeight: '700',
    },
    transacionContainer: {
      marginVertical: 18,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    txtTitleContainer: {
    color: colors.green, 
    fontSize: 15, 
    fontWeight: '700'
    },
    transactions: {
      backgroundColor: colors.white,
      borderBottomWidthWidth: 1,
      borderBottomColor: colors.light_Grey,
      flexDirection: 'row',
    },
    circleContainer: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: colors.peach,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    circleChar: {
      color: colors.white,
      fontSize: 15,
      fontWeight: '900',
    },
    bankTitleContainer: {
      // alignItems:'center',
      justifyContent: 'center',
    },
    tailContainer: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      padding: 6,
    },
    sendinfBtn:{
    borderWidth:1, 
    borderColor:colors.green,
    borderRadius:5,
    padding:10
    },
  });