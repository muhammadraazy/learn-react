import {useRef} from 'react'

const Ref = () => {
    const buttonRef = useRef(null)

  return (
    <div>
        <button ref={buttonRef}> Click Me </button>
    </div>
  )
}

export default Ref