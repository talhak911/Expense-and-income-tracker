import { useState } from "react"

export const useTransaction=()=>{
    const [modelVisible,setModelVisible]=useState(false)
    return {
modelVisible,
setModelVisible
    }
}