import { View, Text } from 'react-native'
import React from 'react'
import Card from './Card'

const FlightCard = (props) => {
    return (
        <Card>
            <Text>{props.details.id}</Text>
            <Text>{props.details.itineraries[0].segments[0].departure.iataCode}</Text>
            <Text>{props.details.itineraries[0].segments[0].departure.terminal}</Text>
            <Text>{props.details.itineraries[0].segments[0].arrival.iataCode}</Text>
            <Text>{props.details.itineraries[0].segments[0].arrival.terminal}</Text>
            <Text>{props.details.itineraries[0].segments[0].carrierCode}</Text>
        </Card>
    )
}

export default FlightCard