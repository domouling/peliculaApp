/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

type homeScreenProp = StackNavigationProp<RootStackParams>;


export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const navigation = useNavigation<homeScreenProp>();

    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate('DetailScreen', movie) }
            activeOpacity={ 0.8 }
            style = {{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7,
            }}
        >
            <View style = { styles.imageContainer }>
                <Image
                    source={{ uri }}
                    style={ styles.image }
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        borderRadius: 18,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 10,
    },
});
