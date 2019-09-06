/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import numberviewstyle from './style'


type Props = {};
export default class NumberView extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            initialValue:this.props.initialValue,
          
        };
      }
      componentDidMount(){
          this.theme();
      }
      theme(){
           const basecolor =  this.LightenDarkenColor(this.props.themeColor,90);
           this.setState({basecolor})
      }


      LightenDarkenColor(col,amt) {
        var usePound = false;
        if ( col[0] == "#" ) {
            col = col.slice(1);
            usePound = true;
        }
    
        var num = parseInt(col,16);
    
        var r = (num >> 16) + amt;
    
        if ( r > 255 ) r = 255;
        else if  (r < 0) r = 0;
    
        var b = ((num >> 8) & 0x00FF) + amt;
    
        if ( b > 255 ) b = 255;
        else if  (b < 0) b = 0;
    
        var g = (num & 0x0000FF) + amt;
    
        if ( g > 255 ) g = 255;
        else if  ( g < 0 ) g = 0;
    
        return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
    }

    ValChange(type){
        switch(type){
            case 'increment':
                    this.setState({initialValue:this.state.initialValue+1},()=>{
                        this.props.onValueChange(this.state.initialValue)
                        this.props.onIncrement()
                    })
                   

            break;

            case 'decrement':
                this.setState({initialValue:this.state.initialValue-1},()=>{
                    this.props.onValueChange(this.state.initialValue)
                    this.props.onDecrement()
                })
                
            break;

        }  
    }

 

    

  render() {
    return (
      <View style={numberviewstyle.container}>
                <View>
                    <TouchableOpacity 
                        style={[ { shadowColor: "red", backgroundColor:'white'},    
                                this.props.enableDefaultStyles && numberviewstyle.btn, 
                                numberviewstyle.btnDefault, 
                                numberviewstyle.boxShadow]}
                        onPress={()=>this.ValChange('decrement')}>
                         {this.props.leftContent}
                    </TouchableOpacity>
                </View>
                <View  style={[this.props.themeColor != false && { backgroundColor:this.state.basecolor   },  { shadowColor: "red", },  this.props.enableDefaultStyles && numberviewstyle.btn, numberviewstyle.btnDefault, numberviewstyle.boxShadow]}>
                         <Text style={[this.props.themeColor != false && { color:this.props.themeColor  }, {  }, this.props.enableDefaultStyles && numberviewstyle.text,  ]} >  {this.state.initialValue} </Text>
                 </View>
                <View>
                    <TouchableOpacity
                        style={[ { shadowColor: "red", backgroundColor:'white'}, 
                                   this.props.enableDefaultStyles && numberviewstyle.btn, 
                                   numberviewstyle.btnDefault, 
                                   numberviewstyle.boxShadow]}
                        onPress={()=>this.ValChange('increment')}>
                                {this.props.rightContent}
                    </TouchableOpacity>
                </View> 
      </View>
    );
  }
}
 
NumberView.defaultProps = {
   initialValue:0,
   enableDefaultStyles:true,
   themeColor:false,
   maxLimit:false
}