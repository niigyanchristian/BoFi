import { ref, getDownloadURL,uploadBytes} from "firebase/storage";
import { storage } from "../firebaseConfig";
import 'firebase/storage'; 

export default useFirebase = () => {

  const uploadImage = async (imageurl,path) => {
    // setActive(true)
    // setUploadVisible(true)
    const response = await fetch(imageurl)
    const blobFile = await response.blob()
    const reference = ref(storage, path+"/"+Date.now())
     const result = await uploadBytes(reference, blobFile)
     const image = await getDownloadURL(result.ref)
     // console.log("This is the url",image)
     return image;
 };


  return { uploadImage };
};
