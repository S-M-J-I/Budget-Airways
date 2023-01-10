import { TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { HStack, Stack, Text, Badge, IconButton } from '@react-native-material/core'
import { getAirlineFromIATA, getCityFromIATA } from '../middlewares/middlewares.flights'
import { numberWithCommas } from '../middlewares/middlewares.utils'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


const FlightCard = ({ details, start, dest }) => {
    const [startAir, setStart] = useState('')
    const [transits, setTransits] = useState('')
    const [destAir, setDest] = useState('')
    const [carrier, setCarrier] = useState('')
    const [price, setPrice] = useState('')


    useEffect(() => {
        // setStart("Dhaka")
        // setDest("Istanbul")
        // setTransits("Kuwait")
        // setCarrier("Etihad")
        // setPrice("9,000 BDT")
        _findFlightIntervals()
    }, [])


    /**
     * find the transits and destination of the current flight shown
     * @param {None}
     * @returns {None}
     */
    const _findFlightIntervals = async () => {
        const { segments } = details.itineraries[0]
        const lengthOfFlight = segments.length

        // console.log(start, dest)
        // set start
        setStart(await getCityFromIATA(start))

        // set the final destination
        setDest(await getCityFromIATA(dest))

        // set the transits
        setTransits(await getCityFromIATA(segments[0].arrival.iataCode))

        // set carrier
        // console.log(segments[0].carrierCode)
        setCarrier(await getAirlineFromIATA(segments[0].carrierCode))

        // set the price

        setPrice(`${numberWithCommas(parseInt(details.price.total))} ${details.price.currency}`)
    }


    return (
        <View style={{ padding: 2, margin: 6, borderColor: 'black', borderWidth: 1, borderRadius: 5 }}>
            <Stack style={{ padding: 10 }} center spacing={5}>
                <HStack fill center spacing={5}>
                    <Text variant='h6'>{startAir}</Text>
                    <Text variant='h6'>To</Text>
                    <Text variant='h6'>{destAir}</Text>
                </HStack>
                <Text variant='caption'>{transits} transit</Text>
                <Text>{carrier}</Text>
                <Badge label={`Price: ${price}`} color='primary' />
                <HStack fill center>
                    <Text variant='caption'>Add to Watchlist</Text>
                    <IconButton icon={props => <Icon name='check' color='primary' {...props} />} onPress={() => { }} />
                </HStack>
            </Stack>
        </View>
    )
}

export default FlightCard