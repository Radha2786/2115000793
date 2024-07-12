import React , {useEffect, useCallback, useState} from 'react'
import axios from 'axios'

// import numbers from "../components/GetNumbers/Numbers"

const Home = () => {

    const ApiCallforEven = ()=>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzgwOTcwLCJpYXQiOjE3MjA3ODA2NzAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImYyYThkMWE1LTdjNzMtNGM1My05NTkyLTZhMzJhYjA0MThmNiIsInN1YiI6ImhhcnNoLmJoYXJ0aV9jczIxQGdsYS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6IkdMQSBVTklWRVJTSVRZIiwiY2xpZW50SUQiOiJmMmE4ZDFhNS03YzczLTRjNTMtOTU5Mi02YTMyYWIwNDE4ZjYiLCJjbGllbnRTZWNyZXQiOiJMdURLbEZodUVOZGhIWlVwIiwib3duZXJOYW1lIjoiSGFyc2ggUHJha2FzaCBCaGFydGkiLCJvd25lckVtYWlsIjoiaGFyc2guYmhhcnRpX2NzMjFAZ2xhLmFjLmluIiwicm9sbE5vIjoiMjExNTAwMDQ0NCJ9.PvzEvkhBOG2x9nMTX_z0Uq0-vgQexWEymQNdIW0ayEk";
        axios.get("http://20.244.56.144/test/fibo", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((response)=>{
            console.log(response);
            console.log(response.data.numbers);
            setEvenNumbers(response.data.numbers);
        }).catch((error)=>{
            console.log(error);
        })
    }
    
    const ApiCallforFibbo = () =>{
        const token = "YOUR_BEARER_TOKEN_HERE";
        axios.get("http://20.244.56.144/test/fibo", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((response)=>{
            setFibboNumbers(response.data.numbers);
        }).catch((error)=>{
            console.log(error);
        })
    }
    
    const ApiCallforPrime = () =>{
        const token = "YOUR_BEARER_TOKEN_HERE";
        axios.get("http://20.244.56.144/test/fibo", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((response)=>{
            setPrimeNumbers(response.data.numbers);
            console.log(response.data.numbers);
        }).catch((error)=>{
            console.log(error);
        })
    }
    const ApiCallforRandom = () =>{
        const token = "YOUR_BEARER_TOKEN_HERE";
        axios.get("http://20.244.56.144/test/fibo", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((response)=>{
            setRandomNumbers(response.data.numbers);
            console.log(response.data.numbers);
        }).catch((error)=>{
            console.log(error);
        })
    }
    
const [evenNumbers, setEvenNumbers] = useState([]);
const [primenumbers, setPrimeNumbers] = useState([]);
const [fibonumbers, setFibboNumbers] = useState([]);
const [randomnumbers, setRandomNumbers] = useState([]);
  return (
    <div className='flex gap-5 flex-col'>
      <h1 className='text-white text-3xl content-center ml-10 place-content-center'>
       Get Numbers
       </h1>
       <div className='flex gap-3'>
       <button className='' onClick={ApiCallforEven}>GetEvenNumbers</button>
       <button onClick={ApiCallforRandom}>GetRandomNumbers</button>
       <button onClick={ApiCallforFibbo}>GetFibboNumbers</button>
       <button onClick={ApiCallforPrime}>GetPrimeNumbers</button>
       </div>

       {evenNumbers && evenNumbers.map((number, index)=>{
              return <div key={index}>{number}</div>
       })}
         {primenumbers && primenumbers.map((number, index)=>{
                  return <card>
                     <div key={index}>{number}</div>
                  </card>
                 
                  
         })}
            {fibonumbers && fibonumbers.map((number, index)=>{
                    return <div key={index}>{number}</div>
            })}
                {randomnumbers && randomnumbers.map((number, index)=>{
                         return <div key={index}>{number}</div>
                })}

      
    </div>
  )
}

export default Home
