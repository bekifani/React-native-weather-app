
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weather';
export default function CurrentWeather({ weatherData }) {
  const {
    main: {temp,feels_like, temp_max, temp_min}, 
    weather 
  } = weatherData
  const weatherCondition = weather[0].main
  return (
    <SafeAreaView style={[styles.wrapper, backgroundColor=weatherType[weatherCondition].backgroundColor]}>
      <View style={styles.container}>
          <Feather name={weatherType[weatherCondition].icon} size={100} color="black" />
          <Text style={styles.temprature}>{temp}</Text>
          <Text style={styles.feels}>{`Feels like ${feels_like} `}</Text>
          <RowText messageOne={`High ${temp_max}`} messageTwo={`Low: ${temp_min}`} containerStyles={styles.highLowWrapper} messageOneStyles={styles.highLow} messageTwoStyles={styles.highLow}/>
          <RowText messageOne={weather[0].description} messageTwo={weatherType[weatherCondition].message} containerStyles={styles.bodyWrapper} messageOneStyles={styles.description} messageTwoStyles={styles.message}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex:1,
  },
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
  },
  temprature : {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30, 
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  bodyWrapper: {
    justifyContent: 'center',
    alignItems:'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
