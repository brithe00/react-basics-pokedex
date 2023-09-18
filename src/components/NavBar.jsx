const NavBar = ({ setPokemonIndex, pokemonList }) => {
	return (
		<>
			{pokemonList.map((pokemon, index) => (
				<button key={index} onClick={() => setPokemonIndex(index)}>
					{pokemon.name} - {index}
				</button>
			))}
		</>
	);
};

export default NavBar;
