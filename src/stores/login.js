import axios from 'axios'

const login = {
    "email": "fianna@gmail.com",
    "password": "123456"
}

const checkLogin = (email, password) => {

    axios.get('localhost:5173/login', {
        "email": email,
        "password": password
    }).then((e) => {
        console.log(e)
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