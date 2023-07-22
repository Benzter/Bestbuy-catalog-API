import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private productSerive: ProductsService) { }
    @Get()
    getAllProducts(): object {
        return { name: this.productSerive.text }
    }
}
