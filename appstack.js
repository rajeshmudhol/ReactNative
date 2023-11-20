import { View } from "react-native"; 

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Landing from "./landing/landing";
import MyAddress from "./Account/myaddress";
import Profile from "./Account/Account";

const stack = createNativeStackNavigator();


export const Aboutstack =()=>{
    return(
        <View>
            <stack.Navigator initialRouteName="Landing">
                <stack.Screen  name="Landing" component={Landing}/>
                <stack.Screen  name="Profile" component={Profile}/>
                <stack.Screen  name="MyAddress" component={MyAddress}/>
            </stack.Navigator>
        </View>
    )
}

export default function Appstack(){
    return(
        <NavigationContainer>
            <Aboutstack/>
        </NavigationContainer>
    )
}