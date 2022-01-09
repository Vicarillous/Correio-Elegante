import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

import ConfirmationStyle from './ConfirmationStyle';
import ConfirmationCard from '../assets/svg/ConfirmationCard.svg';
import Group from '../assets/svg/Group 1418.svg';
import confirmationCircle from '../assets/confirmation.json';

const Confirmation = () => {
  return (
    <SafeAreaView style={ConfirmationStyle.container}>
      <View style={ConfirmationStyle.card}>
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <Group />
        </View>
        <View style={{flex: 1}}>
          <LottieView source={confirmationCircle} autoPlay loop={false} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={ConfirmationStyle.title}>
            Seu correio foi enviado com sucesso
          </Text>
        </View>
        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
          <ConfirmationCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Confirmation;
