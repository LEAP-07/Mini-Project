const brac_name = document.querySelector('.brac_name');
const no_links = document.querySelector('.no_links');
const links_name = document.getElementById('links_name');
const link_name = document.getElementById('link_name');
const link_title = document.getElementById('title');
const link_url = document.getElementById('link_url');
const preview = document.querySelector('.preview');

const btn1 = document.querySelector('.add_btn1');
const btn2 = document.querySelector('.add_btn2');


// function addCont() {

// }

btn1.addEventListener('click', () =>{
    console.log("clicked");
    // let nol = no_links.value;

    // const newDiv = document.createElement("div");
    // newDiv.classList.add('container');
    
    const brac_name = document.createElement("div");
    brac_name.classList.add('brac_name');
    brac_name.innerText = link_title.value;
    
    const links = document.createElement("div");
    links.classList.add('links');


    let a_link=`
    <a href="#" class="links_name" target="_blank"> facebook </a>   
    `;
    let link;
    // link.innerHTML = a_link;

    for (let i = 0; i < no_links.value; i++) {

        link = document.createElement("div");
        link.classList.add('link');
        link.insertAdjacentHTML('beforeend', a_link);
        links.appendChild(link);
    }

    preview.appendChild(brac_name);
    preview.appendChild(links);

    // preview.appendChild(newDiv);
})

//button to add link name and url and display it
btn2.addEventListener('click', () => {
    links_name.innerText = link_name.value;
    link_name.value = "";
    links_name.href = link_url.value;
    link_url.value = "";
});



