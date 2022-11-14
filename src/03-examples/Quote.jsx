import React from 'react'

export const Quote = ({author, quote}) => {
  return (
    <>
        <blockquote className='blockquote text-end'>
            <p className='mb-1'>{author}</p>
            <footer className='blockquote-footer'>{quote}</footer>
        </blockquote>
    </>
  )
}
