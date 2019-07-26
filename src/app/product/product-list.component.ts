import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent
{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number =2;
    showImage: boolean = false;
    filteredProducts: IProduct[];
    _listFilter : string;
    get listFilter():string
    {
        return this._listFilter;
    }
    set listFilter(value: string)
    {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
    }
    products: IProduct[] =[
        {
            "productId":1,
            "productName":"Shampoo",
            "productReleaseDate":"12 July 2019",
            "productCode":"S32",
            "price": 200,
            "starRating": 4.3,
            "imageURL":"C://Users/rituraj/Downloads/camera.jpg"
        },
        {
            "productId":2,
            "productName":"Milk",
            "productReleaseDate":"21 July 2019",
            "productCode":"M52",
            "price": 500,
            "starRating": 4.7,
            "imageURL":""
        },
        {
            "productId":3,
            "productName":"Camera",
            "productReleaseDate":"17 July 2019",
            "productCode":"w43",
            "price": 1000,
            "starRating": 3.8,
            "imageURL":"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.tupperwarebrands.ph%2Fassets%2Fimages%2Fmediacenter-images%2F015330-6348-0003_rdax_891x427.jpg&imgrefurl=https%3A%2F%2Fwww.tupperwarebrands.ph%2Fproducts&docid=YMEQc-2A0txO7M&tbnid=iicJg581AHod6M%3A&vet=10ahUKEwjSrvqH-c_jAhUGv48KHfM3DjEQMwiwASgnMCc..i&w=891&h=427&bih=625&biw=1366&q=Products%20image&ved=0ahUKEwjSrvqH-c_jAhUGv48KHfM3DjEQMwiwASgnMCc&iact=mrc&uact=8"
        }
    ];

    constructor()
    {
        this.filteredProducts = this.products;
        this.listFilter = 'camera';
    }

    performFilter(filterBy: string): IProduct[]
    {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void 
    {
        this.showImage = !this.showImage;
    }
}