import { createContext, useEffect, useState } from "react";
import netlifyIdentity from 'netlify-identity-widget';

 const AuthContext = createContext({
     user: null,
     login: () => {},
     logout: () => {},
     isReady: false
 }) 

 export const AuthContextProvider = ({children}) => {
     const [user, setUser] = useState(null);


     useEffect(() => {
       netlifyIdentity.on('login',(user) => {
          setUser(user)
          netlifyIdentity.close();
          console.log('login event');
       })

       netlifyIdentity.on('logout',() => {
           setUser(null)
           console.log('logout event');
       })

      // init netlify identity connection
      netlifyIdentity.init()

      return () => {
          netlifyIdentity.off('login');
          netlifyIdentity.off('logout');
      }
     },[])

     const login = () => {
         netlifyIdentity.open(); //netlify builtin dialog open for login Form
     }
     const logout = () => {
        netlifyIdentity.logout(); //netlify builtin dialog open for login Form
    }
     const context = {user,login,logout}

     return (
         <AuthContext.Provider value={context}>
             {children}
         </AuthContext.Provider>
     )
 }

 export default AuthContext;