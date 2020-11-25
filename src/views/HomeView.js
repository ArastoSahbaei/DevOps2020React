import React, { useState } from 'react'
import Axios from 'axios'

export const HomeView = () => {
	const [data, setData] = useState()
	const [search, setSearch] = useState('')
	const [loading, setLoading] = useState(true)

	const fetchDataFromPokemonAPI = async () => {
		setLoading(true)
		try {
			const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
			setData(response.data)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const displayDataWhenDoneLoading = () => {
		return <div>
			<hr />
			<br />
			<h1> name: {data?.name} </h1>
			<h1> weight: {data?.weight} lb</h1>
			<h1> height: {data?.height} lb</h1>
			<h1> abilities: {data?.moves.length} total moves</h1>
			<h1> type: {data?.types[0].type.name}</h1>
		</div>
	}

	return (
		<div>
			<h1>{search}</h1>
			<input onChange={(event) => setSearch(event.target.value)} />
			<button onClick={() => fetchDataFromPokemonAPI()}>Search for pokemon</button>
			{loading ? null : displayDataWhenDoneLoading()}
		</div>
	)
}
