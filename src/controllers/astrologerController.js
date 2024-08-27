const Astrologer = require('../models/astrologer');

const createAstrologer = async (req, res) => {
    try {
        const astrologer = new Astrologer(req.body);
        await astrologer.save();
        res.status(201).json(astrologer);
    } catch (error) {
        res.status(500).json({ message: `Failed to create astrologer: ${error.message}` });
    }
};

const getAllAstrologers = async (req, res) => {
    try {
        const astrologers = await Astrologer.find();
        res.status(200).json(astrologers);
    } catch (error) {
        res.status(500).json({ message: `Failed to retrieve astrologers: ${error.message}` });
    }
};

const getAstrologerById = async (req, res) => {
    try {
        const astrologer = await Astrologer.findById(req.params.id);
        if (!astrologer) {
            return res.status(404).json({ message: 'Astrologer not found' });
        }
        res.status(200).json(astrologer);
    } catch (error) {
        res.status(500).json({ message: `Failed to retrieve astrologer: ${error.message}` });
    }
};

module.exports = {
    createAstrologer,
    getAllAstrologers,
    getAstrologerById,
};
