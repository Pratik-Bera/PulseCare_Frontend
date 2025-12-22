import { User } from '../models/User';
import { RouteNames } from './RouteNames';

export type RootStackParamList = {
    [RouteNames.LOGIN]          :undefined;
    [RouteNames.SPLASH]         :undefined;
    [RouteNames.REGISTRATION]   : undefined;
    [RouteNames.DASHBOARD]   : User;
}