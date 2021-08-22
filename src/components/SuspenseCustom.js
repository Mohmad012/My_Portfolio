import React, { Suspense } from 'react'


const SuspenseCustom = ({ children }) => {

  return(
  		<Suspense fallback={

	        <div className="wrapper">
	            <div className="circle"></div>
	            <div className="circle"></div>
	            <div className="circle"></div>
	            <div className="shadow"></div>
	            <div className="shadow"></div>
	            <div className="shadow"></div>
	            <span>Loading</span>
	        </div>
      	}>

      	{children}
      </Suspense>
   )
};

export default SuspenseCustom;
