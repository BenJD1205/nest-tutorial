import { MinLength, IsNotEmpty, IsNumber } from 'class-validator'

export class ProductDto{
    @IsNotEmpty({message:'The category must be not empty'})
    categoryId?:number;

    @MinLength(5, {message:'This field must be than 5 characters'})
    productName?:string;

    @IsNumber()
    price?:number;
}