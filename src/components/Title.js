import React from 'react';
import styled from 'styled-components';

const MainTitle = styled.h1`
	color: ${(props) => props.theme.title};
	margin-bottom: 1rem;
	padding: 2rem;
	font-size: 3rem;
`;

const Title = () => {
	return <MainTitle>Práctica de Hooks y Styled Components</MainTitle>;
};

export default Title;
