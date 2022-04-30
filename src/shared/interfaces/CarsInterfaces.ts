export interface ICarsResponse {
	cars: ICar[];
}

export interface IPhoto {
	color: string;
	photo: string;
}

export interface ICar {
	id: number;
	model: string;
	brand: string;
	price: number;
	period: string;
	brand_logo: string;
	cover_photo: string;
	photos: IPhoto[];
}
