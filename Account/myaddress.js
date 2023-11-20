import { View, Text, Button, TextInput, StyleSheet, SafeAreaView, onChangeText, text, onChangeNumber, number } from "react-native";
import { Alert } from "react-native";


const MyAddress = () => {
    
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: 100, height: 90, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ width: 100, fontWeight: '600', fontSize: 18, marginLeft: 15, marginTop: 30 }}>My Address</Text>


            </View>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter City Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter Building Name"
                />


                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Enter PinCode Name"
                    keyboardType="numeric"
                />
            </SafeAreaView>


            <Button
                title={'save Address'}
                bgColor={'#000'}
                textColor={'#fff'}
                onPress={() =>Alert.alert("Your Address has been saved succussfully")} />



        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
export default MyAddress;