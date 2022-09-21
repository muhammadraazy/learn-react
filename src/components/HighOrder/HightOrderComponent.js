import React from 'react'

const HightOrderComponent = (AnyCom) => {
  class NewComponent extends React.Component {
     render() {
        return (
            <AnyCom name="mohammed" />
        )
     }
  }

  return NewComponent
}

export default HightOrderComponent