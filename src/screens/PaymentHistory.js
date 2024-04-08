import React,{useEffect, useState} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { getAllTransactions } from '../utils/Api';
import Headers from '../components/Headers';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../common/Colors';
import {styles} from "../common/Styles";
const PaymentHistory = ({navigation}) => {
    const [history_payment, setHistoryPayment] = useState([]);
    
    // Get all transactions data from the server.   

    useEffect(() => {
      getHistoryPayment();
    }, []);

    const getHistoryPayment = async () => {
        let  history_payment = await getAllTransactions();
        console.log("hispayment ", history_payment);
      
        if (history_payment != null) {
            let hispayment = history_payment.data;
            console.log("object ", );
            setHistoryPayment(hispayment);
        } else {
            alert('Error: Unable to fetch transaction history');
        }
    }

    const renderPaymentItem = ({item}) => {
        console.log("item ", new Date(item.created_at * 1000));
        let date_ = new Date(item.created_at*1000).toLocaleString()
        return <View key={item.id} style={styles.transactions}>
            <View style={styles.circleContainer}>
          <Text style={styles.circleChar}>{item.email.charAt(0)}</Text>
        </View>
        <View style={styles.bankTitleContainer}>
          <Text style={styles.txtTitleContainer}>{item.email}</Text>
          <Text style={{color: colors.black, fontWeight: '400', fontSize:12}}>
            <Text style={{color: colors.green, fontWeight: '500'}}>
                {item.method} 
            </Text>{"   "}
            {date_ }
          </Text>
        </View>
        <View style={styles.tailContainer}>
          <Text style={[styles.txtTitleContainer,{color:item.status == 'failed' ? colors.peach : colors.green}]}>₹ {(item.amount/100).toFixed(2)}</Text>
        </View>
        </View>
    }

    return (
        <View style={{flex:1,}}>
            <Headers title={"Payment History"} onPressBack = {()=>navigation.goBack()}/>
            <View style={{flex:1, padding:10}}>
                <FlatList 
                    data={history_payment}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderPaymentItem}
                />
            </View>
        </View>
    );
}

// const styles = StyleSheet.create({
//     title: {
//         fontSize: 24,
//         textAlign: "center",
//     }
// })

export default PaymentHistory;
