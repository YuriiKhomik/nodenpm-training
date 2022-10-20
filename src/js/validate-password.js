import Joi from "joi"
console.log(Joi);

import shortid from "shortid";

const passSchema = Joi.string().min(3).max(12).alphanum()

export default function validatepassword(password) {
    return passSchema.validate(password);
};

export const addUser = name => {
    const user = {
        id: shortid.generate(),
        name,
    }

    console.log(user)
}