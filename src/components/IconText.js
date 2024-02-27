import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

function IconText(props) {
 const { iconName, iconColor, bodyText, bodyTextStyle } = props
  return (
    <View style={styles.container}>
        <Feather name={iconName} size={50} color={iconColor}/>
        <Text style={[styles.textTheme, bodyTextStyle ]}>{bodyText}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold'
    },
    container: {
        alignItems: 'center'
    }
})
export default IconText