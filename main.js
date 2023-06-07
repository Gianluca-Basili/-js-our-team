const team = [
    {
        'name':'Wayne Barnett',
        'role':'Founder & CEO',
        'image':'wayne-barnett-founder-ceo.jpg',
    },
    {
        'name':'Angela Caroll',
        'role':'Chief Editor',
        'image':'Angela-caroll-chief-editor.jpg',
    },
    {
        'name':'Walter Gordon',
        'role':'Office Manager',
        'image':'walter-gordon-office-manager.jpg',
    },
    {
        'name':'Angela lopez',
        'role':'Social Media Manager',
        'image':'angela-lopez-social-media-manager.jpg',
    },
    {
        'name':'Scott Estrada',
        'role':'Developer',
        'image':'scott-estrada-developer.jpg',
    },
    {
        'name':'Barbara Ramos',
        'role':'Graphic Designer',
        'image':'barbara-ramos-graphic-designer.jpg',
    },
];

for(let i=0; i<team.length;i++){
    console.log(team[i].name);
    console.log(team[i].role);
    console.log(team[i].image);

}

const info = document.getElementById('info');

for(let i=0; i<team.length;i++){
    info.innerHTML +=team[i].name +'<br>';
    info.innerHTML +=team[i].role +'<br>';
    info.innerHTML +=team[i].image +'<br><br>';

}