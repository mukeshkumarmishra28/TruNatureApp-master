import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import {userSchemaArray} from 'models/schema';
import { getRealmApp } from "../../getRealmApp";

// Access the Realm App.
const app = getRealmApp();
// Create a new Context object that will be provided to descendants of
// the AuthProvider.
const AuthRealmContext = React.createContext(null);

// The AuthProvider is responsible for user management and provides the
// AuthContext value to its descendants. Components under an AuthProvider can
// use the useAuth() hook to access the auth value.

const AuthProvider = ({ children }) => {
  const [realmUser, setRealmUser] = useState(app.currentUser);
  const realmRef = useRef(null);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
      console.log('useeffect')
    if (!realmUser) {
      console.log('user nothing')
      return;
    }


    // TODO: Return a cleanup function that closes the user realm.
    return () => {
      // cleanup function
    //   const userRealm = realmRef.current;
    //   if (userRealm) {
    //     userRealm.close();
    //     realmRef.current = null;
    //     setProjectData([]); // set project data to an empty array (this prevents the array from staying in state on logout)
    //   }
    };
  }, [realmUser]);

  // The signIn function takes an email and password and uses the
  // emailPassword authentication provider to log in.
  const realmServerAppSignIn = async (email, password) => {
    // TODO: Pass the email and password to Realm's email password provider to log in.
    // Use the setUser() function to set the logged-in user.

    console.log("Sign in called");
    const creds = Realm.Credentials.emailPassword(email, password);

    try {
      const newUser = await app.logIn(creds);
      
      console.log("Successfully logged in!", newUser.id);
      global.realmAppUser=newUser;
      setRealmUser(newUser);
    } catch (err) {
      console.error("Failed to log in", err.message);
    }

    
  };
  const getUserRealmById=async(userid)=>{
    console.log('get user realm object')
    if(realmUser!=null){
      console.log('realmUser not null')
      return new Promise((resolve, reject) => {
        try {
      
          const config = {
            schema:userSchemaArray,
              sync: {
                user:realmUser,
                  partitionValue: `user=${userid}`,
      
              },
      
          };
      
          Realm.open(config).then((realmObject) => {
            //let userObj=realmObject.objects('Users').filtered('Id ="'+userid + '"');     
            resolve(realmObject);
          });
      
      } catch (error) {
         reject(`Error opening user realm: ${JSON.stringify(error, null, 2)}`)
          throw `Error opening user realm: ${JSON.stringify(error, null, 2)}`;
      
      }
       })
    }else{
      alert('realm user is null')
    }
   
  };
  const openRealm=async(schemaArray,partitionValue)=>{
    console.log('open realm called')
    if(realmUser!=null){
      console.log('realmUser not null')
      return new Promise((resolve, reject) => {
        try {
      
          const config = {
            schema:schemaArray,
              sync: {
                user:realmUser,
                  partitionValue: partitionValue,
      
              },
      
          };
      
          Realm.open(config).then((realmObject) => {
           resolve(realmObject);
          });
      
      } catch (error) {
         reject(`Error opening realm ${partitionValue}: ${JSON.stringify(error, null, 2)}`)
          throw `Error opening realm ${partitionValue}: ${JSON.stringify(error, null, 2)}`;
      
      }
       })
    }else{
      alert('realm user is null')
    }
   
  };

  // The signUp function takes an email and password and uses the
  // emailPassword authentication provider to register the user.
  const signUp = async (email, password) => {
    // TODO: Pass the email and password to Realm's email password provider to register the user.
    // Registering only registers and does not log in.
    await app.emailPasswordAuth.registerUser(email, password);
  };

  // The signOut function calls the logOut function on the currently
  // logged in user
  const realmServerAppSignOut = () => {
    if (realmUser == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    realmUser.logOut();
  setRealmUser(null);
    // TODO: Log out the current user and use the setUser() function to set the current user to null.
  };

  return (
    <AuthRealmContext.Provider
      value={{
        signUp,
        realmServerAppSignIn,
        realmServerAppSignOut,
        openRealm,
        getUserRealmById,
        realmUser,
        app, // list of projects the user is a memberOf
      }}
    >
      {children}
    </AuthRealmContext.Provider>
  );
};

// The useAuth hook can be used by components under an AuthProvider to
// access the auth context value.
const useAuth = () => {
  const auth = useContext(AuthRealmContext);
  if (auth == null) {
    throw new Error("useAuth() called outside of a AuthProvider?");
  }
  return auth;
};

export { AuthProvider, useAuth,AuthRealmContext };
