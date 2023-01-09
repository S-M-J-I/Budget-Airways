import { View, Text } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import FlightCard from './FlightCard'
import Loader from './Loader'

const FlightList = (props) => {

    const ListTitle = (title) => {
        return (
            <Text>Flights found: </Text>
        )
    }

    const MainView = () => {
        if (props.flights.length === 0) {
            return (
                <Text>No Flights Found</Text>
            )
        } else {
            return (
                <FlatList
                    ListHeaderComponent={ListTitle}
                    style={{ padding: 10 }}
                    data={props.flights}
                    renderItem={({ item }) => <FlightCard details={item} />}
                    keyExtractor={(item) => item.id}
                />
            )
        }
    }


    return (
        <MainView />
    )
}

export default FlightList