type Inventory ={
    readonly id:number,
    name:string,
    products:productList[],
    getAllProducts():void ,
    getProductsById(id:number):string
}

interface discountProduct  {
    discountPrice?:number
}
interface productList extends discountProduct{
    readonly id:number,
    name:string,
    price:number,
}


const productObject:Inventory = {
    id:1,
    name:'myinventory',
    products:[{
        id:1,
        name:'product one',
        price:100,
    },
    {
        id:2,
        name:'product two',
        price:150
    },
    {
        id:3,
        name:'product three',
        price:200,
    }
    ],
    getAllProducts:()=>{
        productObject.products.map((i)=>{
            console.log(i.name, i.price);
        })
    },
    getProductsById:(id:number)=>{
        let getName:string | undefined;
        productObject.products.map((i)=>{
            if(i.id==id){
                getName=i.name;
            }
        })
        if(getName)
            return getName
        else
            return 'product not found';
            
    }
}
productObject.getAllProducts();
console.log("---------");
const getProduct:string = productObject.getProductsById(3);
console.log("Product by id 3 is:",getProduct);
console.log("---------");
function calculateDiscount(productObject:Inventory){
    productObject.products.map((i)=>{
        i.discountPrice=(i.price*(1-0.12))
        console.log("Product name :",i.name,"Discount price :",i.discountPrice);
    })
}

calculateDiscount(productObject);