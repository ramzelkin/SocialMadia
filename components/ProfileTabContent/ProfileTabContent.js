import React from 'react';
import style from './style';
import {ScrollView, Image, View} from 'react-native';

const ProfileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContentContainer}>
      <View style={style.profileTabContent}>
        <Image
          style={style.image}
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          source={require('../../assets/images/default-post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
