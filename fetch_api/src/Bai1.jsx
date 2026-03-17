import React, {useState, useEffect} from "react";

function Bai1(){
    const [data, setData] = useState([])
      const [count, setCount] = useState(0)
      const [loading, setLoading] = useState(true)
      var url = "https://jsonplaceholder.typicode.com/users"
    
      // var fetchdata = fetch(url);
      // var res = fetchdata.then((response) => {
      //   return response.json()
      // }).then((data) => {
      //   console.log(data)
      // })
    
      useEffect(() =>{
        async function fetchdata() {
          try {
            var res = await fetch(url)
            var data = await res.json()
            console.log(data)
            setData(data)
          } catch (err) {
            setError(err.message)
    
          }finally{
            setTimeout(() => {
            setLoading(true)
            }, 1000);
          }
        }
        fetchdata()
      },[])
    
    
      return (
        <ul>
          {
            data.map((item) => (
              <p key={item.id}>
                Name : 
                <span>{item.name}</span> - email: {item.email}
              </p>
            ))
          }
        </ul>
      )

}
export default Bai1