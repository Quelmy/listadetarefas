const momgoose = require('mongoose')

const TodoSchema = new momgoose.Schema({
    task: String,
    done:{
        type: Boolean,
        default: false
    }
})

const TodoModel = momgoose.model("todos", TodoSchema)
module.exports = TodoModel