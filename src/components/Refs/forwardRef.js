import React, { forwardRef } from 'react'

const forwardRefs = forwardRef((ref) => {
  return (
    <div>
        <button ref={ref}> Click Me too </button>
    </div>
  )
})

export default forwardRefs
