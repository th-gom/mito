import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Pedidos } from './pages/pedidos'
import { Ionicons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export function Routes(){

    return(

        <Tab.Navigator>
         <Tab.Screen
         name= "home"
         component={Home}
         options={{
           headerShown: false,
           tabBarShowLabel: false,
           tabBarIcon: ({ focused, size, color}) => {
 
            if (focused){
                  return <Ionicons size={size} color={color} name="home-sharp" />

            }
            return <Ionicons size={size} color={color} name="home-sharp" />

           }

         }}
         
         />

         <Tab.Screen
         name="pedidos"
         component={Pedidos}
         options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, size, color}) => {
  
             if (focused){
                   return <Ionicons size={size} color={color} name="book" />
 
             }
             return <Ionicons size={size} color={color} name="book" />
 
            }
 
          }}
         


         />


        </Tab.Navigator>

    )




}