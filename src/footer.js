import React from 'react'

const Footer = ({item}) => {

  const numItem = item.length
  const numPacked = item.filter((items) => items.packed).length
  const packedPercentage = Math.round((numPacked/numItem)*100);

  if(!numItem)
  {
    return(
      <p>Start adding Items in your list!</p>
    )
  }
  return (
    <div>
      <footer>
        { packedPercentage===100 ? "You packed Everthing! Ready to go!!" : `You have ${numItem} items on your list, and You already packed ${numPacked}(${packedPercentage}%)`}
      </footer>
    </div>
  )
}

export default Footer;