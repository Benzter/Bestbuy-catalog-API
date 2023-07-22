import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private productSerive: ProductsService) { }

    @Post()
    async addProduct(@Body("title") prodTitle: string,
        @Body("price") price: number,
        @Body("brand") brand: string,
        @Body("image") imageUrl: string,
    ) {
        return await this.productSerive.insertProduct(prodTitle, price, brand, imageUrl);
    }

    @Get()
    async getAllProducts() {
        const products = await this.productSerive.getAllProduct()
        return products;
    }
}
