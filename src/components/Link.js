import { View, Text, Linking, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

// https://www.amadeus.net/results?cabinClass=Economy&country=BD&currency=BDT&locale=en&origin=DAC&destination=IST&outboundDate=2023-01-12&adults=1&children=0&infants=0

const Link = ({ date, start, dest, adults, children, infants }) => {

    const compose = `https://www.amadeus.net/results?cabinClass=Economy&country=BD&currency=BDT&locale=en&origin=${start}&destination=${dest}&outboundDate=${date}&adults=${adults}&children=${children}&infants=${infants}`

    return (
        <TouchableOpacity onPress={() => { Linking.openURL(compose) }}>
            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Book Now</Text>
        </TouchableOpacity>
    )
}

export default Link