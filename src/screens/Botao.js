import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Botao = ({children, click}) => {
  return (
    <TouchableOpacity style={styles.botaoComecar} onPress={click}>
      <LinearGradient
        colors={['#E06C88', '#B73058']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaoComecar: {
    width: '100%',
  },
  linearGradient: {
    borderRadius: 15,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    textTransform: 'uppercase',
  },
});

export default Botao;
