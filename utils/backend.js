import { addDoc, collection,query,where,getDocs } from "firebase/firestore"; 
import {db} from "./firebase";

export const SignIn=async(fName,email,password)=>{
    try{
        await addDoc(collection(db, "Users"), {
            name:fName,
            email,
            password
        });
        console.log("User added Successfully");
    }
    catch(e){
        console.log("Error in adding User",e);
    }
}
export const getUser=async(email)=>{
    try{
        const user=collection(db,"Users");
        const q=query(user,where("email","==",email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            return userDoc.data();
        } 
        return null;
    }
    catch(error){
        console.log("Error in Getting User",error);
    }
}