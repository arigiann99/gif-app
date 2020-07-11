import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([]);

    return (
        <>
            <h2>Gif-App</h2>
            <p> Busca tu Gif preferido!! </p>
            <AddCategory setCategories={ setCategories } />
            

            <ol>
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
            <footer> App web creada por Ariel-devs </footer>
        </>
    )
}
