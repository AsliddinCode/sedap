import { useState, useEffect } from "react";
 
 function useFetchApiItem(path) {
   const [item, setItem] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
 
   useEffect(() => {
     fetch(`http://192.168.100.108:1337/api${path}`, {
       method: "GET",
     })
       .then((response) => response.json())
       .then((data) => {
         console.log(data.data);
         setItem(data.data);
         setIsLoading(false);
       })
       .catch((error) => {
         console.log(error);
         setIsLoading(false);
       });
   }, [path]);
 
   return [item, isLoading];
 }
 
 export default useFetchApiItem;