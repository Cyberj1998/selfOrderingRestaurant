import React from 'react'

const LoadingBar = () => {
  return (
    <div className="flex flex-row gap-2 absolute bottom-0 m-10">
      <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.7s]"></div>
      <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.7s]"></div>
    </div>
  )
}

export default LoadingBar
