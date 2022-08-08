import * as React from 'react';
import {
  StatusBar,
  Image,
  Animated,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as axios from 'axios';
import styles from './styles';

const SPACING = 20;
const AVATAR_SIZE = 120;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export default function HomeScreen({navigation}) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://www.reddit.com/r/reactnative.json')
      .then(function (response) {
        console.log({response: response?.data?.data?.children});
        setPosts(response?.data?.data?.children);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        source={require('../../assets/bgimg.jpeg')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={10}
      />
      <Animated.FlatList
        data={posts}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={item => item?.data?.id}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });

          var myDate = new Date(item?.data?.created * 1000);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail', {
                  url: item?.data?.permalink,
                })
              }>
              <Animated.View
                style={[styles.listItem, {transform: [{scale}], opacity}]}>
                <View>
                  <Text style={styles.title} numberOfLines={2}>
                    {item?.data?.title}
                  </Text>
                  <Text style={styles.description} numberOfLines={3}>
                    {item?.data?.selftext}
                  </Text>
                  <Text style={styles.date}>{myDate?.toDateString()}</Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
