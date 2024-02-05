"use client"
import Link from "next/link";
 import { Globe } from "lucide-react";
 import { useState, useEffect} from "react";

 export default function UpdatePage() {
   const [data, setData] = useState([]);
   useEffect(() => {
     fetch('http://localhost:8000/updates')
       .then(response => response.json())
       .then(data => {
         setData(data);
       })
       .catch(error => {
         console.error('Error fetching data:', error);
       });
   }, []);
   const [lang, setLang] = useState<"en" | "kh" | "cn">("en");
   
   return (
     <div className="flex flex-col">
       {/* Updates contents */}
       {data.map((update:any, index:number) => (
         <div key={index} className="p-10 opacity-80 bg-[#ffffff] text-black h-25 flex flex-col justify-evenly m-5 rounded-lg">
           <h1 className="font-bold align-text-bottom">{update.version}</h1>
           <div>
             <br />
             Hotfixes: <br />
             {update.hotfixes.map((hotfix:any, index:number) => (
               <span key={index}>{hotfix}<br /></span>
             ))}
           </div>
         </div>
       ))}

     </div>
   );
 }