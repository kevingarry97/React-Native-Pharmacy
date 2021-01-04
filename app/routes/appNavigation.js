import React  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ViewAllScreen from '../screen/viewAllScreen';
import ViewDetailScreen from '../screen/viewDetailScreen';
import CartScreen from '../screen/cartScreen';
import checkOutScreen from '../screen/checkOutScreen';

const AppStack = createStackNavigator();

const AppNavigation = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Home" component={ViewAllScreen} />
            <AppStack.Screen name="Details" component={ViewDetailScreen} />
            <AppStack.Screen name="Cart" component={CartScreen} />
            <AppStack.Screen name="CheckOut" component={checkOutScreen} />
        </AppStack.Navigator>
    )
    
}

export default AppNavigation;