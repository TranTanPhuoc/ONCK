import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import axios from 'axios';
function Screen1(){
    const navigation = useNavigation();
    const hanldPress= () =>{
        axios.get("https://63972fbe77359127a02fa5ad.mockapi.io/api/on-tap/users").then((res)=>{
            const data = res.data;
            let user  = null;
            for (let index = 0; index < data.length; index++) {
                if(data[index].email == email && data[index].password == passWord){
                    user = {id:data[index].id,email:data[index].email,password:data[index].password,image:data[index].image,name:data[index].name}
                }
            }
            if(user == null){
                alert("User không tồn tại")
            }
            else{
                navigation.navigate('Screen2',{user:user});
            }
           
        }).catch((err)=>{
            console.log(err);
    })
    }
    const [email, setEmail] = useState();
    const [passWord, setPassWord] = useState();
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex:0.6,alignItems:'center',justifyContent:'center',backgroundColor:"#EEE9E9"}}>
                <View style={{height:300,width:300,}}>
                    <Image source={{uri:'https://res.cloudinary.com/drljnqaai/image/upload/v1670852954/OnThiCK/forget-me-not-flower-as309740666_inkduo.jpg'}} style={{height:"100%",width:"100%",borderRadius:20,}}/>
                </View>
            </View>
            <View style={{flex:0.4,alignItems:'center',marginTop:20,}}>
                <View style={{flex:0.15,width:"100%",justifyContent:'center',alignItems:'center'}}>
                    {/* <Text style={{flex:0.15,fontSize:18,}}>Email:</Text> */}
                    <TextInput placeholder='Email' onChangeText={(x) => setEmail(x)} value={email} style={{height:"100%",width:"80%",backgroundColor:"#fafbfa",borderRadius: 10,paddingLeft: 10,borderWidth:0.5,fontSize:20,}}/>
                </View>
                <View style={{flex:0.1,}}></View>
                <View style={{flex:0.15,width:"100%",justifyContent:'center',alignItems:'center'}}>
                    {/* <Text style={{flex:0.15,fontSize:18,}}>Email:</Text> */}
                    <TextInput placeholder='Password' onChangeText={(x) => setPassWord(x)} value={passWord} secureTextEntry={true} style={{height:"100%",width:"80%",backgroundColor:"#fafbfa",borderRadius: 10,paddingLeft: 10,borderWidth:0.5,fontSize:20,}}/>
                </View>
                <View style={{flex:0.1,}}></View>
                <TouchableOpacity onPress={hanldPress} style={{flex:0.2,backgroundColor:'#87CEFA',width:"80%",borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:22,fontWeight:"bold"}}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
   
  });
  
export default Screen1;