import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './app/routes/authNavigation';
import AuthContext from './app/auth/context';
import CartContext from './app/context/cartContext';
import AppNavigation from './app/routes/appNavigation';

export default function App() {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <AuthContext.Provider value={{user, setUser}}>
        <NavigationContainer>
          {!user ? <AuthNavigation /> : <AppNavigation />}
        </NavigationContainer>
      </AuthContext.Provider>
    </CartContext.Provider>
      
  );
}