const statement = document.querySelector("h3");
const addfriend = document.getElementById("addFriend");
let temp = 0
addfriend.addEventListener("click", function () {
    if (temp == 0) {

        statement.innerHTML = "Friends";
        statement.style.color = "green";
        addfriend.innerHTML="Remove";
        addfriend.style.color="black";
        addfriend.style.background="#ececec"
        temp=1;
    }
    else{
        statement.innerHTML = "Stranger";
        statement.style.color = "red";
        addfriend.style.color="white";
        addfriend.style.background="#1d6ffd"
        temp=0;
    }

});
