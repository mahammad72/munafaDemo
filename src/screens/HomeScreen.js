import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {colors} from '../common/Colors';
import LinearGradient from 'react-native-linear-gradient';
import ICOnCO from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from '../common/Styles';
import RazorpayCheckout from 'react-native-razorpay';
import { ROZAR_TEST_KEY } from '../common/Constant';

const data = [
  {
    id: 1,
    txtname: 'Account',
    isSelected: true,
  },
  {
    id: 2,
    txtname: 'Loan',
    isSelected: false,
  },
  {
    id: 3,
    txtname: 'Debit Card',
    isSelected: false,
  },
  {
    id: 4,
    txtname: 'Insurance',
    isSelected: false,
  },
  {
    id: 5,
    txtname: 'Traveller',
    isSelected: false,
  },
];
const dataS = [
  {
    id: 1,
    txtname: 'Momin Mohammad',
    time: '3:45 pm',
    amount: '$89.67',
    bankName: 'abcD bank of XYZ',
  },
  {
    id: 2,
    txtname: 'ALI',
    time: '3:45 pm',
    amount: '$89.67',
    bankName: 'abcD bank of XYZ',
  },
  {
    id: 3,
    txtname: 'Momin Mohammad',
    time: '3:45 pm',
    amount: '$89.67',
    bankName: 'abcD bank of XYZ',
  },
];
const dataP = [
  {
    id: 1,
    txtname: 'Momin Mohammad',
    time: '3:45 pm',
    amount: '$89.67',
    bankName: 'abcD bank of XYZ',
  },
  {
    id: 2,
    txtname: 'ALI',
    time: '3:45 pm',
    amount: '$89.67',
    bankName: 'abcD bank of XYZ',
  },
  {
    id: 3,
    txtname: 'Momin Mohammad',
    time: '3:45 pm',
    amount: '$89.67',
    bankName: 'abcD bank of XYZ',
  },
];

const HomeScreen = ({navigation}) => {
  const [dataset, setData] = useState(data);
  const [dataSource, setDataSource] = useState(dataS);
  const [pendingPayment, setPendingPayment] = useState(dataP);

  const onSelectValue = selected => {
    console.log(selected);
    let newData = dataset.map(item => {
      if (item.id == selected.id) {
        // return {...item,isSelected : !item.isSelected}
        item.isSelected = !item.isSelected;
        console.log('item ', item);
        return {...item};
      } else {
        item.isSelected = false;
        console.log('item ', item);
        return {...item};
      }
    });
    console.log('dataset ', dataset);
    setData(newData);
  };

  const onPressBtn = async(type) => {
    console.log('selected tyoe ', type);
    if(type === 'upi'){
      const options = {
        key: ROZAR_TEST_KEY,
        amount: 100, // Amount in paise (e.g., 1000 paise = ₹10)
        currency: 'INR',
        name: 'Munafa App',
        description: 'UPI Payment',
        prefill: {
          email: 'user@example.com',
          contact: '9662552437',
        },
      };
    
      RazorpayCheckout.open(options)
        .then((data) => {
          // Handle success (data contains payment details)
          console.log('Payment success:', data);
        })
        .catch((error) => {
          // Handle error
          console.log('Payment error:', error);
        });
    }else if(type == 'history'){
      navigation.navigate("History")
    }
  };

  const renderTransaction = ({item, index}) => {
    return (
      <View key={index} style={styles.transactions}>
        <View style={styles.circleContainer}>
          <Text style={styles.circleChar}>{item.txtname.charAt(0)}</Text>
        </View>
        <View style={styles.bankTitleContainer}>
          <Text style={styles.txtTitleContainer}>{item.txtname}</Text>
          <Text style={{color: colors.light_Grey, fontWeight: '500'}}>
            {item.time}, {item.bankName}
          </Text>
        </View>
        <View style={styles.tailContainer}>
          <Text style={styles.txtTitleContainer}>{item.amount}</Text>
        </View>
      </View>
    );
  };
  
  const renderPendinfTransaction = ({item, index}) => {
    return (
      <View key={index} style={styles.transactions}>
        <View style={styles.circleContainer}>
          <Text style={styles.circleChar}>{item.txtname.charAt(0)}</Text>
        </View>
        <View style={styles.bankTitleContainer}>
          <Text style={styles.txtTitleContainer}>{item.txtname}</Text>
          <Text style={{color: colors.light_Grey, fontWeight: '500'}}>
            {item.time}, {item.bankName}
          </Text>
        </View>
        <View style={styles.tailContainer}>
          <Pressable style={styles.sendinfBtn} onPress={()=>onClickSendMoney(item)}>
            <Text style={[styles.txtTitleContainer,{fontWeight:'500'}]}>send money</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{height: 75, marginTop: 15}}>
        <FlatList
          horizontal={true}
          keyExtractor={item => item?.id}
          data={dataset}
          renderItem={({item}) => (
            <Pressable
              onPress={() => onSelectValue(item)}
              style={[
                styles.paymentTypeContainer,
                {
                  backgroundColor:
                    item?.isSelected == true
                      ? colors.tabBarColor
                      : colors.white,
                },
              ]}>
              <Text
                style={[
                  styles.txtColor,
                  {
                    color:
                      item?.isSelected == true
                        ? colors.white
                        : colors.textColor,
                  },
                ]}>
                {item?.txtname}
              </Text>
            </Pressable>
          )}
        />
      </View>
      <ScrollView style={{flex: 1}}>
        {/** Credit card */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#6e9774', '#d2ae24', '#d2ae24']}
          style={styles.creditCardContainer}>
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 10}}>
            <View style={{flex: 1}}>
              <Text style={styles.txtCardStyle}>Debit Card</Text>
              <Image
                style={styles.imgConWitMargin}
                source={require('../assets/images/chips.png')}
                resizeMode="contain"
              />
            </View>
            <View style={{flex: 2}}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Image
                  style={styles.creditImgCon}
                  source={require('../assets/images/visa.png')}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.txtContainerWithMargin}>
                <Text style={styles.txtStyle}>**** **** **** 1234</Text>
              </View>
            </View>
          </View>
          <View style={styles.lastContainer}>
            <View>
              <Text style={{color: colors.white, fontSize: 12}}>
                Card Holder name
              </Text>
              <Text style={{color: colors.white, fontSize: 17}}>
                Momin Mohammad
              </Text>
            </View>
            <View>
              <Text style={{color: colors.white, fontSize: 12}}>
                Valid Date
              </Text>
              <Text style={{color: colors.white, fontSize: 17}}>09/35</Text>
            </View>
          </View>
        </LinearGradient>
        {/** payment  methods */}
        <View style={styles.transacionContainer}>
          <View style={styles.commonBtnContainer}>
            <Pressable
              onPress={() => onPressBtn('bank')}
              style={styles.buttonContainer}>
              <ICOnCO name="bank" color={colors.green} size={25} />
            </Pressable>
            <Text style={styles.txtItmeName}>Bank{'\n'}Transfar</Text>
          </View>
          <View style={styles.commonBtnContainer}>
            <Pressable
              onPress={() => onPressBtn('qrscan')}
              style={styles.buttonContainer}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                color={colors.green}
                size={25}
              />
            </Pressable>
            <Text style={styles.txtItmeName}>Scan{'\n'}QR Code</Text>
          </View>
          <View style={styles.commonBtnContainer}>
            <Pressable
              onPress={() => onPressBtn('upi')}
              style={styles.buttonContainer}>
              <Feather name="at-sign" color={colors.green} size={25} />
            </Pressable>
            <Text style={styles.txtItmeName}>UPI{'\n'}Transfar</Text>
          </View>
          <View style={styles.commonBtnContainer}>
            <Pressable
              onPress={() => onPressBtn('history')}
              style={styles.buttonContainer}>
              <MaterialCommunityIcons
                name="file"
                color={colors.green}
                size={25}
              />
            </Pressable>
            <Text style={styles.txtItmeName}>View{'\n'}History</Text>
          </View>
        </View>

        <View style={{padding: 10}}>
          <Text style={styles.txtTitleContainer}>Recent Transaction</Text>
          <View style={{marginTop: 10}}>
            <FlatList
              data={dataSource}
              keyExtractor={(item, index) => item.id}
              renderItem={renderTransaction}
            />
          </View>
        </View>

        <View style={{padding: 10}}>
          <Text style={styles.txtTitleContainer}>Payment Panding</Text>
          <View style={{marginTop: 10}}>
            <FlatList
              data={dataSource}
              keyExtractor={(item, index) => item.id}
              renderItem={renderPendinfTransaction}
            />
          </View>
        </View>
      </ScrollView>

    </View>
  );
};



export default HomeScreen;
