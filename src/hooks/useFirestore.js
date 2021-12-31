import {useState, useEffect} from 'react'
import db from '../firebase/config'
import { collection, query, onSnapshot, orderBy} from "firebase/firestore";

const useFirestore = (collectionName)=>{
    
    const [docs,setDocs] = useState([])
    
    useEffect(()=>{
        
        const sortBy = [orderBy('createdAt','desc')]
//         create query by passing a collection object with out database exported from our config file
        const dbRef = query(collection(db,collectionName),...sortBy)
     
        const unsubscribe = onSnapshot(dbRef, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id});
            });
            
            setDocs(documents);

          });

//       Unsubscribe from our collection after each snapshot
        return ()=> unsubscribe()
      

    },[collectionName])
    


    return {docs}

}

export default useFirestore
