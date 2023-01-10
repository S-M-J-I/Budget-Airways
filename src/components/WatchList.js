import { View } from 'react-native'
import React, { useState } from 'react'
import { Text } from '@react-native-material/core'
import { FlatList } from 'react-native-gesture-handler'
import FlightCard from './FlightCard'

const WatchList = ({ watchList }) => {


    const ListRender = () => {
        return (<FlatList
            data={watchList}
            renderItem={({ item }) => <FlightCard start={item.start} dest={item.dest} details={item} showWatchList={false} />}
            keyExtractor={(item) => item.id}
            style={{ padding: 10, margin: 5 }}
        />)
    }


    const MainView = () => {
        if (!watchList) {
            return (<Text>No flights in watch list</Text>)
        } else {
            return (
                <ListRender />
            )
        }
    }

    return (
        <MainView />
    )
}

export default WatchList