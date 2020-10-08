import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native'

const Button = ({title})=>(
    <TouchableOpacity style={{
        backgroundColor:'#FFCE05',
        paddingVertical: 15,
        marginHorizontal: 16,
        borderRadius: 30
    }}>
        <Text style={{
            textAlign:'center',
            fontSize: 18,
            color: '#272727',
            fontWeight: '600'
        }}>{title}</Text>
    </TouchableOpacity>
)
export default Button