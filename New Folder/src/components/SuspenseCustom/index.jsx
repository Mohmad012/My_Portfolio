import { Suspense } from 'react'

import Square from './Square'

const SuspenseCustom = ({ children }) => {

  return(
  		<Suspense fallback={

	        <div className="wrapper">
	        	<Square ClassName='circle' />
	        	<Square ClassName='circle' />
	        	<Square ClassName='circle' />
	        	<Square ClassName='shadow' />
	        	<Square ClassName='shadow' />
	        	<Square ClassName='shadow' />
	            <span>Loading</span>
	        </div>
      	}>

      	{children}
      </Suspense>
   )
};

export default SuspenseCustom;
