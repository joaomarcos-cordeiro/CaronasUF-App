import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../../constants/theme';
import Home from './Home';
import arrowLeft from './arrowLeft';
import Email from './Email';
import Lock from './Lock';
import Uni from './Uni';
import Name from './name';
import Card from './Card';

const icons ={
    home: Home,
    arrowleft: arrowLeft ,
    mail: Email,
    lock: Lock,
    uni: Uni,
    name: Name,
    card: Card,
}

const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];
  return (
    <IconComponent
        height={props.size || 24}
        width={props.size || 24 }
        strokeWidth={props.strokeWidth || 1.9}
        color={theme.colors.textLight}
        {...props}
        />
  )
}

export default Icon;

const styles = StyleSheet.create({})