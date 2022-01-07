import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#B73058',
  },
  topHome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHome: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 35,
    paddingBottom: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Title: {
    color: '#2F394B',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontSize: 37,
    lineHeight: 35,
    paddingTop: 10,
  },
  Subtitle: {
    color: '#8D8D8D',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 32,
    margin: 15,
  },
});
