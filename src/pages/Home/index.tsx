import { CarsList, Header, ButtonCircle } from '@components';

import { useAppSelector } from '@hooks';

import { Container } from '@shared/styles';

const Home = (): JSX.Element => {
	const cars = useAppSelector((state) => state.cars.list);

	return (
		<Container>
			<Header />
			<CarsList cars={cars} />
			<ButtonCircle />
		</Container>
	);
};

export default Home;
