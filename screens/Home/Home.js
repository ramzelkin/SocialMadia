import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './style';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import {scaleFontSize} from '../../assets/styles/scalling';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes/';

const Home = ({navigation}) => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('../../assets/images/default-image.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('../../assets/images/default-image.png'),
    },
    {
      firstName: 'Joseph',
      id: 3,
      profileImage: require('../../assets/images/default-image.png'),
    },
    {
      firstName: 'White',
      id: 4,
      profileImage: require('../../assets/images/default-image.png'),
    },
    {
      firstName: 'Oliver',
      id: 5,
      profileImage: require('../../assets/images/default-image.png'),
    },
    {
      firstName: 'Nata',
      id: 6,
      profileImage: require('../../assets/images/default-image.png'),
    },
    {
      firstName: 'Vika',
      id: 7,
      profileImage: require('../../assets/images/default-image.png'),
    },
    {
      firstName: 'Max',
      id: 8,
      profileImage: require('../../assets/images/default-image.png'),
    },
    {
      firstName: 'Nano',
      id: 9,
      profileImage: require('../../assets/images/default-image.png'),
    },
  ];

  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      profileImage: require('../../assets/images/default-image.png'),
      image: require('../../assets/images/default-post.png'),
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      profileImage: require('../../assets/images/default-image.png'),
      image: require('../../assets/images/default-post.png'),
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      profileImage: require('../../assets/images/default-image.png'),
      image: require('../../assets/images/default-post.png'),
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Spera',
      location: 'New York, NY',
      likes: 200,
      comments: 18,
      bookmarks: 6,
      profileImage: require('../../assets/images/default-image.png'),
      image: require('../../assets/images/default-post.png'),
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 500,
      comments: 29,
      bookmarks: 4,
      profileImage: require('../../assets/images/default-image.png'),
      image: require('../../assets/images/default-post.png'),
      id: 5,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    console.log('currentPage', currentPage);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    } else {
      return database.slice(startIndex, endIndex);
    }
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <StatusBar backgroundColor={'red'} barStyle={'dark-content'} />
      <View style={style.userPostContainer}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title={"Let's Explore"} />
                <TouchableOpacity style={style.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={scaleFontSize(20)}
                    color={'#898DAE'}
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={style.userStoryConteainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            console.log('end posts');
            if (isLoadingUserPosts) {
              return;
            }

            setIsLoadingUserPosts(true);
            console.log('fetching more data', userPostsCurrentPage + 1);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          data={userPostsRenderedData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <UserPost
              key={'userPost' + item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              image={item.image}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              profileImage={item.profileImage}
              location={item.location}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
