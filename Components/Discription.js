import { TouchableOpacity , Text} from "react-native";

function Discription({navigation}) {
    return(
        <>
        <TouchableOpacity >
        <Text style={{marginTop: 40}}>One Month Pakage will offer you a license and Certificate in the end of the course</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Form')}>
            <Text style={{marginTop:100, alignSelf:'center',backgroundColor:"gray",padding:15,borderRadius:10}}>Next</Text>
        </TouchableOpacity>
        
        </>

    )
}
export default Discription;