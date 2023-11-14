import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native";


export default function Landing({navigation}){
    return(
        <View style={styles.container} >
            <Text style={styles.text}>Landing Page View</Text>
            <Button title="go to home" onPress={()=>navigation.navigate("Home")}></Button>
        </View >
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
    }
})