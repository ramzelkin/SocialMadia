import React from 'react';
import style from './style';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimentions={65}
      />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};
export default UserStory;
