'use strict'
const userForm = new userForm();

userForm.loginFormCallback = function (data) {
    ApiConnector.login(data, response => {
        if (!response.success) {
            userForm.setLoginErrorMessage(response.error);
        }
        location.reload();
    });
};

userForm.registerFormCallback = function (data) {
    ApiConnector.register (data, response => {
        if(!response.succes) {
            userForm.setRegisterErrorMessage(response.error);
        }  
        location.reload();
    });
};