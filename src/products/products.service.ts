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

    async getAllProduct() {
        const products = await this.productModel.find().exec();
        return products.map(prod => ({
            id: prod.id,
            title: prod.title,
            price: prod.price,
            brand: prod.brand,
            imgUrl: prod.imageUrl,
        }))
    }

    async searchProduct(keyword: string) {
        const regex = new RegExp(keyword, 'i');
        const result = await this.productModel.find({ title: { $regex: regex } });
        return result.map(prod => ({
            id: prod.id,
            title: prod.title,
            price: prod.price,
            brand: prod.brand,
            imgUrl: prod.imageUrl
        }))
    }
}
