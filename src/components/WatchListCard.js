import { TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HStack, Stack, Text, Badge, IconButton } from '@react-native-material/core'
import styles from '../styles/styles'
import Link from './Link'


const WatchListCard = ({ details }) => {


    return (
        <View style={styles.cardView}>
            <Stack style={{ padding: 10 }} center spacing={10}>
                <HStack fill center spacing={5}>
                    <Text variant='h6'>{details.startAir}</Text>
                    <Text variant='h6'>To</Text>
                    <Text variant='h6'>{details.destAir}</Text>
                </HStack>
                <Text variant='caption'>{details.transits} transit</Text>
                <Text>{details.carrier}</Text>
                <Badge label={`Price: ${details.price}`} color='primary' />
                <Link date={details.date} start={details.startAir} dest={details.destAir} adults={details.adults} infants={details.infants} children={details.children} />
            </Stack>
        </View>
    )
}

export default WatchListCard