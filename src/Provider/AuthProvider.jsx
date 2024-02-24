import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config'


export const AuthContext = createContext(null)
const auth=getAuth(app);


const AuthProvider = ({children}) => {


    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(null)


   

 

    const createAccount=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }

    


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    } ,[])


//google
const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }




    const authInfo = {
        createAccount,
        login,
        user,
        logout,
        googleSignIn,


    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
              {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;