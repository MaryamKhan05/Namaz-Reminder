// import { auth } from "./firebaseConfig";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";




// export const handleSignUp= async (email: string, password: string)=>{
//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;
//         console.log('User signed up:', user.email);
//       } catch (error) {
//         console.error('Error signing up:', error);
//       }
// }


// export const handleSignIn = async (email: string, password:string) => {
//     try {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;
//         console.log('User signed in:', user.email);
       
//       } catch (error) {
//         console.error('Error signing in:', error);
//       }
//   };


//   export const handleSignOut = async () => {
//     try {
//         await signOut(auth);
//         console.log('User signed out');
//       } catch (error) {
//         console.error('Error signing out:', error);
//       }
//   };