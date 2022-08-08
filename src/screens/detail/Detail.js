import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import * as axios from 'axios';
import styles from './styles';

export default function DetailScreen({navigation, route}) {
  const [postDetail, setPostDetail] = React.useState([]);
  const [postComments, setPostComments] = React.useState([]);
  var myDate = new Date(postDetail.created * 1000);
  React.useEffect(() => {
    const baseurl = 'https://www.reddit.com';
    var url = route?.params?.url;
    url.slice(0, -1);
    url = baseurl + url + '.json';
    url &&
      axios
        .get(url)
        .then(function (response) {
          setPostDetail(response?.data[0]?.data?.children[0]?.data);
          setPostComments(response?.data[1]?.data?.children);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [route]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Image
        source={require('../../assets/bgimg.jpeg')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={10}
      />
      {/* //////deatil section /////////*/}
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => navigation.pop()}>
          <View style={styles.backButton}>
            <Text style={styles.backArrow}>{'<'}</Text>
            <Text style={styles.backText}>{'Back'}</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.authorDetail} numberOfLines={2}>
            {'Posted by u/' +
              postDetail?.author +
              ' on ' +
              `${myDate?.toDateString()}`}
          </Text>
          <Text style={styles.title}>{postDetail?.title}</Text>
          <Text style={styles.description}>{postDetail?.selftext}</Text>
          {postDetail?.post_hint === 'image' && (
            <Image source={{uri: postDetail?.url}} style={styles.image} />
          )}
        </View>
        <View>
          {postComments?.length > 0 ? (
            <FlatList
              data={postComments}
              ListHeaderComponent={() => {
                return (
                  <View>
                    <Text style={styles.commentText}>Coments</Text>
                  </View>
                );
              }}
              keyExtractor={item => item?.data?.id}
              contentContainerStyle={styles.listItem}
              renderItem={({item, index}) => {
                var date = new Date(item?.data?.created * 1000);

                return (
                  <View style={styles.commentContainer}>
                    <Text style={styles.commentAuthor}>
                      {item?.data?.author}
                    </Text>
                    <Text style={styles.commentDate}>
                      {date.toLocaleString()}
                    </Text>
                    <Text style={styles.comment}>{item?.data?.body}</Text>
                  </View>
                );
              }}
            />
          ) : (
            <View style={styles.noComments}>
              <Text style={styles.noCommentText}>No comments yet</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
