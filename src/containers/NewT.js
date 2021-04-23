import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import Test from './Test';

export default function Home ({route, navigation}) {
    const {name} = route.params;
    return(
        <ScrollView>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
        </ScrollView>
    );
}