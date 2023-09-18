const NavBar = ({ increment, decrement, pokemonIndex, pokemonList }) => {
	return (
		<>
			{pokemonIndex > 0 && <button onClick={decrement}>Précédent</button>}

			{pokemonIndex < pokemonList.length - 1 && (
				<button onClick={increment}>Suivant</button>
			)}
		</>
	);
};

export default NavBar;
