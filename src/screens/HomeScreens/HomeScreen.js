import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProviders'
import { Button, Divider, Stack, Text } from '@react-native-material/core'
import styles from '../../styles/styles'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import WatchList from '../../components/WatchList'
import Loader from '../../components/Loader'
import { auth } from '../../firebase/firebase'
import { composeApi } from '../../middlewares/middlewares.utils'

const HomeScreen = ({ navigation }) => {

    const [watchlist, setWatchlist] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const uid = auth.currentUser.uid
        fetch(composeApi(`users/getwatchlist`), {
            method: "POST",
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: uid })
        })
            .then(res => res.json())
            .then(data => {
                if (data.code === 404) {
                    alert("User not found")
                }

                setWatchlist(data)
            })
            .catch(error => {
                alert(error.message)
            })
        setLoading(false)
    }, [])


    const RenderWatchList = () => {
        return (
            <WatchList
                watchList={watchlist}
            />
        )
    }

    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View style={styles.containerhome}>
                        <Button title='Search for a flight' onPress={() => navigation.navigate('create-trip')} trailing={props => <Icon name='magnify' {...props} />} />
                        <Text>{"\n"}</Text>
                        <Divider />
                        <Text variant='h5'>WatchList</Text>
                        {loading ? (<Loader />) : (<RenderWatchList />)}
                    </View>
                )
            }
        </AuthContext.Consumer>
    )
}

export default HomeScreen