'use strict';

document.getElementById('getText').addEventListener('click', getPost);
function getPost() {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "__cfduid=dd54c544bdf51cba86b128070e35c7af01617780088");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch('https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e', requestOptions)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let output = '<h2>Player details</h2>';
            data.array.foreach((post, idx) => {
                output += `
        <div class = "card">
        <div class = "card-header" id="heading-${idx}">
        <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
      <div class="card-body">
        <ul id="list">
        <li class="first_row">${post.PFName}</li>
        <li>${post.PDName}</li>
        
        </ul>
        </div>
        </div>
        </div>
        </div>
        `;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch((err) => console.log(err));
}
getPost();
//search functionality
function search_player() {
    var a, i;
    var input = document.getElementById('searchbar');
    var filter = input.value.toUpperCase();
    // let x = document.getElementsByClassName('first_row');
    var ul = document.getElementById("list");
    var li = ul.getElementByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementByTagName("a")[0];
        let txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}