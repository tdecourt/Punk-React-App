import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import '../Styles/Biere.css';

const Biere = (data) => {
	const params = useParams();
	const biere = data.bieres[params.id - 1];


	return (
		<div className='position-relative'>
			<NavLink to="/" className="btn btn-secondary position-absolute top-0 start-0">
				&lt; Liste des bières
			</NavLink>
			<div className="row flex-lg-row align-items-center g-5 px-4 pb-2">
				<div className="col-3">
					<img src={biere.image_url} id="beerImg" className="d-block mx-lg-auto img-fluid" alt="Bière" />
				</div>
				<div className="col-9">
					<h1 className="display-5 fw-bold lh-1 mb-3">{biere.name}</h1>
					<p>First brewed in {biere.first_brewed}</p>
					<p>Added by : <span className="text-muted fst-italic">{biere.contributed_by}</span></p>
					<p>{biere.tagline}</p>
					<p className="lead">{biere.description}</p>
					<h4>Ingédients</h4>
					<div className="d-flex">
						<div className="mx-4">
							<h5>Maltes</h5>
							<ul className="list-group list-group-flush">
								{
									biere.ingredients.malt
										.map((malt, index) =>
											< li className='list-group-item' key={index} > {malt.name} : {malt.amount.value} {malt.amount.unit}</li>
										)
								}
							</ul>
						</div>
						<div className="mx-4">
							<h5>Houblons</h5>
							<ul className="list-group list-group-flush">
								{
									biere.ingredients.hops
										.map((hops, index) =>
											<li className='list-group-item' key={index}>{hops.name} : {hops.amount.value} {hops.amount.unit}</li>
										)
								}
							</ul>
						</div>
						<div>
							<h5>Levure</h5>
							<p>{biere.ingredients.yeast}</p>
						</div>
					</div>
					<h4>Préparation</h4>
					<div className="d-flex">
						<div className="mx-4">
							<h5>Brassage</h5>
							<ul className="list-group list-group-flush">
								{
									biere.method.mash_temp
										.map((mash, index) =>
											<li className='list-group-item' key={index}> {(mash.duration) ? mash.duration + 'h à ' : ''}{mash.temp.value} degré {mash.temp.unit}</li>
										)
								}
							</ul>
						</div>
						<div className="mx-4">
							<h5>Fermentation</h5>
							<p>{biere.method.fermentation.temp.value} degré {biere.method.fermentation.temp.unit}</p>
						</div>
					</div>
					<h4>Autres Infos</h4>
					<div className="d-flex">
						<div className="mx-4">
							<h5>Infos Générales</h5>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">Volume : {biere.volume.value} {biere.volume.unit}</li>
								<li className="list-group-item">ABV : {biere.abv}°</li>
								<li className="list-group-item">IBU : {biere.ibu}</li>
								<li className="list-group-item">EBC : {biere.ebc}</li>
							</ul>
						</div>
						<div className="mx-4">
							<h5>Food Pairing</h5>
							<ul className="list-group list-group-flush">
								{
									biere.food_pairing.map((value, index) =>
										<li className='list-group-item' key={index}>{value}</li>
									)
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Biere;