const search = document.getElementById('search');
const similar = document.getElementById('match-list');


//search the file

const searchfoods = async searchText => {
    const a = await fetch('../data/foods.json');
    const foods = await a.json();
    

    //found 
    let found = foods.filter(food => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return food.name.match(regex) || food.abbr.match(regex);
    });

    if (searchText.length === 0) {
        found = [];
        similar.innerHTML = '';

    }

    op(found);
  


};

const op = found => {
    if (found.length > 0) {
        const html = found.map(match =>
            `<div class="card card-body mb-3" style="background-color:black;height=20px;opacity:0.8">
         <h4 >${match.name} 
           <span class="text" style="color:deepskyblue">(${match.cuisine}) </span> </h4>
         
           </div>
          `).join('');

        similar.innerHTML = html;
    }
};
search.addEventListener('input', () => searchfoods
    (search.value));


