import { View, StyleSheet,Image, Pressable, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";



export default function Mainhome({navigation}){
    return(
        <View style={styles.container} >
           <Pressable style={styles.card} onPress={()=>navigation.navigate("ProductsList")}>
           <Image style={styles.image}   source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnEku68THwLMEpss1oTzqj2UD5PqYK_UeBdn4GILdz1scg2S8VMK80Flb3NfTXXfhPDFQ&usqp=CAU'}} />
           </Pressable>
           
          
           <Pressable style={styles.card} onPress={()=>navigation.navigate("ProductsList")}>
           <Image style={styles.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfO4zutPuCAaC29_hLITOjGNEwSSO0Pwa67ok1kWurN47Sf4rrdtRcy41J2w74OcC7wng&usqp=CAU'}} />
           </Pressable> 
           
          
           <Pressable style={styles.card} onPress={()=>navigation.navigate("ProductsList")}>
           <Image style={styles.image} source={{uri:'https://img.freepik.com/premium-vector/elegant-alphabet-letters-font-number-classic-lettering-minimal-fashion-designs_581980-486.jpg'}} />
          
           </Pressable>

           <View style={styles.bottom}>
<Button color="gray"    title="profile" onPress={()=>navigation.navigate("Profile")}/>
           </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        rowGap:25,
    },
    card:{
        width:'65%',
        height:'25%',
        borderWidth:2,
        borderColor:"black",
        borderRadius:16,
        marginLeft:60,
        top:20,
    },
    image:{
        width:"100%",
        height:"100%",
        borderRadius:16,
        resizeMode:"contain",
    },
    bottom:{
        borderTopWidth:2,
        top:65,
        borderTopColor:'lightgray',
      width:"40%",
      left:10,
     
     
       
    },
    bottombutton:{
width:70,


    }
})