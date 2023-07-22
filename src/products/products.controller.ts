import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

    @Get(":keyword")
    async getSearchProduct(@Param("keyword") keyword: string) {
        const searchedProducts = await this.productSerive.searchProduct(keyword);
        return searchedProducts;
    }
}
