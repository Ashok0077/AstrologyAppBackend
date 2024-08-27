const Astrologer = require('../models/astrologer');
const User = require('../models/user');

const assignUserToAstrologer = async (req, res) => {
    try {
        const user = await User.findById(req.body.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const astrologers = await Astrologer.find({ isAvailable: true }).sort({ priority: -1 });

        if (astrologers.length === 0) {
            throw new Error('No astrologers available to take more users');
        }

        const selectedAstrologer = astrologers[0];
        await selectedAstrologer.addUser();

        user.assignAstrologer(selectedAstrologer._id);
        await user.save();

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: `Failed to assign user: ${error.message}` });
    }
};

const deallocateAstrologer = async (req, res) => {
    try {

        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        
        const astrologer = await Astrologer.findById(user.assignedAstrologerId);
        if (!astrologer) {
            return res.status(404).json({ message: 'Assigned astrologer not found' });
        }

        
        astrologer.isAvailable = true;
        await astrologer.save();

        
        user.assignedAstrologerId = null;
        await user.save();

        res.status(200).json({ message: 'Astrologer deallocated successfully, user updated' });
    } catch (error) {
        res.status(500).json({ message: `Failed to deallocate astrologer: ${error.message}` });
    }
};


module.exports = {
    assignUserToAstrologer,
    deallocateAstrologer,
};
