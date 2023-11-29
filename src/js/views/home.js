import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const handleInitialData = async () => {
		await actions.getPeople();
		await actions.getPlanets();
		await actions.getStarships();
	}

	const handleFetchDetails = async () => {
		actions.getPeopleDetails();
		actions.getPlanetsDetails();
		actions.getStarshipsDetails();
	}

	const handleAsyncCalls = async () => {
		await handleInitialData();
		await handleFetchDetails();
	}

	useEffect(() => {
		handleAsyncCalls();
	}, []);

	console.log(store);

	return (
		<div className="text-center mt-5">
			<h1>Hello Starwars!</h1>
			<div>
				<h2>People:</h2>
				{store.people.map((person) => (
					<div key={person.uid}>
						<p>{person.name}</p>
						{person.details && person.details.properties && (<><p>Person's Mass: {person.details.properties.mass}</p><p>Person's Height: {person.details.properties.height}</p><p>Person's Gender: {person.details.properties.gender}</p></>)}
					</div>
				))}
			</div>
			<div>
				<h2>Planets:</h2>
				{store.planets.map((planet) => (
					<div key={planet.uid}>
						<p>{planet.name}</p>
						{planet.details && planet.details.properties && (<p>Planet's diameter: {planet.details.properties.diameter}</p>)}
					</div>
				))}
			</div>
			<div>
				<h2>Starships:</h2>
				{store.starships.map((starship) => (
					<div key={starship.uid}>
						<p>{starship.name}</p>
						{starship.details && starship.details.properties && (<p>Starship's model: {starship.details.properties.model}</p>)}
					</div>
				))}
			</div>
		</div>
	);
};
