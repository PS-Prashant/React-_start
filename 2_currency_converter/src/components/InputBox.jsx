
import { useId } from 'react';

function InputBox( { 
	label,
	amount,
	onAmountChange,
	onCurrencyChange,
	currencyOptions = [],
	selectCurrency = "usd",
	amountDisable = false,
	currencyDisable = false,
	className = ""


} ) {

	const amountInputId = useId();

    return (
        <>

			<div className={`bg-white p-3 rounded-lg text-sm flex mt-2 ${className}`}>
				<div className="w-1/2">
					<label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
					<input
						id={amountInputId}
						type="number" 
						className="outline-none w-full bg-transparent" placeholder="Amount" 
						disabled={amountDisable}
						value={amount}
						onChange={ (e) => onAmountChange && onAmountChange(Number( e.target.value )) }
					/>
				</div>
				<div className="w-1/2 flex flex-wrap justify-end text-right">

					<p className="text-black/40 mb-2 w-full">Currency Type</p>
					<select 
						className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
						disabled={currencyDisable}
						value={selectCurrency}
						onChange={ (e) => onCurrencyChange && onCurrencyChange( e.target.value ) }
					>

						{ currencyOptions.map( (currency) => (
							// remember the key in loop in REACT
							<option key={currency} value={currency}>
								{ currency }
							</option>

						) ) }

					</select>

				</div>
			</div>

        </>
    )
}

export default InputBox;