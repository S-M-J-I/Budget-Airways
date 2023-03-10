import { View, Text } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import FlightCard from './FlightCard'
import Loader from './Loader'

const FlightList = (props) => {

    const MainView = () => {
        if (props.flights.length === 0) {
            return (
                <Text>No Flights Found</Text>
            )
        } else {
            return (
                <FlatList
                    style={{ padding: 10, margin: 5 }}
                    data={props.flights}
                    renderItem={({ item }) => <FlightCard start={props.start} dest={props.dest} details={item} adults={props.adults} children={props.children} infants={props.infants} />}
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