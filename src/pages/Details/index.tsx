import { CarDetails, Header } from '@components';

import { useAppSelector } from '@hooks';

import { Container } from '@shared/styles';

const Details = (): JSX.Element => {
	const currentCar = useAppSelector((state) => state.cars.currentCar);
	
	return (
		<Container>
			<Header />
			<CarDetails
				currentCar={currentCar}
			/>
		</Container>
	);
};

export default Details;
