import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    constructor(@InjectModel("Product") private readonly productModel: Model<Product>) { }
    text = "Dhanushka";

    async insertProduct(title: string, price: number, brand: string, imageUrl: string) {
        const newProduct = new this.productModel({ title, price, brand, imageUrl })

        const result = await newProduct.save();
        return result;
    }
}
