import React, { useEffect } from 'react'

const Hero = ({heroname}) => {

    useEffect(() => {
        if(heroname === "wakwaw") {
            throw new Error("bad heroname")
        }
    })

  return (
    <div> {heroname} </div>
  )
}

export default Hero