import { Image, ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import ImageSlider from "react-native-image-slider";

export default function Landing({ navigation }) {
    return (
        <ScrollView  style={styles.container} >
            <View style={{ width: "100%", height: 300 }}>
                <ImageSlider autoPlayWithInterval={3000} style={styles.imageslider} images={[
                    "https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975924.jpg",
                    "https://img.freepik.com/free-psd/summer-collection-sale-banner-style_23-2148520739.jpg",
                    "https://img.freepik.com/premium-psd/social-media-banner-design-with-3d-rendering-shopping-instrument_351527-1226.jpg",
                ]} />
            </View>
            <Text style={styles.productText}>Upcoming products</Text>

            <Text style={{fontSize:22,fontWeight:"bold",marginLeft:10,marginTop:15,}}>Accessories</Text>
            <ScrollView horizontal={true} style={styles.productlist}>
               
                <View style={styles.imagecard}>
                    <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhmKTeKvvknmnynOxkNzYCmRqcUZc32gpoepzZ3sK72fXza0FVEgtLXu3N31N8WjHhTsM&usqp=CAU'}} />
                </View>
                <View style={styles.imagecard}>
                <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVYuGTEtkuAufdk_bNAj6K_zCSFMTBjTNg9mt1MspxKShlUI_M7rYFw7-8QFg4Y_8d6Y&usqp=CAU'}} />
                </View>
                <View style={styles.imagecard}>
                <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR198Ec4WWI6CLAM-CQM0Xgp-vPls9b76gvcQ&usqp=CAU'}} />
                </View>
                <View style={styles.imagecard}>
                <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
                </View>
                <View style={styles.imagecard}>
                <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
                </View>
                <View style={styles.imagecard}>
                <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYy2-or1wz1VNwnVqx43JH1B42rIMkkXJ14Q&usqp=CAU'}} />
                </View>

                
            </ScrollView>


            <Text style={{fontSize:22,fontWeight:"bold",marginLeft:10,marginTop:10}}>Mens Fashion</Text>
            <ScrollView horizontal={true} style={styles.productlist}>
               
               <View style={styles.imagecard}>
                   <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://m.media-amazon.com/images/I/61nkHOS24+L._SX679_.jpg'}} />
               </View>
               <View style={styles.imagecard}>
               <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://m.media-amazon.com/images/I/413u+UzvT8L._SL1000_.jpg'}} />
               </View>
               <View style={styles.imagecard}>
               <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9PJ-ZV1M4xbuV0SplKvn1qXyKprFyZPVow&usqp=CAU'}} />
               </View>
               <View style={styles.imagecard}>
               <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://images.meesho.com/images/products/91266416/aafld_512.webp'}} />
               </View>
               <View style={styles.imagecard}>
               <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRu-iqgLHaErUi-lcZ7N1QsmWjSohbl4LIgg&usqp=CAU'}} />
               </View>
               <View style={styles.imagecard}>
               <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://images.meesho.com/images/products/308661743/kqowr_256.webp'}} />
               </View>

               
           </ScrollView>


           <Text style={{fontSize:22,fontWeight:"bold",marginLeft:10,marginTop:10}}>Womens Fashion</Text>
            <ScrollView horizontal={true} style={styles.productlist}>
               
               <View style={styles.imagecard}>
                   <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM474CopqySTW1hIhK3OZpauhHv26tf0QCug&usqp=CAU'}} />
               </View>
               <View style={styles.imagecard}>
               <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://lp2.hm.com/hmgoepprod?set=source[/2e/fd/2efd63d3a721cdabf15db924925201e1ed1d51ed.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]'}} />
               </View>
               <View style={styles.imagecard}>
               <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJpgeVlnL_omDJqtN79SJEUnGXd6lHrWK7hlves-NkM-Jl_HkrDK4euspP_Y9UOfEX-k&usqp=CAU'}} />
               </View>
               <View style={styles.imagecard}>
               <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRR4_ZhztP0SvApVMUU7_o8X44w0Zb041YNA&usqp=CAU'}} />
               </View>
               <View style={styles.imagecard}>
               <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://kxadmin.metroshoes.com/product/41-3834/550/41-3834M14.jpg'}} />
               </View>
               <View style={styles.imagecard}>
               <Image style={{width:"100%",height:"100%",borderRadius:16,}} source={{uri:'https://rukminim2.flixcart.com/image/450/500/kuzuoi80/slipper-flip-flop/3/p/g/5-flat-minnii-p-pampy-angel-black-original-imag7zz4sgghukyd.jpeg?q=90&crop=false'}} />
               </View>

           </ScrollView>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    productText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop:15,
      textAlign:"center"

    },
    imagecard: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: "black",
        marginTop:20,
        borderRadius:16,    
        marginLeft:30,
        

    },
    productlist: {
        width: "100%",
        height: '700',
        // alignItems:"center",
    
        marginTop:20,
    }
})