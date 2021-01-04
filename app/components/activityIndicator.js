import React from 'react';
// import LottieView from 'lottie-react-native'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors';
import AppText from './text';
 
function ActivityIndicator({ visible = false}) {
    if(!visible) return null;
    
    return (
        <View style={styles.overlay}>
            <AppText style={{ color: colors.primary }}>Loading</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    overlay: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#000',
        height: '100%',
        opacity: 0.6,
        width: '100%',
        zIndex: 1
    }
})

export default ActivityIndicator;