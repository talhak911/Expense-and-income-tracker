import { signOut } from "../../redux/slices/authSlice"
import { useAppDispatch } from "../../hooks/useStore"

export const useProfile=()=>{
    const dispatch = useAppDispatch()
    const signOutUser=async()=>{
     await dispatch(signOut())
    }
    return{
        signOutUser
    }
}