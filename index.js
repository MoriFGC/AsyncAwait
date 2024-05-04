// ASYNC/AWAIT
const url = 'https://jsonplaceholder.typicode.com/users';
const tabella = document.getElementById('tabella');
const select = document.getElementById('Select');
const search = document.getElementById('Search');


async function x() {
    try {
        let response = await fetch(url);
        let data = await response.json();
            
        return data
    } catch (error) {
        console.error('Error: ', error)
    }
}

// funzione per creare la tabella
function y(data) {
    data.forEach(utenti => {
        tabella.innerHTML += `<tr>
                              <th scope="row">${utenti.id}</th>
                              <td>${utenti.name}</td>
                              <td>${utenti.username}</td>
                              <td>${utenti.email}</td>
                            </tr>`;
        
    });
}

function z(data) {
    const selectValue = select.value;
    const searchValue = search.value.toLowerCase();
    return data.filter(utenti => utenti[selectValue].toLowerCase().includes(searchValue));
}

x().then((data) => {
    y(data);
    search.addEventListener('input', () => {
        const filteredUser = z(data);
        tabella.innerHTML= '';
        y(filteredUser);
    });
});
