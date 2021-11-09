const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{

    res.status(200).json({
            message:"Orders were fetched"
        })
});
router.get('/:OrderId',(req,res,next)=>{  
    res.status(200).json({
        message:"Order Details", OrderId:req.params.OrderId
    });
});
router.post('/',(req,res,next)=>{
    const order={
        productId:req.body.productId,
        quantity:req.body.quantity
    }
    res.status(201).json({
            message:"Order was created",
            OrderCreated:order
        })
});

router.get('/:OrderId',(req,res,next)=>{
const Id=req.params.OrderId;
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

router.patch('/:OrderId',(req,res,next)=>{  
        res.status(200).json({
            message:"You Product Updated!"
        });
    });

router.delete('/:OrderId',(req,res,next)=>{  
        res.status(200).json({
            message:"You Product deleted!"
        });
    });
module.exports=router;