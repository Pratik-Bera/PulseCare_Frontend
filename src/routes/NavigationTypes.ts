import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, RouteNames } from './';

export type LoginScrNavProp = NativeStackNavigationProp<RootStackParamList, RouteNames.LOGIN>
export type RegistrationNavProp = NativeStackNavigationProp<RootStackParamList, RouteNames.REGISTRATION>
