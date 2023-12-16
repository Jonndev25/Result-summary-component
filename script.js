function getData() {
fetch('data.json')
    .then(response => response.json())
    .then(data => renderData(data))
    // .catch(error => console.log(error))
}
getData();

let result = document.querySelector('.scores');
function renderData(data) {
    console.log(data);
    data.forEach(element => {
        result.innerHTML += `
            <div style="background-color:${element.bgColor};" class="score">
            <div class="left">
                <img src="${element.icon}" alt="">
                <span style="color:${element.color};">${element.category}</span>
            </div>
            <div class="right">
                <p>${element.score} <span>/ 100</span></p>
            </div>
            </div>
        `
    });
}


