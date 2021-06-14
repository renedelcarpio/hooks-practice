import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	padding: 0.5rem 1rem;
	font-size: 2rem;
	font-weight: bold;
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.title};
	border: 2px solid;
	border-color: ${(props) => props.theme.border};
	border-radius: 5px;
	margin-bottom: 2rem;
`;

const ToggleButton = (props) => {
	const changeMode = () => {
		props.mode === 'light' ? props.setMode('dark') : props.setMode('light');
	};
	return (
		<Button onClick={changeMode}>
			{props.mode === 'dark' ? 'Ligth Mode' : 'Dark Mode'}
		</Button>
	);
};

export default ToggleButton;
