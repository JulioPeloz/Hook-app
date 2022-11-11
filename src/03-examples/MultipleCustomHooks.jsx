import React from 'react'
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const {data, isLoading, hasError} = useFetch('https://www.breakingbadapi.com/api/quotes/1');
    const {author, quote} = !!data && data[0]; //Si la data tiene un valor(!!data), entonces (&&) toma la data de la posicion cero (data[0])
    console.log({data, isLoading, hasError});

  return (
    <>
        <h1>Breaking Bad quotes</h1>
        <hr/>

        {
            isLoading 
                ?(
                    <div className='alert alert-info text-center'>Loading...</div>
                )
                :(
                    <blockquote className='blockquote text-end'>
                        <p className='mb-1'>{author}</p>
                        <footer className='blockquote-footer'>{quote}</footer>
                    </blockquote>
                )

        }

    </>   
  )
}
