import { SafeAreaView, Text, StyleSheet, FlatList, View, StatusBar, ImageBackground } from "react-native"
import { Feather } from '@expo/vector-icons'
import ListItem from "../components/ListItem"

const Item = (props) => {
    const {condition, dt_txt, min, max } = props
    return(
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

const UpcomingWeather = ({ weatherData}) => {
    console.log(weatherData)

    const renderItemrenderer = ({item}) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    )

    return (
        <SafeAreaView styles={styles.container}>
            {/* <ImageBackground source={require('../../assets/cloud.png')} style={styles.image}> */}
                <FlatList
                data={weatherData}
                renderItem={ renderItemrenderer }
                keyExtractor={item=> item.dt_txt}
                ItemSeparatorComponent={()=> <View style={{backgroundColor:'blue', height:1, width:'80vw' }}></View>}
                ListEmpetyComponent = {()=> <View><Text>Empety</Text></View>}
                ListHeaderComponent = {()=> <View><Text>Here is header</Text></View>}
                ListHeaderComponentStyle = { {width:'100%', height:50, alignItems:'center', backgroundColor:'yellow'}}
                ListFooterComponent = {()=> <View><Text>Her is the footer</Text></View>}
                ListFooterComponentStyle = { {width:'100%', height:50, alignItems:'center', backgroundColor:'yellow'}}

            />
            {/* </ImageBackground> */}
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        marginTop: StatusBar.currentHeight || 0
    },
    image: {
        flex: 1
    }
})
export default UpcomingWeather