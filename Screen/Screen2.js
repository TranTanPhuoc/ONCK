import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity, FlatList, ImageBackground, TextInput, Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign,Feather,FontAwesome,Entypo,MaterialIcons} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
function Screen2({route}){
    const {user} = route.params;
    const navigation = useNavigation();
    var [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('https://63972fbe77359127a02fa5ad.mockapi.io/api/on-tap/products').then((res)=>{
            var list = res.data.map((e)=>{
                return ({id:e.id,image:e.image,name:e.name,price:e.price,quantity:e.quantity});
            })
            setData(list);
        }).catch((err)=>{
            console.log(err);
        })
    })
    const amin = useRef(new Animated.Value(0)).current;
    const rotation = amin.interpolate({
        inputRange:[-1,1],
        outputRange:["-20deg","20deg"]
    });
    const hanldMove = ()=>{
        Animated.sequence([
            Animated.timing(amin,{
                toValue:-1,
                duration:300,
                useNativeDriver: true
            }),
            Animated.timing(amin,{
                toValue:1,
                duration:300,
                useNativeDriver: true
            }),
            Animated.timing(amin,{
                toValue:-1,
                duration:300,
                useNativeDriver: true
            }),
            Animated.timing(amin,{
                toValue:1,
                duration:300,
                useNativeDriver: true
            }),
            Animated.timing(amin,{
                toValue:-1,
                duration:300,
                useNativeDriver: true
            }),
            Animated.timing(amin,{
                toValue:1,
                duration:300,
                useNativeDriver: true
            }),
            Animated.timing(amin,{
                toValue:0,
                duration:300,
                useNativeDriver: true
            }),
        ]).start();
    }
    hanldMove();
    const renderItem= ({item}) =>{
        return(
            <View style={{flex:1,height:250,width:"100%",justifyContent:'center',alignItems:'center'}}>
                <View style={{width:"90%",borderRadius:10,backgroundColor:"#D7D7D7",flex:0.95}}>
                    <View style={{flex:0.7,justifyContent:'center',alignItems:'center'}}>
                        <View style={{height:"80%",width:"80%",}}>
                            <Image source={{uri:item.image}} style={{height:"100%",width:"100%",borderRadius:10,}}/>
                        </View>
                    </View>
                    <View style={{flex:0.3,marginLeft:10,marginRight:10,}}>
                        <View style={{flex:0.4,justifyContent:'center'}}>
                            <Text style={{fontSize:26,fontWeight:'600'}}>{item.name}</Text>
                        </View>
                        
                        <View style={{flex:0.6,justifyContent:'space-between',display:'flex',flexDirection:'row',alignItems:"center"}}>
                            <Text style={{fontSize:22,}}>Số lượng : {item.quantity}</Text>
                            <TouchableOpacity onPress={()=>{navigation.navigate("Screen3",{
                                id:item.id, name:item.name,image:item.image,price:item.price,quantity:item.quantity,user:user
                            })}} style={{height:40,width:40,backgroundColor:'#F5B16D',justifyContent:'center',alignItems:'center',borderRadius:10,}}>
                                <MaterialIcons name="add" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    return(
        <SafeAreaView style={styles.container}>
           <View style={{flex:0.1,backgroundColor:'#FFEBCD',borderRadius:20,display:'flex',flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:0.15,alignItems:'center'}}>
                    <Feather name="menu" size={32} color="black" />
                </View>
                <View style={{flex:0.5,display:'flex',flexDirection:'row',height:"100%"}}>
                    
                </View>
                <View style={{flex:0.35,alignItems:'center',height:"100%",justifyContent:'center',display:'flex',flexDirection:'row'}}>
                    <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity onPress={hanldMove} style={{flex:0.5,justifyContent:'center',alignItems:'center',}}>
                            <Animated.View  style={{alignSelf:'center',transform:[{rotate:rotation}],}}>
                                <Ionicons name="notifications-outline" size={32} color="black" />
                            </Animated.View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
                        <View style={{height:50,width:50,}}>
                            <Image source={{uri:user.image}} style={{height:"100%",width:"100%",borderRadius:100,borderWidth:0.5,}}/>
                        </View>
                    </View>
                    
                </View>
            </View>
            <View style={{flex:0.8,marginLeft:10,marginRight:10,}}>
                <View style={{flex:0.15,display:'flex',flexDirection:'row'}}>
                    <View style={{flex:0.9,justifyContent:'center'}}>
                        <Text style={{fontSize:32,color:"#F4A460",fontWeight:"600"}}>Eat Nutritious Food{"\n"}and Stay healthy</Text>
                    </View>
                    <View style={{flex:0.1,justifyContent:'center'}}>
                        <View style={{height:35,width:35,backgroundColor:'#63B8FF',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                            <Entypo name="lock" size={24} color="#F4A460" />
                        </View>
                    </View>
                </View>
                <View style={{flex:0.1,backgroundColor:'#D3D3D3',borderRadius:20,display:'flex',flexDirection:'row'}}>
                    <View style={{flex:0.15,justifyContent:'center',alignItems:'center'}}>
                        <Feather name="search" size={24} color="black" />
                    </View>
                    <View style={{flex:0.7,justifyContent:'center'}}>
                        <TextInput placeholder='Search here' style={{fontSize:20}}/>
                    </View>
                    <View style={{flex:0.15,justifyContent:'center',alignItems:'center'}}>
                        <AntDesign name="menu-fold" size={24} color="black" />
                    </View>
                </View>
                <View style={{flex:0.2,display:'flex',alignItems:'center',flexDirection:'row'}}>
                    <TouchableOpacity style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:22,fontWeight:"600"}}>Flower</Text>
                        <View style={{borderWidth:2,width:"70%",borderColor:'#CD853F'}}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'#CDC5BF'}}>Vegetable</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'#CDC5BF'}}>Bokery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'#CDC5BF'}}>Meat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'#CDC5BF'}}>Rice</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.55,}}>
                    <FlatList numColumns={2} data={data}  keyExtractor={(item) => item.id} renderItem={renderItem}/>
                </View>
            </View>
            <View style={{flex:0.1,backgroundColor:'white',display:'flex',flexDirection:"row",alignItems:'center',justifyContent:'space-around',borderTopWidth:0.3,}}>
                <View style={{flex:0.25,height:"100%",justifyContent:'center',alignItems:"center"}}>
                    <AntDesign name="home" size={24} color="#CD853F" />
                    <View style={{borderWidth:2,width:"20%",borderColor:'#CD853F'}}></View>
                </View>
                <View style={{flex:0.25,height:"100%",justifyContent:'center',alignItems:"center"}}>
                    <AntDesign name="hearto" size={24} color="#CDC5BF" />
                </View>
                <TouchableOpacity  style={{flex:0.25,height:"100%",justifyContent:'center',alignItems:"center"}}>
                    <FontAwesome name="bell" size={24} color="#CDC5BF" />
                </TouchableOpacity>
                <View style={{flex:0.25,height:"100%",justifyContent:'center',alignItems:"center"}}>
                    <AntDesign name="user" size={24} color="#CDC5BF" />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
export default Screen2;