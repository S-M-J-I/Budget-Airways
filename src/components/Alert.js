import { View } from 'react-native'
import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogHeader, Text } from '@react-native-material/core'

const Alert = ({ title, body }) => {

    const [visible, setVisible] = useState(true)

    const dismissWindow = () => {
        setVisible(false)
    }

    return (
        <Dialog visible={visible} onDismiss={dismissWindow}>
            <DialogHeader title={`${title}`} />
            <DialogContent>
                <Text>
                    {body}
                </Text>
            </DialogContent>
            <DialogActions>
                <Button title='Cancel' compact variant='text' onPress={dismissWindow} />
                <Button title='Ok' compact variant='text' onPress={dismissWindow} />
            </DialogActions>
        </Dialog>
    )
}

export default Alert