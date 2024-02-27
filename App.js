import { StyleSheet, StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tabs from './src/components/Tabs'
import { ActivityIndicator, Text } from 'react-native'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItems from './src/components/ErrorItems'
const Tab = createBottomTabNavigator()
const App = () => {
  const [isLoading, error, weather] = useGetWeather()
  console.log(isLoading, error, weather);
  
  if(weather && weather.list) {
    return ( 
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer> 
    )
  }
  return (<View style={styles.container}>
    {isLoading ? <ActivityIndicator size={'large'} color={'blue'}/> : <ErrorItems/> }</View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
})

export default App