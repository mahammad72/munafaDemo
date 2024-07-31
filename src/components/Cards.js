import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../common/Styles';

export default function Cards() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#6e9774', '#d2ae24', '#d2ae24']}
      style={styles.creditCardContainer}>
      <View style={styles.containerTyle}>
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
          <Text style={styles.font12}>Card Holder name</Text>
          <Text style={styles.font17}>Momin Mohammad</Text>
        </View>
        <View>
          <Text style={styles.font12}>Valid Date</Text>
          <Text style={styles.font17}>09/35</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
