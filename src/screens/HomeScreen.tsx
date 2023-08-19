/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';


const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  const { top } = useSafeAreaInsets();

  if ( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" size={ 100 } />
      </View>
    );
  }

  return (

    <GradientBackground>

      <ScrollView>
        <View style = {{ marginTop: top + 20 }}>

          {/* Carousel Principal */}
          <View style = {{  height: 440 }}>
            <Carousel
              vertical={ false }
              data={ nowPlaying }
              renderItem={ ({ item }: any) => <MoviePoster movie={ item } /> }
              sliderWidth={ windowWidth }
              itemWidth={ 300 }
              inactiveSlideOpacity={ 0.9 }
            />
          </View>

          {/* Peliculas Populares */}
          <HorizontalSlider title="Populares" movies={ popular } />

          {/* Peliculas Top rated */}
          <HorizontalSlider title="Top Rated" movies={ topRated } />

          {/* Peliculas Upcoming */}
          <HorizontalSlider title="Upcoming" movies={ upcoming } />

        </View>

      </ScrollView>

    </GradientBackground>


  );
};
