const registerButton = document.querySelector(".account-button");

registerButton.onclick = () => {
    const accountInputs = document.querySelectorAll(".account-input");

    let user = {
        user_name: accountInputs[0].value,
        email: accountInputs[1].value,
        password: accountInputs[2].value,
        name: accountInputs[3].value
    }

    console.log(user);

    $.ajax({
        async: false,
        type: "post",
        url: "/api/account/register",
        contentType: "application/json",
        data: JSON.stringify(user),
        dataType: "json",
        success: (response, textStatus, request) => {
            console.log(response);
            const successURI = request.getResponseHeader("Location"); //키값
            location.replace(successURI + "?user_name=" + response.data); //response.data 안에 이메일값 들어있음
        },
        error: (error) => {
            console.log(error.responseJSON.data);
            loadErrorMessage(error.responseJSON.data);
        }
    });



}