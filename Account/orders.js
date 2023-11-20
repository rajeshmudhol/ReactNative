import { View,Text,StyleSheet,Image } from "react-native";


export default function Myorders(){
    return(
        <View style={styles.container} >
           <View style={styles.card} >
           <Image style={styles.image}   source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDeeqOfPnycVHZTFNsQLSaIIb42ncV_ZM9Sf_FvBK&s'}} />
           <Text>Delivaried on 22nd april 2023</Text>
           </View>
           
          
           <View style={styles.card} >
           <Image style={styles.image} source={{uri:'https://kinclimg8.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BIPO0671V01-POSTER-50047.jpg'}} />
           <Text>Delivaried on 22nd april 2023</Text>
           </View> 
           
          
           <View style={styles.card} >
           <Image style={styles.image} source={{uri:'https://img.freepik.com/free-photo/brown-leather-shoes_1203-7562.jpg'}} />
           <Text>Delivaried on 22nd april 2023</Text>
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

})