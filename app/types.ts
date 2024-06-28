export interface AnimeAttributes {
    canonicalTitle: string;
    episodeCount: number | null;
    posterImage: {
      medium: string;
    };
    description: string;
    startDate: string;
  }
  
  export interface Anime {
    id: string;
    attributes: AnimeAttributes;
  }
  