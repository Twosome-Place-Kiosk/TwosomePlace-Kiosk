const registerButton = document.querySelector(".account-button");

registerButton.onclick = () => {
    const accountInputs = document.querySelectorAll(".account-input");

    let user = {
        id: accountInputs[0].value,
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
        success: (response) => {
            alert("회원가입 요청 성공");
            console.log(response);
        },
        error: (error) => { 
            alert("회원가입 요청 실패");
            console.log(error.responseJSON);
        }
    });



}