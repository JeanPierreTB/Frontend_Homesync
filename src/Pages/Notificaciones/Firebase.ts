import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyA-rSAP9R09bI6aQ7dVwcJZqlR_ULHxM2A",
  authDomain: "pushnotification-e77a3.firebaseapp.com",
  projectId: "pushnotification-e77a3",
  storageBucket: "pushnotification-e77a3.firebasestorage.app",
  messagingSenderId: "989024963143",
  appId: "1:989024963143:web:4a4879c2ddb3f5759c7f62",
  measurementId: "G-E4H23MBSBP"
};

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);


export const generateToken=async()=>{
    const permission=await Notification.requestPermission();
    console.log(permission);
    if(permission==="granted"){
        const token=await getToken(messaging,{
            vapidKey:"BGRG3QwiwOOfSoujfH_stip3DiB9aaSjgZlLZ21SkP-MSBIKDG9xctu0Xq9sh3c9e15KisvrOx4nd6qBvLUNOG0"
        });
    
        console.log(token);

    }
    
}
