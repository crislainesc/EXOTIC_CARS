import { Routes, Route } from 'react-router-dom';

import { Home, Details } from '@pages';

const RoutesContainer = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/details/:id/*' element={<Details />} />
		</Routes>
	);
};

export default RoutesContainer;
