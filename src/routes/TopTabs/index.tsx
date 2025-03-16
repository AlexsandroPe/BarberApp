import React from "react"


import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"

import Home from "../../pages/Home";
import Produtos from "../../pages/Produtos";
import Agend from "../../pages/Agendamentos";
import Stack from "../Stack";


const {Navigator, Screen} = createMaterialTopTabNavigator();


export default function() {
    return(
        <Navigator>
            <Screen name = "Agendamentos" component={Agend}/>
            <Screen name = "Produtos" component={Produtos}/>
        </Navigator>
    )
}


      {/* <Screen name = "Home" component={Home} 
            options={{tabBarShowLabel: false, swipeEnabled: false, tabBarGap: 30, } }
            /> */}