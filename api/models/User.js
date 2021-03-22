import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.method('comparePasswords', function (password) {
    return bcrypt.compare(password, this.password);
});


userSchema.pre('save', function (next) {

    if (!this.isModified('password')) {
        next();
        return;
    }

    bcrypt.genSalt(saltRounds, (error, salt) => {
        if (error) {
            next(error);
            return;
        }

        bcrypt.hash(this.password, salt, (error, hash) => {
            if (error) {
                next(error);
                return;
            }
            this.password = hash;
            next();
        });
    });
});

const User = new model('User', userSchema);


export default User;
