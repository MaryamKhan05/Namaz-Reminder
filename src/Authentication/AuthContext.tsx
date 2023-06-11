import React, { createContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
// import {getAuth} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
type User = firebase.User | null;

type AuthContextType = {
    user: User;
    signUp: (email: string, password: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
};


// const auth =getAuth()
export const AuthContext = createContext<AuthContextType>({
    user: null,
    signUp: async () => { },
    signIn: async () => { },
    signOut: async () => { },
});

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const signUp = async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error('Sign up error:', error);
            // Handle error or display error message
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log('signe din as', email)
        } catch (error) {
            console.error('Sign in error:', error);
            // Handle error or display error message
        }
    };

    const signOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error('Sign out error:', error);
            // Handle error or display error message
        }
    };

    return (
        <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
