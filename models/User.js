const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            validate: {
                validator: function(v) {
                    // TODO: have this line check match with email in the database (I think it is currently wrong)
                    return v === this.email;
                },
                message: props => `${props.value} is not a valid email!`
            },
            required: [true, 'User email required'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ]
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;