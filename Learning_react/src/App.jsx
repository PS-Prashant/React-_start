
import { useState } from 'react';
import Card from './component/Card'


   
function App() {

	let [ index, setIndex ] = useState(1);

	function clickButton() {
		setIndex( index + 1 )
	}

	let name = 'Prashant sharma 🤘';

	return (
		<>
			<div className="flex flex-col justify-center items-center p-4 min-h-screen">
				<h1 className="p-4">App component is work: { index }</h1>
				<button className="p-3 bg-red-200 rounded border-0 font-mono	 font-bold" onClick={clickButton}>click count: - {index}</button>
				<Card  nameRender={name} fieldText="My Name:- "/>
			</div>
		</>
	)
}

export default App
