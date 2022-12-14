import React, { useState } from 'react';
import "../Styles/Bieres.css"
import BiereCard from '../components/BiereCard';

const Bieres = data => {
	const [nbBieres, setNbBieres] = useState(36);
	const [selectedBeerType, setSelectedBeerType] = useState([]);
	const typesBieres = [
		{ nom: "Blanche", min: 0, max: 8 },
		{ nom: "Blonde", min: 9, max: 20 },
		{ nom: "Ambre", min: 21, max: 45 },
		{ nom: "Brune", min: 46, max: 140 }
	];

	const typeIsSelected = ebc => {
		if (selectedBeerType.length === 0) return true;
		if (ebc === null) return false;
		let isSelected = false;
		selectedBeerType.forEach(beerType => {
			if (ebc >= beerType.min && ebc <= beerType.max) return isSelected = true;
		});
		return isSelected;
	};

	const isSelected = type => {
		let res = false;
		console.log(selectedBeerType);
		for (const beerType of selectedBeerType) {
			console.log(beerType, type);
			if (beerType.nom === type.nom)
				res = true;
		}
		return res;
	}

	return (
		<div>
			<form className="container d-flex justify-content-evenly p-2 mb-2">
				<input
					type="range"
					className="form-range w-25 my-auto"
					min="1"
					max={
						data.bieres
							.filter(biere => (typeIsSelected(biere.ebc)) ? biere : null)
							.length
					}
					defaultValue={nbBieres}
					onChange={evt => setNbBieres(evt.target.value)}
				/>
				{
					typesBieres.map((type, index) =>
						<div key={index} className='biere-type'>
							<input
								type="checkbox"
								className="btn-check"
								id={type.nom}
								onChange={evt => {
									let res = [];
									let wasInside = false;
									for (let i = 0; i < selectedBeerType.length; i++) {
										if (selectedBeerType[i].nom !== type.nom)
											res.push(selectedBeerType[i]);
										else wasInside = true;
									}
									if (!wasInside) res.push(type);
									setSelectedBeerType(res);
								}}
							/>
							<label
								className={(isSelected(type)) ? "btn btn-success m-0" : "btn btn-primary m-0"}
								htmlFor={type.nom}
							>{type.nom}</label>
						</div>
					)
				}
			</form>
			<p className="text-end text-muted mx-5 border-bottom">{
				data.bieres
					.filter(biere => (typeIsSelected(biere.ebc)) ? biere : null)
					.slice(0, nbBieres)
					.length
			} showed result(s)</p>
			<div className="d-flex justify-content-evenly flex-wrap">
				{
					data.bieres
						.filter(biere => (typeIsSelected(biere.ebc)) ? biere : null)
						.slice(0, nbBieres)
						.map(biere => <BiereCard key={biere.id} biere={biere} />)
				}
			</div>
		</div>
	);
};

export default Bieres;