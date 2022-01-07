import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B73058',
  },
  topView: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 30,
  },
  topTitle: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    marginBottom: 21,
  },
  topInput: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    borderRadius: 10,
    height: 50,
  },
  bottomView: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // paddingBottom: 60,
  },
  bottomTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 21,
  },
  bottomInput: {
    borderColor: '#B73058',
    borderWidth: 3,
    borderRadius: 10,
    paddingLeft: 20,
    paddingTop: 17,
    paddingBottom: 3,
    textAlignVertical: 'top',
  },
  bottomInputText: {},
});
