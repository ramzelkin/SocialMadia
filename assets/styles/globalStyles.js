import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 7,
    marginTop: 30,
    marginRight: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 3,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 2,
  },
  messageNumber: {
    color: '#ffffff',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryConteainer: {
    marginTop: 20,
    marginHorizontal: 8,
  },
  userPostContainer: {
    marginHorizontal: 24,
  },
});
export default globalStyle;
