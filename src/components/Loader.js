import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator, Stack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Loader = () => {
    return (
        <Stack fill center>
            <ActivityIndicator size="large" />
        </Stack>
    )
}

export default Loader