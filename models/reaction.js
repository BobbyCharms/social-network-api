const { Schema, model } = require('mongoose')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.Object(),
        },
        reactionBody: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

reactionSchema.virtual.("createdAt").get(function() {
    return (this.createdAt.toLocaleTimeString() + "on" + this.createdAt.toLocaleTimeString());
});

module.exports = reactionSchema;