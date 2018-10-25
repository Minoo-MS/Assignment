import { IProduct } from './iproduct';
export class Product implements IProduct {
    Id: number;
    Key: string;
    ArtikelCode: string;
    ColorCode: string;
    Description: string;
    Price: number;
    DeliveredIn: string;
    Q1: string;
    Size: number;
    Color: string;
}