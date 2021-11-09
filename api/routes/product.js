const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{

    res.status(200).json({
            message:"Handling get request to products"
        })
});

router.post('/',(req,res,next)=>{

    const product={
        name:req.body.name,
        price:req.body.price
    }
    res.status(201).json({
            message:"Handling post request to products",
            createdProduct:product
        })
});

router.get('/:productId',(req,res,next)=>{
const Id=req.params.productId;
if(Id==='special')
{
    res.status(200).json({
            message:"You discover specialId", Id:Id
        });
    }
    else
    res.status(200).json({
        message:"You passed and Id"
    });
});

router.patch('/:productId',(req,res,next)=>{  
        res.status(200).json({
            message:"You Product Updated!"
        });
    });

router.delete('/:productId',(req,res,next)=>{  
        res.status(200).json({
            message:"You Product deleted!"
        });
    });
module.exports=router;