import React from "react"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let productosIniciales = [
    {id:1, nombre:"Les Paul",categoria:"Guitarra", info:"Guitarra epica1"},
    {id:2, nombre:"Stratocaster", categoria : "Guitarra", info:"Guitarra epica2"},
    {id:3, nombre:"Stratocaster",categoria:"Guitarra", info:"Guitarra epica3"},
    {id:4, nombre:"Stratocaster", categoria : "Guitarra", info:"Guitarra epica4"},
    {id:5, nombre:"Stratocaster",categoria:"Guitarra", info:"Guitarra epica5"},
    {id:6, nombre:"Stratocaster", categoria : "Guitarra", info:"Guitarra epica6"},
    {id:7, nombre:"Stratocaster",categoria:"Guitarra", info:"Guitarra epica7"},
    {id:8, nombre:"Stratocaster", categoria : "Guitarra", info:"Guitarra epica8"},
    {id:9, nombre:"Stratocaster",categoria:"Guitarra", info:"Guitarra epica9"},
    {id:10, nombre:"Stratocaster", categoria : "Guitarra", info:"Guitarra epica10"}
]

const ItemDetailContainer = () => {

        const [item,setItem] = useState({})
        const {idProd} = useParams()
    
        console.log(idProd)
        console.log(item);


        useEffect(()=>{
           
            if(!idProd){
                console.log("no hay categoria");
            }
            else{
                console.log(idProd);
            }
    

            const getProduct = () => {
                return new Promise((res,rej) => {
                    const item = productosIniciales.find((prod) => prod.id === + idProd)
                    setTimeout(()=>{
                        res(item)
                    },1000)
                })
                
            }
    
            getProduct()                                                                    //Este then y chatch sirven para que funcione todo el setTimeout porque sino nunca se sabe si salió bien o mal
            .then((res)=>{
                setItem(res)
            })
            .catch((error)=>{
                console.log(error)
            })
        },[idProd])
    
        return (
            <>
                <div>
                <ItemDetail item = {item}/>
                </div>
            </>
            
        )
    }



export default ItemDetailContainer