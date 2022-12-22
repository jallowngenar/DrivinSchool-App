import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
function Services({navigation}) {

    const Pakages = [{
       one : 'One Month with license and Certificate',
       two : 'Three Weeks with Learner License',
       three : 'One Month with license and Certificate',
       four : 'Three Weeks with Learner License',
       five : 'One Month with license and Certificate',
 }]

    return(
        <>
        <Text style={{marginTop: 75, alignSelf:'center',fontSize:30}}>Our Services</Text>
        {
            Pakages.map((item) =>{
                return(
                <View style={{marginHorizontal: 40, marginTop: 20}}>
                 <View style={{margin:20}}>
                <Text style={{fontSize: 20, fontWeight: '700'}}>{item.one}</Text>
                <View  style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: '500', fontSize: 30,fontWeight: '700'}}>D14, 000</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Discription')}>
                <FontAwesome name="angle-right" size={40} color="black" style={{marginLeft: 40}} />
                </TouchableOpacity>
                </View>
                </View>
                <View style={{margin:20}}>
                <Text style={{fontSize:20, fontWeight: '700'}}>{item.two}</Text>
                <View style={{flexDirection: 'row'}} >

                <Text style={{fontWeight: '500', fontSize: 30}}>D10, 000</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Discription')}>
                <FontAwesome name="angle-right" size={40} color="black" style={{marginLeft: 40}} />
                </TouchableOpacity>
                </View>
                
                </View>
                <View style={{margin:20}}>
                <Text style={{fontSize: 20,fontWeight:'700'}}>{item.three}</Text>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontWeight: '500',fontSize:30}}>D8000</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Discription')}>
                <FontAwesome name="angle-right" size={40} color="black" style={{marginLeft: 40}} />
                </TouchableOpacity>
                </View>
                </View>
                <View style={{margin:20,}}>
                <Text style={{fontSize: 20,fontWeight:'700'}}>{item.four}</Text>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:30,fontWeight:'500'}}>D4000</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Discription')}>
                <FontAwesome name="angle-right" size={40} color="black" style={{marginLeft: 40}} />
                </TouchableOpacity>
                </View> 
                </View>
                </View>

                )
            })
        }
        </>
    )
}


export default Services