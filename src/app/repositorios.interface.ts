export interface Repositorios {
  id: number,
  full_name: string,
  description: string,
  html_url: string,
  owner: string,
}
export interface Attributes {
  canonicalTitle: string;
  synopsis: string;
  episodeCount: number;
  startDate: Date;
  endDate: Date;
  posterImage: PosterImage;
}

export interface PosterImage {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
}
