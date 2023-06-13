const {createUserDB, getUserByEmailDB} = require('../repository/user.repository');
const bcrypt = require('bcrypt');


async function createUser(name, surname, email, pwd){
    const foundUser = await getUserByEmailDB(email);
    if (foundUser.length) throw new Error('this user already exists');

    const salt = 3;
    const hashPassword = await bcrypt.hash(pwd, salt);

    const data = await createUserDB(name, surname, email, hashPassword);
    if(!data.length) throw new Error('user is not found');
    return data;
};




module.exports = {createUser};