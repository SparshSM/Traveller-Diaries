const mongoose = require ('mongoose');
const {Schema} = mongoose;
const reqStr={
    type: String,
    required: true
};
const reqNum={
    type: Number,
    // required: true
};
const logEntry = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:reqStr,
    description:reqStr,
    comments:String,
    rating:{
        type: Number,
        min:0,
        max:5,
        default:5,
        required: true
    },
    latitude:{...reqNum,
    min:-90,max:90},
    longitude:{...reqNum,
        min:-180,max:180},
    visitedOn:{
        type: Date,
        required: true,
        default: Date.now
    },
},{
    timestamps:true,
});

const Log = mongoose.model ('Logs', logEntry);
module.exports= Log;