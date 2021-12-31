import { useState, useEffect } from 'react';
import db from '../firebase/config'

import { collection, addDoc } from 'firebase/firestore';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
// hook is a small reusable code

// function to upload files to firebase
const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    // everytime file changes this effect occurs
    useEffect(() => {
        // references
        const storage = getStorage()
        const storageRef = ref(storage, file.name)
        const uploadTask = uploadBytesResumable(storageRef, file)
        // upload file
        
        uploadTask.on('state_changed' ,snapshot =>  {
                    // snapshot is snap shot of upload
                    // that may fire a few times as upload
                  let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  setProgress(progress)
     
        }, (err) => {
            // if error occurs
            setError(err);
        }, async () => {
        
            getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL =>{
                try{
                    const docRef = await addDoc(collection(db, "images"), {
                        url: downloadURL,
                        createdAt: new Date()
                      });

                    setUrl(downloadURL);
                    
                } catch(err){
                    console.log("Error adding document: ",err)
                }
            })

        })

    }, [file])

    return { progress, url, error }
}

export default useStorage;