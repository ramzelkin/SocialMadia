import React from 'react';
import {Image, View} from 'react-native';
import style from './style';
import PropTyes from 'prop-types';

const UserProfileImage = props => {
  return (
    <View
      style={[style.userImageContainer, {borderRadius: props.imageDimentions}]}>
      <Image
        source={props.profileImage}
        style={{width: props.imageDimentions, height: props.imageDimentions}}
      />
    </View>
  );
};

UserProfileImage.propTyes = {
  profileImage: PropTyes.any.isRequired,
  imageDimentions: PropTyes.number.isRequired,
};

export default UserProfileImage;
