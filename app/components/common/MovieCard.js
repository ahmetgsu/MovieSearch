import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {getImageUrl} from '../../helpers/getImages';
import {colors} from '../../styles/colors';
import {Block} from './Block';
import Text from './Text';

const MovieCard = ({item}) => {
  const imageUrl = getImageUrl(item.poster_path);
  return (
    <TouchableOpacity style={styles.touchable}>
      <Block flex={false} style={styles.cardContainer} mr={15}>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          style={styles.cardContainer}
          source={{uri: imageUrl}}
        />
      </Block>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: 140,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray1,
  },

  touchable: {
    // shadowColor: '#4d4b4a',
    // shadowOffset: {
    //   width: 1,
    //   height: 9,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
});
