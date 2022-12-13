import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
function Screen3({ route}){
    var { id,image,name,price,quantity } = route.params;
    const navigation = useNavigation();
    const hanldGoBack = ()=>{
        navigation.navigate('Screen2',{user:user});
    }
    const hanldAddOrder = ()=>{
        axios.post('https://63972fbe77359127a02fa5ad.mockapi.io/api/on-tap/orders',{
            name:name,
            price:price,
        }).then((res)=>{
            quantity--;
            axios.put(`https://63972fbe77359127a02fa5ad.mockapi.io/api/on-tap/products/${id}`,{
                quantity:quantity,
                name:name,
                id:id,
                price:price,
                image:image
            }).then((res)=>{
                navigation.goBack();
            }).catch((err)=>{
                console.log(err);
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <SafeAreaView style={styles.container}>
           <View style={{flex:0.45,backgroundColor:"#C6E2FF"}}>
                <View style={{flex:0.2,alignItems:'center',display:'flex',flexDirection:'row'}}>
                    <View style={{flex:0.2,height:"100%",justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity onPress={hanldGoBack} style={{height:35,width:35,backgroundColor:'#E8E8E8',justifyContent:'center',alignItems:'center',borderRadius:10,}}>
                            <AntDesign name="left" size={22} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.6,height:"100%",justifyContent:'center',alignItems:'center'}}>
                       
                    </View>
                    <View style={{flex:0.2,height:"100%",justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity style={{height:35,width:35,backgroundColor:'#F4A460',justifyContent:'center',alignItems:'center',borderRadius:10,}}>
                            <AntDesign name="heart" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:0.8,justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:image}} style={{height:200,width:200,}}/>
                </View>
           </View>
           <View style={{flex:0.4,marginRight:20,marginLeft:20,}}>
                <View style={{flex:0.3,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontSize:25,fontWeight:"600",color:'black',marginRight:20,}}>{name}</Text>
                    <View style={{height:50,width:100,backgroundColor:'#C6E2FF',justifyContent:'center',alignItems:'center',borderRadius:20,}}>
                        <Text style={{fontSize:18,color:'#EE7942',fontWeight:"600"}}>{price} $</Text>
                    </View>
                </View>
                <View style={{flex:0.1,display:'flex',flexDirection:'row'}}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <Entypo name="star" size={24} color="#FFD700" style={{marginRight:10,}} />
                        <Text style={{fontSize:22,color:'black'}}>4.8 Raiting</Text>
                    </View>
                    <View style={{display:'flex',flexDirection:'row',marginLeft:30,}}>
                        <FontAwesome name="commenting" size={24} color="#EE7621" style={{marginRight:10,}} />
                        <Text style={{fontSize:22,color:'black'}}>10 comments</Text>
                    </View>
                </View>
                <View style={{flex:0.1}}>
                    <Text style={{fontSize:25,fontWeight:"600",color:'black',marginRight:20,}}>Descprtion</Text>
                </View>
                <View style={{flex:0.5,}}>
                    <Text style={{fontSize:22,}}>the part of a plant that is often brightly coloured and has a pleasant smell, or the type of 
                    plant that produces these the part of a plant that is often brightly coloured and has a pleasant smell, or the type of plant that produces these</Text>
                </View>
           </View>
           <View style={{flex:0.15,justifyContent:'center',alignItems:'center',marginLeft:20,marginRight:20,}}>
                <TouchableOpacity onPress={hanldAddOrder} style={{height:60,width:"100%",backgroundColor:"#EE7942",justifyContent:'center',alignItems:'center',borderRadius:20,}}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <Text style={{fontSize:25,fontWeight:"600",color:'white',marginRight:20,}}>BUY</Text>
                        <FontAwesome name="shopping-cart" size={24} color="white" />
                    </View>
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

export default Screen3;