import { useContext,createContext} from "react";

export const TodoContext=createContext({})



export const useTodo=()=>{
    return useContext(TodoContext)

}

export const Todoprovider=TodoContext.Provider