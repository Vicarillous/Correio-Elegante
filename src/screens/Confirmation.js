import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ConfirmationStyle from './ConfirmationStyle';
import ConfirmationCard from '../assets/svg/ConfirmationCard.svg';
import Group from '../assets/svg/Group 1418.svg';

const Confirmation = () => {
  return (
    <SafeAreaView style={ConfirmationStyle.container}>
      <View style={ConfirmationStyle.card}>
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <Group />
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
