const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            // TODO: getter method to format timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [{
            ref: 'reaction'
        }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        // TODO: is this id: false needed?
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;