import {useState, useEffect} from 'react'
import db from '../firebase/config'
// orderBy is no longer available
// Import orderByKey
import { collection, query, onSnapshot, orderBy} from "firebase/firestore";

const useFirestore = (collectionName)=>{
    const [docs,setDocs] = useState([])
    
    useEffect(()=>{

        const sortBy = [orderBy('createdAt','desc')]
        const dbRef = query(collection(db,collectionName),...sortBy)
     
        const unsubscribe = onSnapshot(dbRef, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id});
            });
            
            setDocs(documents);

          });

      
        return ()=> unsubscribe()
      

    },[collectionName])
    


    return {docs}

}

export default useFirestore