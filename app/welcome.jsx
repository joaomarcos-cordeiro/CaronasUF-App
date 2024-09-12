import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/Button'



const Welcome = () => {
  return (
    <ScreenWrapper bg ="white">
        <StatusBar style="dark" />
        <View style={style.container}>
            {/* welcome image */}
            <Image style={style.welcomeImage} resizeMode='contain' source={require('../assets/images/logo2.png')} />

            {/* title */}
            <View style={{gap: 20}}>
                <Text style={style.title}>Diariamente</Text>
                <Text style={style.punchline}>
                Sem poluição, movemos seu futuro com conforto.
                    </Text>
             </View>

             {/* footer */}
         <View style={style.footer}>
                <Button
                    title="Começar"
                    buttonStyle={{marginHorizontal: wp(3)}}
                    onPress={()=>{}}
                />
         </View>
        </View>

        
      
    </ScreenWrapper>
  )
}


export default Welcome

const style = StyleSheet.create ({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingHorizontal: wp(4),
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100),
        alignSelf: 'center',
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: 'center',
        fontWeigh: theme.fonts.extraBold,
        
    },
    
    punchline: {
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text,

    },
    footer:{
        gap:30,
        width: '100%'
    }


})