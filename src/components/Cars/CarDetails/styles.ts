import styled from 'styled-components';

export const CarDetailsModelInfo = styled.div`
	display: grid;
	grid-template-columns: 100px 2fr;
	grid-template-rows: 1fr;
	gap: 0;

	& img {
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 1;
		grid-row-end: 3;
		margin-left: 3rem;
		width: 4rem;
	}

	p {
		text-align: center;
		grid-column-start: 2;
		padding: 0 0.5rem 0.1rem 2rem;
	}
`;

export const CarDetailsModelColor = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	right: 0;
	position: fixed;
	transform: translate(-100px, 50px);

	& {
		text-transform: capitalize;
	}

	& p {
		padding: 0;
	}
`;

export const CarDetailsModelCarImage = styled.div`
	display: grid;
	grid-template-columns: 10px 1fr;

	.button-left {
		margin-top: 100px;
		margin-left: 100px;
	}

	& div {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;

		& img {
			min-width: 32vw;
			margin-bottom: 1rem;
		}
	}
`;

export const CarDetailsModelContainer = styled.div`
	max-height: 70%;
	display: flex;
	flex-direction: column;

	& ${CarDetailsModelInfo} {
		max-height: 20%;
	}

	@media (max-width: 985px) {
		margin: 0;

		${CarDetailsModelCarImage} {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr;

			& div,
			button {
				margin: 0;
			}
		}
	}
`;

export const CarDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: calc(100vh - 4.5rem);
	gap: 2.5rem;
	justify-content: space-around;
	background: transparent
		linear-gradient(
			125deg,
			${({ theme }) => theme.colors.white01},
			${({ theme }) => theme.colors.grey05}
		)
		0% 0% no-repeat;
	padding: 1rem 2rem;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@media (max-width: 1200px) {
		${CarDetailsModelInfo} {
			grid-template-columns: 50px 1fr;
			gap: 0 1rem;
		}

		${CarDetailsModelCarImage} {
			& div {
				& img {
					width: 25rem;
				}
			}
			.button-left {
				margin-top: 75px;
				margin-left: 75px;
			}
		}
	}

	@media (max-width: 1115px) {
		gap: 0;
	}

	@media (max-width: 1060px) {
		${CarDetailsModelContainer} {
			justify-content: space-between;
		}

		${CarDetailsModelCarImage} {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 10px;
			justify-items: center;
			gap: 1rem;

			& .button-left {
				grid-row-start: 2;
				margin-top: 0;
				margin-left: 0;
			}

			& button {
				height: 2rem;
				width: 7rem;

				& p {
					font-size: 0.7rem;
				}
			}

			& div {
				grid-row-start: 1;

				& img {
					width: 20rem;
				}
			}
		}

		${CarDetailsModelColor} {
			& :nth-child(1) {
				font-size: 2.5rem;
			}
		}
	}

	@media (max-width: 650px) {
		gap: 2rem;
		justify-content: space-between;

		${CarDetailsModelInfo} {
			height: 100%;

			& img,
			p {
				margin: 0;
				padding: 0;
			}
		}

		${CarDetailsModelCarImage} {
			& div {
				& img {
					width: 70%;
				}
			}
		}

		${CarDetailsModelContainer} {
			height: 100%;
			justify-content: space-around;
		}
	}

	@media (max-width: 450px) {
		${CarDetailsModelInfo} {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;

			& :nth-child(1) {
				width: 2.5rem;
			}

			& p {
				font-size: 1.5rem;
			}
 
			${CarDetailsModelColor} {
				position: relative;
				transform: none;
				
				& :nth-child(1) {
					font-size: 2rem;
				}

				& :nth-child(2) {
					font-size: 1rem;
				}
			}
		}

		${CarDetailsModelContainer} {
			justify-content: space-around;
		}
	}
`;
