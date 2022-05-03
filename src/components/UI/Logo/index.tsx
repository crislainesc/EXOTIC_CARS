import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Text } from '@shared/styles';

import { LogoContainer } from './styles';

const Logo = (): JSX.Element => {
	const navigate = useNavigate();

	const goToHomeHandler = () => {
		navigate('/');
	};

	return (
		<LogoContainer onClick={goToHomeHandler}>
			<Text fontSize={1.5} fontWeight='600'>
				EXOTIC
			</Text>
			<Text fontSize={1} fontWeight='400'>
				CARS
			</Text>
		</LogoContainer>
	);
};

export default Logo;
