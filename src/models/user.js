const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    assignedAstrologerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Astrologer', default: null },
});

UserSchema.methods.assignAstrologer = function (astrologerId) {
    this.assignedAstrologerId = astrologerId;
};


const User = mongoose.model('User', UserSchema);

module.exports = User;
