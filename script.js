const persone = [
    {
        "nome":"Wayne Barnett",
        "ruolo":"Founder & CEO",
        "img":"img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome":"Angela Caroll",
        "ruolo":"Chief Editor",
        "img":"img/angela-caroll-chief-editor.jpg"
    },

    {
        "nome":"Walter Gordon",
        "ruolo":"Office Manager",
        "img":"img/walter-gordon-office-manager.jpg"
    },

    {
        "nome":"Angela Lopez",
        "ruolo":"Social Media Manager",
        "img":"img/angela-lopez-social-media-manager.jpg"
    },

    {
        "nome":"Scott Estrada",
        "ruolo":"Developer",
        "img":"img/scott-estrada-developer.jpg"
    },

    {
        "nome":"Barbara Ramos",
        "ruolo":"Graphic Designer",
        "img":"img/barbara-ramos-graphic-designer.jpg"
    }
]
function mostraTeam(persone) {
    let container = document.getElementsByClassName("team-container")[0];
    let per = '';
    for (let i in persone) {
        per += 
        `<div class="team-card">
            <div class="card-image">
                <img src="${persone[i].img}" alt="${persone[i].nome}"/>
            </div>
            <div class="card-text">
                <h3>${persone[i].nome}</h3>
                <p>${persone[i].ruolo}</p>
            </div>
        </div>`
    }

    container.innerHTML = per;
}
mostraTeam(persone);

// let btn = document.getElementById("addMemberNumber");

// btn.addEventListener("click", function(persone) {
//     let nome = document.getElementById("name").value; 
//     let role = document.getElementById("role").value;
//     let image = document.getElementById("image").value;
//     const nuova = {
//         "nome": nome,
//         "ruolo":role,
//         "img":image
//     }
//     persone.push(nuova);
//     mostraTeam(persone);
// })