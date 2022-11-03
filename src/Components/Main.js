import React from 'react'
import { Routes , Route } from "react-router-dom"
import ItemListContainers from "./ItemListContainers"
import ItemDetailContainer from './ItemDetailContainer'


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainers/>}/>
                {/* <Route path="/productos/:category" element={<ItemListContainers/>}/>     */}
                <Route path="/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
    )
}

export default Main