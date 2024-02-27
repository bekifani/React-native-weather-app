import React from 'react'
import { Feather } from '@expo/vector-icons'
import City from '../screens/City'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function Tabs({ weather }) {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'grey',
      tabBarStyle: {
        backgroundColor: 'lightblue'
      },
      headerStyle: {
        backgroundColor: 'lightblue'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color:'tomato'
      }
    }}>
    <Tab.Screen name={'current'}  options={{
      tabBarIcon: ({ focused }) => (<Feather name={'droplet'} size={25} color={focused ? 'tomato': 'black'}/>)
    }}>
      {() => <CurrentWeather weatherData={weather.list[0]}/>}
    </Tab.Screen>
    <Tab.Screen name={'upcoming'} options={{
      tabBarIcon: ({ focused }) => (<Feather name={'clock'} size={25} color={focused ? 'tomato': 'black'}/>)
    }}>
      {()=><UpcomingWeather weatherData={weather.list}/>}
    </Tab.Screen>
    <Tab.Screen name={'city'}  options={{
      tabBarIcon: ({ focused }) => (<Feather name={'home'} size={25} color={focused ? 'tomato': 'black'}/>)
    }}>
      { () => <City weatherData={weather.city} /> }
    </Tab.Screen>
  </Tab.Navigator>
  )
}

export default Tabs