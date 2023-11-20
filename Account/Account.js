import { View,Image, Text, TouchableOpacity ,Pressable} from "react-native";
import React from "react";



export default function Profile({navigation}) {


  return (
   
    <View style={{ flex: 1 }}>
      <View style={{ width: 100, height: 90, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 15 ,marginTop:30}}>Profile</Text>
        <TouchableOpacity style={{ width: 30, height: 30, marginRight: 40, justifyContent: 'center' }}>
            <Image source={{uri:"https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/settings-512.png"}} style={{ width: 24, height: 24,marginLeft:270,marginTop:30 }} />
        </TouchableOpacity>
      </View>


 <Image source={{uri:"data:image/jpeg;base64,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"}}
        style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 30 }} />


      <Text style={{ alignSelf: 'center', marginTop: 20, fontSize: 18 }}></Text>


      <TouchableOpacity style={{ width: '100', height: 50, borderBottomWidth: .3, marginTop: 20, borderBottomColor: '#8e8e8e', justifyContent: 'center' }}>
       
       


     
     
      <Pressable onPress={()=>navigation.navigate("MyAddress")}>
        <Text style={{left:20}}>My Address</Text>
        </Pressable>
      </TouchableOpacity>


      <Pressable onPress={()=>navigation.navigate("Myorders")} style={{ width: '100', height: 50, borderBottomWidth: .3, marginTop: 20, borderBottomColor: '#8e8e8e', justifyContent: 'center' }}>
        <Text style={{left:20}}>My Orders</Text>
      </Pressable>


      <Pressable onPress={()=>navigation.navigate("PrivacyPolicy")} style={{ width: '100', height: 50, borderBottomWidth: .3, marginTop: 20, borderBottomColor: '#8e8e8e', justifyContent: 'center' }}>
        <Text style={{left:20}}>Privacy Policy</Text>
      </Pressable>

   


    </View>
  );
}