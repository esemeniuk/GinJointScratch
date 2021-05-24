import { Spirit } from './spirit';

export interface Acquisition {
    id: string;
    userID: string;
    spiritID: string;
    aroma: number;
    finish: number;
    overallEnjoyment: number;
    taste: number;
    visualAppeal: number;
    comments: string;
    createdAt: any;
    spirit: Spirit;
}
  