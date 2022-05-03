import styled from 'styled-components';

export const CarsListContainer = styled.section`
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	padding: 3vh 10vh;
	align-items: center;
	justify-items: center;
	gap: 2rem 1.5rem;

	@media (max-width: 1115px) {
		grid-template-columns: 1fr 1fr 1fr;
		margin-top: 1rem;
		padding: 0 10vh 5vh;
	}

	@media (max-width: 950px) {
		grid-template-columns: 1fr 1fr;
		margin-top: 1rem;
	}

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		margin-top: 1rem;
	}

	@media (max-width: 438px) {
		grid-template-columns: 100%;
		margin-top: 1rem;
	}
`;
