import { useState, useCallback } from "react"

function App() {

  const [ length, setLength ] = useState(8);
  const [ numberAlowed, setnumberAlowed ] = useState(false);
  const [ charAllowed, setcharAllowed ] = useState(false);
  const [ password, setpassword ] = useState("");

  const passwordGenerator = useCallback( () => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if ( charAllowed ) str += "!@#$%^&*()-_=+[{]}\|;:";
    if ( numberAlowed ) str += '0123456789';

    for ( let i = 0; i <= array.length; i++ ) {
      let char = Math.floor (Math.random() * str.length + 1);
      pass = str.charAt( char );
    }

    setpassword( pass );

  }, [ length, numberAlowed, charAllowed, setpassword ] )

  return (
    <>
	  <div className="w-full max-w-md mx-auto shadow-md text-orange-500 rounded-lg my-8 px-4 py-3 bg-gray-700">
		<h1 className="text-center text-white my-3">Password Generator</h1>
		<div className="flex shadow rounded-lg overflow-hidden mb-4">
			<input 
				type="text" 
				value={password}
				className="outline-none w-full py-1 px-3"
				placeholder="Password"
				readOnly
			/>
		</div>
	  </div>
    </>
  )
}

export default App
