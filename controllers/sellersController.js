const Seller = require('../models/seller');

exports.seller = async (req, res) => {
    try {
        const seller = await Seller.create(req.body);
        res.status(200).json(seller);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.sellers = async (req, res) => {
    try {
        const sellers = await Seller.find({});
        res.status(200).json(sellers);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};