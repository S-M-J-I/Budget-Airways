import { View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProviders'
import styles from '../../styles/styles'
import { Stack, TextInput, Text, Divider, HStack, VStack, Button } from '@react-native-material/core'
import airportConfigs from '../../../configs/airport.configs'
import Loader from '../../components/Loader'
import DateTimePicker from '@react-native-community/datetimepicker';
import { getAllFlights } from '../../middlewares/middlewares.flights'
import FlightList from '../../components/FlightList'
import Selector from '../../components/Selector'

const NewTrip = () => {
    const [start, setStart] = useState('')
    const [openStart, setOpenStart] = useState(false)
    const [openDest, setOpenDest] = useState(false)
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState(new Date())
    const [dest, setDest] = useState('')
    const [airports, setAirports] = useState([])
    const [flights, setFlights] = useState([])
    const [loading, setLoading] = useState(true)
    const [flightsLoaded, setFlightsLoaded] = useState(false)
    const [flightListLoading, setFlightListLoading] = useState(false)
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    useEffect(() => {
        fetch(`https://airlabs.co/api/v9/cities?api_key=${airportConfigs.API_KEY}`, { method: "GET", mode: "cors" })
            .then(res => res.json())
            .then(data => {
                let airs = []
                let res = data.response
                for (let i = 0; i < 30; ++i) {
                    airs.push(res[i])
                }

                setAirports(airs)
                setLoading(false)
                console.log(start)
            })
            .catch(error => {
                alert(error.message)
            })
    }, [])

    const getUserFlights = () => {
        setFlightListLoading(true)
        getAllFlights(start, dest, date, adults, children, infants, setFlights, setFlightsLoaded)
        setFlightListLoading(false)
    }

    const RenderCreateTrip = () => {
        return (
            <VStack style={styles.cardViewOutline} spacing={20}>
                <HStack style={{ margin: 10 }} spacing={25}>
                    <VStack spacing={5}>
                        <Selector
                            title='Start'
                            items={airports}
                            setItems={setAirports}
                            value={start}
                            setValue={setStart}
                            visible={openStart}
                            setVisible={setOpenStart}
                        />
                    </VStack>
                    <VStack spacing={5}>
                        <Selector
                            title='Destination'
                            items={airports}
                            setItems={setAirports}
                            value={dest}
                            setValue={setDest}
                            visible={openDest}
                            setVisible={setOpenDest}
                        />
                    </VStack>
                </HStack>
                <HStack style={{ margin: 30 }} center spacing={30}>
                    <VStack spacing={3}>
                        <Text>Adults</Text>
                        <TextInput style={{ width: 80, height: 10, ...styles.input }} keyboardType='number-pad' value={adults} onChangeText={setAdults} />
                    </VStack>
                    <VStack spacing={5}>
                        <Text>Children</Text>
                        <TextInput style={{ width: 80, height: 10, ...styles.input }} keyboardType='number-pad' value={children} onChangeText={setChildren} />
                    </VStack>
                    <VStack spacing={5}>
                        <Text>Infants</Text>
                        <TextInput style={{ width: 80, height: 10, ...styles.input }} keyboardType='number-pad' value={infants} onChangeText={setInfants} />
                    </VStack>
                </HStack>
                <Button style={{ marginTop: 50, marginLeft: 40, marginRight: 40 }} title='Choose Departure Date' onPress={() => setOpenDate(true)} />
                {openDate && (
                    <DateTimePicker
                        value={new Date(date)}
                        onChange={(e, input) => {
                            setDate(input)
                            setOpenDate(false)
                        }}
                    />
                )}
                <HStack center spacing={20}>
                    <Button title='Show flights' onPress={getUserFlights} />
                    <Button title='Clear' variant='outlined' onPress={() => {
                        setFlights([])
                        setStart()
                        setDest()
                        setDate(new Date())
                        setFlightsLoaded(false)
                    }} />
                </HStack>
                {flightListLoading && (<Loader />)}
                <Divider />
                {flightsLoaded && (
                    <>
                        <Text variant='subtitle1'>Flights from {start} to {dest} at {date.toLocaleDateString()} </Text>
                        <FlightList flights={flights} start={start} dest={dest} adults={adults} children={children} infants={infants} />
                    </>
                )}
            </VStack>
        )
    }

    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View style={styles.containerhome}>
                        {loading ? <Loader /> : <RenderCreateTrip />}
                    </View>
                )
            }
        </AuthContext.Consumer>
    )
}

export default NewTrip