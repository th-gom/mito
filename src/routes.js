// src/routes.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home/index';
import { Pedidos } from './pages/segundaHome';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <Ionicons size={size} color={color} name={focused ? "home-sharp" : "home-sharp"} />;
          }
        }}
      />

      <Tab.Screen
        name="pedidos"
        component={Pedidos} 
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <Ionicons size={size} color={color} name={focused ? "book" : "book"} />;
          }
        }}
      />
    </Tab.Navigator>
  );
}
