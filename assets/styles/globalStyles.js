import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginTop: 30,
    marginRight: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
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
    right: 12,
    top: 10,
  },
  messageNumber: {
    color: '#ffffff',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryConteainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
});
export default globalStyle;
