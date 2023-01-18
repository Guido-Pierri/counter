// set initial count
let count = 0;

// select value and buttons
const valueEl = document.querySelector("#value");
const btnsEl = document.querySelectorAll(".btn");

btnsEl.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("reset")) {
            count = 0;
        }
        if (count > 0){
            valueEl.style.color = "green";
        } else if (count < 0) {
            valueEl.style.color = "red";
        }else if (count === 0){
            valueEl.style.color = "hsl(209, 61%, 16%)";
        }
        valueEl.textContent = count;



    });
});