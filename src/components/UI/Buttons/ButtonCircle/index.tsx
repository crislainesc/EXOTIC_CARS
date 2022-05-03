import React from 'react';

import Icon from '../../Icon';

import circleIcon from '@assets/circle_button.svg';

import { ButtonCircleContainer } from './styles';

const ButtonCircle = (): JSX.Element => {
	const goToTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<ButtonCircleContainer onClick={goToTopHandler}>
			<Icon iconSrc={circleIcon} />
		</ButtonCircleContainer>
	);
};

export default ButtonCircle;
