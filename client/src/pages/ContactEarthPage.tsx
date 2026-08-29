import React, { useEffect, useState } from "react";
import ContactEarthGlobe from "../ContactEarthGlobe";
import { readPhoneContacts, PhoneContact } from "./PhonePage";
export default function ContactEarthPage() {
 const [contacts,setContacts]=useState<PhoneContact[]>([]); useEffect(()=>{const load=()=>setContacts(readPhoneContacts());load();window.addEventListener("storage",load);return()=>window.removeEventListener("storage",load)},[]);
 return <div style={{maxWidth:1200,margin:"0 auto",padding:28}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}><div><h1 style={{fontSize:36,margin:0}}>Contact Earth</h1><p style={{color:"#657068"}}>3D geographic view of addresses stored in Phone contacts.</p></div><button onClick={()=>{window.history.pushState({},"","/phone");window.dispatchEvent(new PopStateEvent("popstate"))}} style={{padding:"10px 14px",cursor:"pointer"}}>← Phone</button></div><ContactEarthGlobe contacts={contacts}/></div>;
}
