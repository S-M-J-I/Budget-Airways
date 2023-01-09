import { View } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { Text } from '@react-native-material/core'

const Selector = ({ title, value, setValue, items, setItems, visible, setVisible }) => {
    return (
        <View>
            <Text variant='button'>{title}</Text>
            <DropDownPicker
                schema={{
                    label: 'name',
                    value: 'city_code'
                }}
                placeholder="Select a city"
                open={visible}
                value={value}
                items={items}
                setOpen={setVisible}
                setValue={setValue}
                setItems={setItems}
                style={{ width: 140, height: 10 }}
            />
        </View>
    )
}

export default Selector