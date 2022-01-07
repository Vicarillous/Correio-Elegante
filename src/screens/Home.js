import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import HomeStyle from './HomeStyle';
import ImageTop from '../assets/svg/ImageTop.svg';
import Group from '../assets/svg/Group 1418.svg';
import Botao from './Botao';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={HomeStyle.Container}>
      
      <View style={HomeStyle.topHome}>
        <ImageTop />
      </View>

      <View style={HomeStyle.bottomHome}>
        <View style={{alignItems: 'center'}}>
          <Group />
        </View>
        <View>
          <View style={{marginBottom: 20}}>
            <Text style={HomeStyle.Title}>Surpreenda seu amor</Text>
            <Text style={HomeStyle.Subtitle}>
              <Text>Envie </Text>
              <Text style={{fontWeight: 'bold'}}>mensagens </Text>
              <Text>e </Text>
              <Text style={{fontWeight: 'bold'}}>presentes </Text>
              <Text>incríveis</Text>
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Botao click={() => navigation.navigate('RegisterMessage')}>
              COMEÇAR
            </Botao>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;