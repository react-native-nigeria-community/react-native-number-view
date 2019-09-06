/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import {StyleSheet} from 'react-native';

const numberviewstyle = StyleSheet.create({
        container:{
             flexDirection:'row',
              alignContent:'space-between'
        },
        btn:{
             width:25,
            height:25, 
            borderRadius:5    
        },
        btnDefault:{
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
            marginHorizontal:5
         },
         text:{
            fontWeight:'900'
         },
        boxShadow:{
              shadowOffset: {
                width: 0,
                height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,
             elevation: 15,
        }


  });
  
export default numberviewstyle;