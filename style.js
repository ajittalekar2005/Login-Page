var left = document.querySelector(".left");

var sign_up = document.querySelector("#signup-link");

var main = document.querySelector(".main");

var email = document.getElementById("email");

var loginCon = document.querySelector(".login_con");

var h1 = document.querySelector(".h1");


let div = document.createElement("div");
div.setAttribute("class", "input_group");         ///<------ Input group created

let userName = document.createElement("input");
userName.setAttribute("type", "text");
userName.setAttribute("id", "text");                  //<----- User name created
userName.placeholder = "";
userName.required = "true";

div.appendChild(userName);                          //<----- add under the input_group



let label = document.createElement("label");
label.setAttribute("for", "text");
label.setAttribute("class", "label");
label.innerHTML = "User name";

div.appendChild(label);                                 //<----- add under the input_group

var form = document.getElementById("form");
var before = document.getElementById("before");

var login = document.querySelector(".login");

var right = document.querySelector(".right");
var login_in = document.querySelector("#signup-link");
console.log(login_in);

sign_up.addEventListener("click", function () {

    main.style.justifyContent = "end";
    left.style.clipPath = "polygon(54% 0%,100% 0%,100% 100%,0% 100%)";
    left.style.justifyContent = "end";
    loginCon.style.marginRight = "45px";
    left.style.transform = "perspective(1000px) rotateY(-360deg)";
    form.insertBefore(div, before);
    login.innerHTML = "Sign Up";
    login_in.innerHTML = "Sign In";
    h1.innerHTML = "Sign Up";
    right.style.left = "15%";
    right.style.transform = "perspective(1000px) rotateY(-360deg)";
})




var rect = document.querySelector(".main");

rect.addEventListener("mousemove", function (details) {

    var rectinfo = rect.getBoundingClientRect();
    var mousePosition = details.clientX - rectinfo.left;
    var heposition = details.clientY - rectinfo.top;

    var colorred1 = gsap.utils.mapRange(0, rectinfo.width / 2, 255, 0, mousePosition);
    var greencolor = gsap.utils.mapRange(0, rectinfo.height / 2, 255, 0, heposition);
    var colorblue = gsap.utils.mapRange(rectinfo.width / 2, rectinfo.width, 0, 255, mousePosition);

    if (mousePosition < rectinfo.width / 2) {
        gsap.to(rect, {
            background: `linear-gradient(
    135deg,
    rgb(${colorred1}, ${greencolor}, ${colorblue}),
    rgb(${greencolor}, ${colorred1}, ${colorblue}),
    rgb(${colorred1}, ${colorblue}, ${greencolor})
  )`,
        });

    }
    else if (heposition < rectinfo.height / 2) {
        gsap.to(rect, {
            background: `linear-gradient(
   135deg,
   rgb(${colorred1}, ${greencolor}, ${colorblue}),
   rgb(${greencolor}, ${colorred1}, ${colorblue}),
   rgb(${colorred1}, ${colorblue}, ${greencolor})
 )`,
        });
    }
    else {
        gsap.to(rect, {
            background: `linear-gradient(
    135deg,
    rgb(${colorred1}, ${greencolor}, ${colorblue}),
    rgb(${greencolor}, ${colorred1}, ${colorblue}),
    rgb(${colorblue}, ${colorred1}, ${greencolor})
  )`,
        });


    }




})
