import { View, StyleSheet, Image, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../landing/landing";
import Mainhome from "../home/home";
import { ProductsList } from "../screens/ProductsList";
import { ProductDetails } from "../screens/ProductDetails";
import { Cart } from "../screens/Cart";
import { CartProvider } from "../CartContext";
import { CartIcon } from "../components/CartIcon";
import { Product } from "../components/Product";


const stack = createNativeStackNavigator();



export const Aboutstack = ({navigation}) => {
    return (
        <CartProvider>
        <stack.Navigator initialRouteName="Landing">
            <stack.Screen options={{
                headerRight: ()=>(
              <Button title="login" onPress={()=>navigation.navigate("Login")}></Button>
                ),
                headerLeft:()=>(
                    <Image style={styles.headerleft} source={{uri:"https://play-lh.googleusercontent.com/7SNVliKjQ29YWLIabByRoP71xp9eXSM3Oq4mr5rpUpHhbxi-Y8LPSAqpHST-Ty5HCnY"}}/>
                )
            }} name=" " component={Landing} />
            <stack.Screen 
             name="Mainhome"  component={Mainhome} />
            <stack.Screen name="Product" component={Product} />

            


            <stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <stack.Screen  name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })}/>
          <stack.Screen  name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })}/>




          

        </stack.Navigator>
        </CartProvider>
    )
}

export default function Appstack() {
    return (
        <View >
            <NavigationContainer  >
          
                <Aboutstack  />
            </NavigationContainer>
        </View>
    )
}


const styles = StyleSheet.create({
    headertext:{
        fontWeight:"bold",
        fontSize:15,
    },
    headerleft:{
        width:100,
        height:50,
    }
}) 