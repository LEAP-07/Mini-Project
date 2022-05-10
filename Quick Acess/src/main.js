
const modelContent = document.querySelector(".model_content")
const addBtn = document.getElementById("add_btn");
addBtn.addEventListener('click', addCont);

function addCont() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('container');
    
    const brac_name = document.createElement("div");
    brac_name.classList.add('brac_name');
    brac_name.innerText = "Web Dev";
    
    const links = document.createElement("div");
    links.classList.add('links');


    let a_link=`
    <a href="#!" class="link_name" target="_blank"> facebook </a>   
    `;
    let link;
    // link.innerHTML = a_link;

    for (let i = 0; i < 4; i++) {

        link = document.createElement("div");
        link.classList.add('link');
        link.insertAdjacentHTML('beforeend', a_link);

        links.appendChild(link);
    }

    newDiv.appendChild(brac_name);
    newDiv.appendChild(links);

    modelContent.appendChild(newDiv);
}
