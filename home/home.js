import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native";


export default function Home({navigation}){
    return(
        <View style={styles.container} >
            <Text style={styles.text}>Landing Page</Text>
            <Button title="landingpage" onPress={()=>(navigation.navigate("Landing"))}/>
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