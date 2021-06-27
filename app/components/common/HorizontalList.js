import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Block} from './Block';
import MovieCard from './MovieCard';

const HorizontalList = ({data}) => {
  const _onPressItem = () => {};

  const _renderItem = ({item, index}) => {
    return <MovieCard item={item} index={index} onPressItem={_onPressItem} />;
  };
  return (
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={styles.containerStyle}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={_renderItem}
      style={styles.flatlist}
    />
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  containerStyle: {
    paddingRight: 25,
  },
  flatlist: {
    paddingVertical: 15,
  },
});
