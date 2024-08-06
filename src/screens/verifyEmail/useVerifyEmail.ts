import { useAppDispatch, useAppSelector } from "../../hooks/useStore"

export const useVerifyEmail=()=>{
    const dispatch= useAppDispatch()
    const sendEmail= useAppSelector((state)=>state.auth.user?.sendEmailVerification)

    return{
        sendEmail
    }
}