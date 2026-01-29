const persons = [
    {
        firstname : "max",
        lastname : "Müller",
        position : "CTO"
    },
    {
        firstname : "Martin",
        lastname : "Schwarz",
        position : "chef"
    },
    {
        firstname : "Peter",
        lastname : "Musterman",
        position : "developer"
    }
];

function createTable(persons) {
    const container = document.getElementById('container');
    const table = document.createElement('table');
    const tHead = document.createElement('tHead');
    tHead.innerHTML = '<tr><th>vorname</th><th>Namchname</th><th>Position</th></tr>';
    const tBody = document.createElement('tbody');
    for(let i = 0; i < persons.length; i++){
        const person = persons[i];
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
            ${person.firstname}
            </td>
            <td>
            ${person.lastname}
            </td>
            <td>
            ${person.position}
            </td>
            `;
            tBody.appendChild(tr);
    }
    table.appendChild(tHead);
    table.appendChild(tBody);
    container.appendChild(table);
}

document.addEventListener('DOMContentLoaded', (Event) =>{
    createTable(persons);
});