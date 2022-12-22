import {SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';

function Form (){
    return(
       <SafeAreaView>
        <Text style={{marginTop: 35, fontWeight: 'bold', fontSize: 20, alignSelf: 'center'}}>Enter Your Information</Text>
        <View style={styles.Input}>
        <View>
            <Text style={{fontWeight: '600'}}>Full Name</Text>
            <TextInput  placeholder='Enter your name' style={ styles.inputName}/>
        </View>
        {/*  */}
        <View>
            <Text>Address</Text>
            <TextInput  placeholder='Enter your name' style={styles.inputAddress}/>
        </View>
        {/*  */}
        <View>
            <Text>Age</Text>
            <TextInput  placeholder='Enter your name' style={styles.inputAge}/>
        </View>
        {/*  */}
        <View>
            <Text>Phone Number</Text>
            <TextInput  placeholder='Enter your name' style={styles.inputPhone}/>
        </View>
        </View>

        {/*  */}
        <TouchableOpacity>
            <Text style={{alignSelf:'center',marginTop:30,backgroundColor:"gray",padding:15, borderRadius: 5}}>Submit</Text>
        </TouchableOpacity>
       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
Input:{
    marginLeft: 40,
    padding: 20
},
inputName:{
    borderWidth: 1, 
    padding: 7, 
    borderRadius: 5,
    marginTop: 15, 
    marginBottom: 15

},
inputAddress:{
    borderWidth: 1, 
    padding: 7, 
    borderRadius: 5,
    marginTop: 15, 
    marginBottom: 15

},
inputAge:{
    borderWidth: 1, 
    padding: 7, 
    borderRadius: 5,
    marginTop: 15, 
    marginBottom: 15
 
},
inputPhone:{
    borderWidth: 1, 
    padding: 7, 
    borderRadius: 5,
    marginTop: 15, 
    marginBottom: 15
}
})
export default Form