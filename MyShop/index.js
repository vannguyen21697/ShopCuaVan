/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Components/App';
import {name as appName} from './app.json';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Authentication from './Components/Authentication/Authentication';
import Main from './Components/Main/Main';
import OderHistory from './Components/oderHistory/oderHistory';
import ChangeInfo from './Components/ChangeInfo/ChangeInfo';
// 


AppRegistry.registerComponent(appName, () => App);
