import React,{useContext, useReducer, useEffect, Children} from "react";

import DemoReducer_36 from "./DemoReducer_36";

import { supabase } from "../db/clientSupabase";

const initialState = {
    pName: '呂泰霖',
    pId: '210410436',
    blogs: [],
    blogs2: []
}

const DemoContext_36 = React.createContext();

const DemoProvider_36 = ({children}) => {
    const [state, dispatch] = useReducer(DemoReducer_36, initialState);

    const  fetchBlogDataFromSupabase = async() => {
          try{
            let { data, error } = await supabase.from('card_36').select('*')
    
            console.log('data', data);
            dispatch({type:'GET_BLOGS_SUPABASE_SUCCESS', payload:data});
            // console.log('result', result);
            // setData(data);
          } catch (error){
            console.log(error);
          }
        }
    
        useEffect(()=> {
          fetchBlogDataFromSupabase();
        }, []);
    
    return (
        <DemoContext_36.Provider value={{...state}}>
            {children}
        </DemoContext_36.Provider>
    )
}

const useDemoContext_36 = () => {
    return useContext(DemoContext_36);
}

export { DemoProvider_36, useDemoContext_36}