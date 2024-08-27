const mongoose = require('mongoose');

const astrologerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    maxFlow: { type: Number, default: 0 },
    currentFlow: { type: Number, default: 0 },
    isTopAstrologer: { type: Boolean, default: false },
    priority: { type: Number, default: 1 }, 
    isAvailable: { type: Boolean, default: true }, 
});

astrologerSchema.methods.canTakeMoreUsers = function () {
    return this.isAvailable && this.currentFlow < this.maxFlow;
};

astrologerSchema.methods.addUser = function () {
    this.currentFlow += 1;
    this.isAvailable = false; 
    return this.save();
};

astrologerSchema.methods.deallocateUser = function () {
    this.currentFlow -= 1;
    this.isAvailable = true; 
    return this.save();
};

const Astrologer = mongoose.model('Astrologer', astrologerSchema);

module.exports = Astrologer;
