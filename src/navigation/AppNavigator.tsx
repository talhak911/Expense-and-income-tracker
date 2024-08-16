import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from '../../src/navigation/BottomNavigator';
import AuthNavigator from '../../src/navigation/AuthNavigator';
import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';
import { useAppSelector } from '../hooks/useStore';

export default function AppNavigator() {
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (!user || !user.emailVerified) return <AuthNavigator />;
  return <BottomNavigator />;
}
