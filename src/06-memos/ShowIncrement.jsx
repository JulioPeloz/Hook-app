import React from "react"

export const ShowIncrement = React.memo(({increment}) => {

    console.log("Solo me debo dibujar una vez!");

  return (
    <button
        className="btn btn-primary"
        onClick={() => {
            increment(5)
        }}>
        ShowIncrement
    </button>
  )
})
