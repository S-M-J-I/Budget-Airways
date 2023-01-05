import { View, Text } from 'react-native'
import React from 'react'
import { Flex, Stack, Surface } from '@react-native-material/core'

const Card = (props) => {
    return (
        <Flex>
            <Surface elevation={9} category='medium' style={{ padding: 20 }}>
                {props.children}
            </Surface>
        </Flex>
    )
}

export default Card