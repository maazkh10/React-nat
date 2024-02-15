import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from '../Screens/Signup';
import Login from '../Screens/Login'
import Home from "../Screens/Home";
const Stack = createStackNavigator();

export default function AppNavigation(){
    return(
        <NavigationContainer>
  <Stack.Navigator initialRouteName=''>
    <Stack.Screen 
     name='Signup'
     component={Signup}
     options={{headerShown: false}}
    />
     <Stack.Screen 
     name='Login'
     component={Login}
     options={{headerShown: false}}
    />
     <Stack.Screen 
     name='Home'
     component={Home}
     options={{headerShown: false}}
    />
  </Stack.Navigator>
</NavigationContainer>   
    )
}