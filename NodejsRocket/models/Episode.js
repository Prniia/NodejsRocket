const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const timastamps = require('mongoose-timestamp')

const EpisodeSchema = new Schema({
    course : { type : Schema.Types.ObjectId , ref : 'Course' },
    title : { type : String , required : true },
    body : { type : String , required : true },
    videoUrl : { type : String , required : true },
    number : { type : String , required : true },
    viewCount : { type : Number , default : 0},
    commentCount : { type : Number , default : 0}
});

EpisodeSchema.plugin(timestamps, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = mongoose.model('Episode' , EpisodeSchema)
