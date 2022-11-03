import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import ibanez from "./img/ibanez.jpg"


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

const ItemListContainers = () => {

    const [items,setItems] = useState([])
    const {category} = useParams()

    useEffect(()=>{
       
        if(!category){
            console.log("no hay categoria");
        }
        else{
            console.log(category);
        }


        let simulacionPedido = new Promise((res)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })

        simulacionPedido                            //Este then y chatch sirven para que funcione todo el setTimeout porque sino nunca se sabe si salió bien o mal
        .then((respuesta)=>{
            setItems(respuesta)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[category])

    return (
        <>
            <div>
            {items.length == 0 ? <h1>Cargando...</h1> : <ItemList items = {items}/>}
            </div>
        </>
        
    )
}

export default ItemListContainers;