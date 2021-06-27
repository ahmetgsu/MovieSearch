import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Block, CHeader, Text} from '../components/common';
import HorizontalList from '../components/common/HorizontalList';
import HomeHeader from '../components/home-screen/HomeHeader';
import MoviesList from '../components/home-screen/MoviesList';
import {baseUrl, apiKey} from '../config/config';
import {httpService} from '../providers/http-service';
import {colors} from '../styles/colors';

const HomeScreen = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    getNowPlaying();
    getPopular();
    getTopRated();
    getUpcoming();
    searchMovie();
    getTrending();
  }, []);

  const getNowPlaying = async () => {
    const response = await httpService.get('movie/now_playing');
    console.log('HomeScreen -> getNowPlaying', response);
    setNowPlaying(response.data.results);
  };
  const getPopular = async () => {
    const response = await httpService.get('movie/popular');
    console.log('HomeScreen -> getPopular', response);
    setPopularMovies(response.data.results);
  };
  const getTopRated = async () => {
    const response = await httpService.get('movie/top_rated');
    console.log('HomeScreen -> getTopRated', response);
  };
  const getUpcoming = async () => {
    const response = await httpService.get('movie/upcoming');
    console.log('HomeScreen -> getUpcoming', response);
    setUpcomingMovies(response.data.results);
  };

  const searchMovie = async () => {
    const response = await httpService.get('search/movie', 'lord');
    console.log('HomeScreen -> searchMovie', response);
  };
  const getTrending = async () => {
    const response = await httpService.get('trending/movie/week');
    console.log('HomeScreen -> getTrending', response);
  };

  return (
    <Block style={styles.container}>
      <HomeHeader bgColor={colors.black2} />
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}>
        <MoviesList title="Popular Movies">
          <HorizontalList data={popularMovies} />
        </MoviesList>
        <MoviesList title="Upcoming Movies">
          <HorizontalList data={upcomingMovies} />
        </MoviesList>
        <MoviesList title="Now Playing">
          <HorizontalList data={nowPlaying} />
        </MoviesList>
      </ScrollView>
    </Block>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackish,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 50,
  },
});
