import React from 'react'
import {Alert, PushNotificationIOS} from 'react-native'
import PushNotification  from 'react-native-push-notification'

export default class pushController extends React.Component{
    componentDidMount(){
        PushNotification.configure({
            // onRegister is a function optional called when token is get from ios and android
            onRegister: function(token) {
                console.log("TOKEN", token)

            },
            // required onNotification called when remote or local notification is received
            onNotification: function(notification) {
                console.log("NOTIFICATION", notification)
                //process of notification 
                Alert.alert(notification)
                //required on ios only 
                PushNotification.finish(PushNotificationIOS.FetchResult.NoData)
                
            },
            //sender id for android only important for remote not.. but not important for local
            senderID: "30147650499",
            /// for ios only

            permissions: {
                alert: true,
                badge: true,
                sound: true
            },
            popInitialNotification: true,
            requestPermissions: true
            

        })
    }



    render(){
        return null
    }
}