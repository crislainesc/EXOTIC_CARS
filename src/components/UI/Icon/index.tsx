import React from 'react';

import { IconContainer } from './styles';

const Icon = ({ iconSrc }: any): JSX.Element => {
	return (
		<IconContainer>
			<img src={iconSrc} />
		</IconContainer>
	);
};

export default Icon;
