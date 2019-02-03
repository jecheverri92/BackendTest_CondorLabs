const express = require('express');
const router = express.Router();
const Provider = require('../models/provider.model');


router.get('/providers', async(req,res)=>{
    const providers = await Provider.find((err,providersDb)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            })
        }

        res.status(201).json({
            ok:true,
            providers: providersDb
        })
    });
    
});

router.get('/provider/:id', async(req,res)=>{
    const {id} = req.params;

    const providerDb = await Provider.findById(id, (err,providerDb)=>{
        if(err) {
            return res.status(500).json({
                ok:false,
                err
            });
        }

        if(!providerDb) {
            return res.status(400).json({
                ok:false,
                err: {
                    message: "ID doesn't exist"
                }
            })
        }
        res.status(201).json({
            ok:true,
            provider: providerDb
        })


    });

});

router.post('/provider/add', async (req,res)=>{
    const provider= new Provider(req.body);
    await provider.save((err,providerDb)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            })
        }

        res.status(201).json({
            ok:true,
            msg: 'Porvider aggregated!',
            provider: providerDb
        })

    });
    
})

router.delete('/provider/delete/:id',async(req, res)=>{
    const {id} = req.params;
    await Provider.remove({_id:id},(err,providerDb)=>{
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        if(!providerDb) {
            return res.status(400).json({
                ok:false,
                err: {
                    message: "ID doesn't exist"
                }
            })
        }
        res.json({
            ok:true,
            msg: 'Priveder Deleted!!',
            provider:providerDb,
        })
    });
})

router.put('/provider/update/:id',async(req, res)=>{
    const {id} = req.params;
    await Provider.findByIdAndUpdate({_id:id}, req.body,(err, providerDb)=>{
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        if(!providerDb) {
            return res.status(400).json({
                ok:false,
                err: {
                    message: "ID doesn't exist"
                }
            })
        }
        res.json({
            ok:true,
            msg: 'Priveder Updated!!',
            provider:providerDb,
        })
    });
})


module.exports = router;