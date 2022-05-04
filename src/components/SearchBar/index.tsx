import React from 'react';

import Button from '../UI/Buttons/Button';
import Icon from '../UI/Icon';

import searchIcon from '@assets/bx_bx-search.svg';
import locationIcon from '@assets/ph_map-pin-fill.svg';
import dateIcon from '@assets/ion_calendar-sharp.svg';

import { theme } from '@shared/styles';

import { SearchBarContainer, SearchForm } from './styles';

const SearchBar = (): JSX.Element => {
	return (
		<SearchBarContainer>
			<SearchForm>
				<label>
					<Icon iconSrc={locationIcon} />
					<input placeholder='North Carolina, NC 90025' />
				</label>
				<label>
					<Icon iconSrc={dateIcon} />
					<input defaultValue='2021-11-03' type='date' />
				</label>
				<label>
					<Icon iconSrc={dateIcon} />
					<input defaultValue='2021-12-12' type='date' />
				</label>
				<Button
					width={2}
					height={2}
					backgroundColor={theme.colors.white01}
					borderRadius={50}>
					<Icon iconSrc={searchIcon} />
				</Button>
			</SearchForm>
		</SearchBarContainer>
	);
};

export default SearchBar;
