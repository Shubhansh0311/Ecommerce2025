import productService from "../services/product.service.js";

const createProducts = async (req, res) => {    
    try {
        // console.log("product data",req.body);
        
        let productData = req.body;
        let product = await productService.createProduct(productData);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message,test:"test" });
    }
}

const deleteProduct = async (req, res) => {   
    try {
        const productId = req.params.productId;
        const product = await productService.deleteProductById(productId);
        return res.status(200).json({mesage:"product deleted succcessfully",product});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateProduct= async (req, res) => {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const product = await productService.updateProductById(productId,productData);
        return res.status(200).json({message:"product updated",product});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const findProductsById = async (req, res) => {      
    try {
        const productId = req.params.productId;
        const product = await productService.findProductById(productId);
    //   console.log("product",product);
      
        
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const getAllProduct = async (req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);
        // console.log("products",products);
        
        return res.status(200).json({products:products});
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ message: error.message });
    }
}
const createMultipleProduct=async(req,res)=>{
    try{
        const productData=req.body;
        const products=await productService.createMultipleProducts(productData);
        return res.status(201).json({message:"products created successfully",products});
    }catch(error){
        return res.status(500).json({ message: error.message });
    }
}
export default { createProducts, deleteProduct, updateProduct, findProductsById, getAllProduct, createMultipleProduct };