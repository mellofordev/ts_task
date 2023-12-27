var productObject = {
    id: 1,
    name: 'myinventory',
    products: [{
            id: 1,
            name: 'product one',
            price: 100,
        },
        {
            id: 2,
            name: 'product two',
            price: 150
        },
        {
            id: 3,
            name: 'product three',
            price: 200,
        }
    ],
    getAllProducts: function () {
        productObject.products.map(function (i) {
            console.log(i.name, i.price);
        });
    },
    getProductsById: function (id) {
        var getName;
        productObject.products.map(function (i) {
            if (i.id == id) {
                getName = i.name;
            }
        });
        if (getName)
            return getName;
        else
            return 'product not found';
    }
};
productObject.getAllProducts();
console.log("---------");
var getProduct = productObject.getProductsById(3);
console.log("Product by id 3 is:", getProduct);
console.log("---------");
function calculateDiscount(productObject) {
    productObject.products.map(function (i) {
        i.discountPrice = (i.price * (1 - 0.12));
        console.log("Product name :", i.name, "Discount price :", i.discountPrice);
    });
}
calculateDiscount(productObject);
