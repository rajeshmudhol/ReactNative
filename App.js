import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Aboutstack } from './stacknavigators/appstack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login/login';
import Mainhome from './home/home';
import { ProductsList } from './screens/ProductsList';
import { ProductDetails } from './screens/ProductDetails';
import { Cart } from './screens/Cart';
import { CartIcon } from './components/CartIcon';
import { CartProvider } from './CartContext';
import { Product } from './components/Product';
import { Button } from 'react-native';
import Profile from './Account/Account';
import MyAddress from './Account/myaddress';
import PrivacyPolicy from './Account/privacypolicy';
import Myorders from './Account/orders';



const mlLogo=require("./assets/react logo.webp");

const tab=createBottomTabNavigator();
const stack=createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen name='Aboutstack' component={Aboutstack} options={{
          headerShown:false,
        }}/>
        {/* <stack.Screen name='account' component={Account}/>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='Cart' component={Cart}/> */}
        
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Mainhome" component={Mainhome} />
        <stack.Screen name="ProductsList" component={ProductsList} />
        <stack.Screen name="ProductDetails" component={ProductDetails} />
        <stack.Screen name="Cart" component={Cart} />
        <stack.Screen name="CartIcon" component={CartIcon} />
        <stack.Screen name="CartProvider" component={CartProvider} />
        <stack.Screen name="Product" component={Product} />
        <stack.Screen name="Profile" component={Profile} />
        <stack.Screen name="MyAddress" component={MyAddress} />
        <stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <stack.Screen name="Myorders" component={Myorders} />
      </stack.Navigator>
    </NavigationContainer>
  );      
}




// import { View,Image,StyleSheet,Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Appstack from "./appstack";
// import Landing from "./landing/landing";
// import Profile from "./Account/Account";

// const tab = createBottomTabNavigator();
// const stack = createBottomTabNavigator();


// export default function App(navigation){
//   return(
//     <View style={{flex:1}} >
//     <NavigationContainer  >
//       <tab.Navigator   screenOptions={{
//         tabBarLabelPosition:'below-icon'
//       }}>
//         <tab.Screen
//         options={{
//           headerRight: ()=>(
//         <Button title="login" onPress={()=>navigation.navigate("Login")}></Button>
//           ),
//           headerLeft:()=>(
//               <Image style={styles.headerleft} source={{uri:"https://play-lh.googleusercontent.com/7SNVliKjQ29YWLIabByRoP71xp9eXSM3Oq4mr5rpUpHhbxi-Y8LPSAqpHST-Ty5HCnY"}}/>
//           )
//       }} name="  " component={Landing}/>

//         <tab.Screen name="Profile" component={Profile}/>
//         <tab.Screen name="Appstack"  component={Appstack}/>
   
//       </tab.Navigator>

   
      
//     </NavigationContainer>
//     </View>
//   )
// }


// const styles = StyleSheet.create({
//   headertext:{
//       fontWeight:"bold",
//       fontSize:15,
     
//   },
//   headerleft:{
//       width:100,
//       height:50,
//   }
// }) 