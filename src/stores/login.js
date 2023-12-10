import axios from 'axios'

const login = {
    email: 'fianna@gmail.com',
    password: '123456'
}

const checkLogin = (email, password) => {

    axios.get('localhost:3000/user').then(() => {
        
    })
    // return new Promise(function (resolve, reject) {     
    //     if (login.email == email && login.password == password) {
    //         const data = {
    //             message : 'success',
    //             data: {
    //                 email: email,
    //                 token: 123456
    //             }
    //         }
    //       resolve(data);
    //     } else {
    //       reject(Error("wrong credentials"));
    //     }
    // });
}

export default checkLogin;