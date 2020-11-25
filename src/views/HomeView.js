import React, { useState, useEffect } from 'react'
import LoadingGIF from '../shared/images/pokemongif.gif'
import PokemonService from '../shared/api/service/PokemonService'
import { useDebounce } from '../hooks/useDebounce'

export const HomeView = () => {
	const [data, setData] = useState()
	const [search, setSearch] = useState('')
	const [loading, setLoading] = useState(true)
	const debouncedSearchTerm = useDebounce(search, 500)

	const fetchDataFromPokemonAPI = async () => {
		setLoading(true)
		try {
			const response = await PokemonService.searchForPokemon(search.toLowerCase())
			setData(response.data)
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	const displayDataWhenDoneLoading = () => {
		return <div>
			<hr />
			<br />
			<img src={data?.sprites?.front_default} alt={''} />
			<h1> name: {data?.name} </h1>
			<h1> weight: {data?.weight} lb</h1>
			<h1> height: {data?.height} lb</h1>
			<h1> abilities: {data?.moves?.length} total moves</h1>
		</div>
	}

	useEffect(() => {
		if (debouncedSearchTerm) {
			fetchDataFromPokemonAPI()
		}
	}, [debouncedSearchTerm])

	return (
		<div>
			<input onChange={(event) => setSearch(event.target.value)} />
			{loading
				? <img src={LoadingGIF} alt={'Error..'} />
				: displayDataWhenDoneLoading()}
		</div>
	)
}
