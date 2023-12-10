const login = {
    email: 'fianna@gmail.com',
    password: '123456'
}

const checkLogin = (email, password) => {
    return new Promise(function (resolve, reject) {     
        if (login.email == email && login.password == password) {
            const data = {
                message : 'success',
                data: {
                    email: email,
                    token: 123456
                }
            }
          resolve(data);
        } else {
          reject(Error("wrong credentials"));
        }
    });
}

export default checkLogin;