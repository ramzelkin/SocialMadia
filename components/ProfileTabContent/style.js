import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  profileTabContentContainer: {
    backgroundColor: '#ffffff',
  },
  profileTabContent: {
    paddingHorizontal: horizontalScale(21),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: horizontalScale(140),
    height: verticalScale(90),
    borderRadius: horizontalScale(10),
    marginTop: verticalScale(11),
  },
});
export default style;
