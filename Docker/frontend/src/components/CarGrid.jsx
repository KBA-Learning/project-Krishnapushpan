import React from 'react'
import CarCard from './CarCard'
import { useState,useEffect } from 'react'
const CarGrid = () => {
    const [car, setCars] = useState([]);
    useEffect(()=>{
        const fetchCars=async()=>{
           try{ const response = await fetch('/api/listofcar');
            const data = await response.json();
            setCars(data);
        }catch(error){
            console.error(error);
        }
        };
        fetchCars();
    },[]);
  return (
    <div className='grid  lg:grid-cols-3 gap-2 mx-5 my-10'>
    { car && car.length >0 ? (car.map ((car)=>(
        <CarCard key={car.carid}car={car}/>
    ))):(
       <div className='col-span-full text-center text-gray-500 h-[250px] '> <p className='p-24'>No Cars Found</p></div>
    )}
</div>
  )
}

export default CarGrid