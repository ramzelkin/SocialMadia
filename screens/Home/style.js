import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(7),
    marginTop: verticalScale(30),
    marginRight: horizontalScale(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(3),
    backgroundColor: '#F9FAFB',
    borderRadius: horizontalScale(100),
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(10),
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: verticalScale(2),
  },
  messageNumber: {
    color: '#ffffff',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryConteainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(8),
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(24),
  },
});
export default style;
