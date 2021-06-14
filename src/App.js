import './App.css';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import ToggleButton from './components/ToggleButton';
import Title from './components/Title';
import styled from 'styled-components';

const LightMode = {
	background: `${theme.lightBackground}`,
	border: `${theme.softgreen}`,
	title: `${theme.softGreen}`,
	info: `${theme.grey}`,
};

const DarkMode = {
	background: `${theme.darkBackground}`,
	border: `${theme.stronggreen}`,
	title: `${theme.strongGreen}`,
	info: `${theme.yellow}`,
};

const bgModes = {
	light: LightMode,
	dark: DarkMode,
};

const MainContainer = styled.div`
	background-color: ${(props) => props.theme.background};
`;

const CharactersContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Character = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 30rem;
	margin: 1rem;
	padding-bottom: 0.5rem;
	background-color: ${(props) => props.theme.background};
	border: 2px solid;
	border-color: ${(props) => props.theme.title};
	border-radius: 5px;
	box-shadow: 0.3rem 0.5rem 0.5rem #888888;
	font-size: 2.5rem;
	overflow: hidden;
`;

const Image = styled.img`
	border-radius: 5px 5px 0 0;
`;

const CharacterName = styled.h2`
	display: block;
	width: 100%;
	font-size: 2rem;
	color: ${(props) => props.theme.title};
`;

const CharacterInfo = styled.h2`
	display: block;
	width: 100%;
	font-size: 1.8rem;
	color: ${(props) => props.theme.info};
`;

function App() {
	const [mode, setMode] = useState('light');
	const [personajes, setPersonajes] = useState([]);

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character')
			.then((respuesta) => {
				return respuesta.json();
			})
			.then((datos) => {
				return setPersonajes(datos.results);
			});
	}, []);

	return (
		<ThemeProvider theme={bgModes[mode]}>
			<MainContainer>
				<Title />
				<ToggleButton mode={mode} setMode={setMode} />
				<CharactersContainer>
					{personajes.map((cuates) => (
						<Character key={cuates.id}>
							<Image src={cuates.image} />
							<CharacterName>{cuates.name}</CharacterName>
							<CharacterInfo>{cuates.status}</CharacterInfo>
							<CharacterInfo>{cuates.gender}</CharacterInfo>
							<CharacterInfo>{cuates.origin.name}</CharacterInfo>
							<CharacterInfo>{cuates.location.name}</CharacterInfo>
						</Character>
					))}
				</CharactersContainer>
			</MainContainer>
		</ThemeProvider>
	);
}

export default App;
