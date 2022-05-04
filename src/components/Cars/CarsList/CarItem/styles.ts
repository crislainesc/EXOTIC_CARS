import styled from 'styled-components';

export const CarItemContainer = styled.div`
	width: 17.9rem;
	height: 13.9rem;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.white02};
	padding: 1rem;

	&:hover {
		background: transparent
			linear-gradient(
				45deg,
				${({ theme }) => theme.colors.gradient01} 0%,
				${({ theme }) => theme.colors.gradient02} 90%
			)
			0% 0% no-repeat;

		& a {
			display: block;
		}
	}
`;

export const CarItemInfo = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 10fr 1fr;
`;

export const CarItemImage = styled.div`
	width: 100%;
	height: 40%;

	& img {
		width: 100%;
		margin-top: 1.06rem;
	}
`;

export const CarItemPriceAndPeriod = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	padding-top: 1rem;

	& a {
		width: 75%;
		display: none;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.white01};
		padding-top: 0.7rem;
	}

	& div {
		display: flex;
		align-items: baseline;
		position: relative;

		::before {
			content: '$';
			position: static;
			transform: translate(-1px, -10px);
         color: ${({ theme }) => theme.colors.grey08};
			font-size: 0.8rem;
			font-weight: 700;
			height: 100%;
		}
	}
`;
