import { View , Text, Image, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";

function DashBoard ({navigation}){
    return(
        <View style={style.container}>
            <ImageBackground source={require('../assets/d1.jpeg')} style={{width:400, height: 800, }}>
            <Text style={{ fontSize: 30,paddingTop: 70, paddingHorizontal:20, fontWeight: '800'}} >Test your driving skill and  get your driving license</Text>
                 <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: 'white', fontWeight: '700'}}>Get Started</Text>
                 </TouchableOpacity>

            </ImageBackground>
        
        </View>
    )
}


const style = StyleSheet.create({
    container:{
       // backgroundColor: 'red',
        flex: 1
        
    },
    button:{
        marginTop: '120%', 
        marginLeft: '60%', 
        backgroundColor: 'grey',
         padding: 10, 
         borderRadius: 10, 
         width: 100
    }
})
export default DashBoard;