import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import RegisterMessageStyle from './RegisterMessageStyle';
import Botao from './Botao';

import Group from '../assets/svg/Group 1418.svg';
import ChampagneLollipop from '../assets/svg/Champagne + lollipop.svg';
import FastFood from '../assets/svg/Fast-food-group.svg';
import FrenchFriesSoda from '../assets/svg/French Fries + soda.svg';
import WineCheese from '../assets/svg/Wine + Cheese.svg';


const DATA = [
  {
    id: '1',
    title: <FastFood />,
  },
  {
    id: '2',
    title: <ChampagneLollipop />,
  },
  {
    id: '3',
    title: <WineCheese />,
  },
  {
    id: '4',
    title: <FrenchFriesSoda />,
  },
];

const Item = ({item, onPress, borderColor, marginLeft, marginRight}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, borderColor, marginLeft, marginRight]}>
    <View style={[styles.title]}>{item.title}</View>
  </TouchableOpacity>
);

const RegisterMessage = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const marginLeft = item.id === '1' ? 35 : null;
    const marginRight = item.id === '4' ? 35 : null;
    const borderColor = item.id === selectedId ? '#B73058' : 'transparent';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        borderColor={{borderColor}}
        marginLeft={{marginLeft}}
        marginRight={{marginRight}}
      />
    );
  };

  const [inputEmail, setInputEmail] = useState(null);

  const handleInputChange = e => {
    setInputEmail(e);
  };

  return (
    <SafeAreaView style={RegisterMessageStyle.container}>
      <View style={RegisterMessageStyle.topView}>
        <Text style={RegisterMessageStyle.topTitle}>
          Você gostaria de se identificar?
        </Text>
        <TextInput
          style={RegisterMessageStyle.topInput}
          placeholder="Digite seu nome ou apelido"
        />
      </View>

      <View style={RegisterMessageStyle.bottomView}>
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <Group />
        </View>
        <Text
          style={[
            RegisterMessageStyle.bottomTitle,
            {paddingHorizontal: 35, paddingVertical: 5},
          ]}>
          Escolha uma refeição abaixo
        </Text>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
        </View>

        <View style={{paddingHorizontal: 35, paddingTop: 20}}>
          <Text style={RegisterMessageStyle.bottomTitle}>Email</Text>
          <TextInput
            onChangeText={handleInputChange}
            value={inputEmail}
            style={RegisterMessageStyle.bottomInput}
            placeholder="Digite o email dele ou dela"
          />
          <View style={{height: 20}}></View>
          <Text style={RegisterMessageStyle.bottomTitle}>Surpreenda</Text>
          <TextInput
            multiline={true}
            numberOfLines={5}
            style={[RegisterMessageStyle.bottomInput]}
            placeholder="Solte o verbo para seu/sua amado(a)"
          />
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', paddingHorizontal: 35}}>
          <Botao click={() => navigation.navigate('Confirmation')}>
            ENVIAR CORREIO
          </Botao>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 8,
    borderWidth: 2,
    borderRadius: 12,
  },
});

export default RegisterMessage;
