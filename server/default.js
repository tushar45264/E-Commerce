import { products } from "./constants/data.js";
import Product from "./model/productSchema.js";
const DefaultData = async()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Default data inserted successfully");
    } catch(error) {
        console.log("error",error.message)
    }
}

export default DefaultData;