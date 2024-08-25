import StackNavigator from '../stackNavigator/StackNavigator';
import AuthNavigator from '../authNavigator/AuthNavigator';
import {useAppNavigator} from './useAppNavigator';

export default function AppNavigator() {
  const {initializing, user} = useAppNavigator();
  if (initializing) return null;

  return user && user.emailVerified ? <StackNavigator /> : <AuthNavigator />;
}
