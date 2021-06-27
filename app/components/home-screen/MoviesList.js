import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import {Block, Text} from '../common';

const MoviesList = ({title, children}) => {
  return (
    <Block flex={false}>
      <Block flex={false} pl={20} pv={10}>
        <Text color={colors.white} size={20} weight="bold">
          {title}
        </Text>
      </Block>
      <Block flex={false}>{children}</Block>
    </Block>
  );
};

export default MoviesList;

const styles = StyleSheet.create({});
