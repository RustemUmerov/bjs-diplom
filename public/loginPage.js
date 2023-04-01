"use strict";

const userForm = new UserForm();

// функция для обработки ответа от сервера
function handleResponse(response) {
  if (response.success) {
    location.reload();
  } else {
    userForm.setLoginErrorMessage(response.error);
  }
}

// установка свойств loginFormCallback и registerFormCallback
userForm.loginFormCallback = function(data) {
  ApiConnector.login(data, handleResponse);
};

userForm.registerFormCallback = function(data) {
  ApiConnector.register(data, handleResponse);
};
