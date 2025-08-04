import React, { useContext } from 'react'
import { useState, createContext } from 'react';

export const AuthContext=createContext(); 
// Creates a React Context (AuthContext) to share authentication state (the logged-in user) across your app.
// This context will be used to provide and consume authentication-related data.
// The createContext function initializes the context, which can be used to pass data through the component tree without having to pass props down manually at every level.
// The AuthContext will hold the authentication state and a function to update it.
// It will be used to manage the authentication state of the application, allowing components to access and update the current user information.

export default function AuthProvider({children}) {
  const initalAuthUser=localStorage.getItem("Users")
//   Reads the user info from localStorage (if available) when the app loads, so the user stays logged in after a refresh.
//   If no user info is found, it initializes the authUser state to undefined.
//   This allows the application to persist the user's authentication state across page reloads.
//   If the user is logged in, it retrieves the user data from localStorage and parses it into a JavaScript object.

  const [authUser, setAuthUser] = useState(
   initalAuthUser? JSON.parse(initalAuthUser):undefined
   )
//    Provides authUser and setAuthUser to all child components, allowing them to read or update the authentication state.

   return(
   <AuthContext.Provider value={[authUser, setAuthUser]}>
    {children}
    </AuthContext.Provider>
   );
}
export const useAuth=()=>useContext(AuthContext);