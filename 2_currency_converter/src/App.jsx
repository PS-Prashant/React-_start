import { useState } from 'react';
import { InputBox, useCurrencyInfo } from '.';

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo( from );
  const options = Object.keys( currencyInfo );

  const swap = () => {
	setFrom(to);
	setTo(from);
	setConvertedAmount(amount);
	setAmount(convertedAmount);
  }

  const convertCurrency = () => {
	setConvertedAmount( amount * currencyInfo[ to ] );
  }

  return (

	<div className="w-full h-screen relative">

		<div className="absolute inset-0 flex items-center justify-center">
			<div className="w-9/12 outline-none bg-gray-300 p-8 rounded-lg border-2 border-gray-600 shadow-lg shadow-blue-500/50 hover:shadow-indigo-500/40">

				<form onSubmit={(e) => {
					e.preventDefault();
					convertCurrency();
				}}>

					<div className='outline outline-1 outline-offset-2 outline-yellow-500 bg-yellow-500 mx-4 text-center rounded text-white text-lg relative'>
						<button onClick={swap}>Swap</button>
					</div>

					<InputBox 
						label="From"
						amount={amount}
						currencyOptions={options}
						selectCurrency={from}
						onCurrencyChange={ (currency) => setFrom(currency)}
						onAmountChange={ (amount) => setAmount(amount) }
					/>
					<InputBox 
						label="To"
						amount={convertedAmount}
						selectCurrency={to}
						currencyOptions={options}
						onCurrencyChange={(currency) => setTo(currency)}
						onAmountChange={ (amount) => setConvertedAmount(amount) }
						// amountDisable={true}
					/>

					<div className="outline outline-1 outline-offset-2 outline-blue-500 bg-blue-500 mx-4 my-3 py-2 text-center rounded text-white text-lg">
						<button>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
					</div>

				</form>

			</div>
		</div>

    </div>
  )
}

export default App
