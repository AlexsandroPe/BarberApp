import { TouchableOpacity } from "react-native";

import Feather from  "@expo/vector-icons/Feather"
import React, {useState} from "react";

type Props = {

    toggleText: () => void;
}


export default function PassEye({toggleText}: Props) {

    const [eyeState, setEyeState] = useState("eye");
    function showOrNo(state: string){
        if(state == "eye"){
            setEyeState("eye-off")
        }else{
            setEyeState("eye")
        }

        toggleText()
    }
    return (
        <TouchableOpacity onPress={() => showOrNo(eyeState)}>
            <Feather name={eyeState} size={22} color={"black"}/>
        </TouchableOpacity>
    )
}