


const fetchData = drinkName => {
    const url = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`);
    fetch(url)
    .then(response => response.json())
    .then(datas => loadDatas(datas.drinks))
}

fetchData('')


const loadDatas = allData =>{
    // console.log(allData);
    if(allData == null){    
        const bodyText = document.getElementById('no-drink');
        const noDisplay = document.createElement('div');
        noDisplay.innerHTML = `
            <p class='text-center'>Nothing Show Here</p>
        `;
        bodyText.appendChild(noDisplay)
    }

    const drinkContainer = document.getElementById('drink-wrapper');
    drinkContainer.textContent = '';
    dataToggler('none')
    allData?.forEach(singleData => {
        // console.log(singleData)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `       
            <div class="card">
                <img src="${singleData.strDrinkThumb}" class="card-img-top" alt="alt tag">
                <div class="card-body">
                <h5 class="card-title">${singleData.strDrink}</h5>
                <p class="card-text">${singleData.strInstructionsIT}</p>
                </div>
            </div>
        `;
        drinkContainer.appendChild(div);


    })
}


document.getElementById('search-btn').addEventListener('click', ()=>{
    const searchValue = document.getElementById('search-field');
    const searchText = searchValue.value;

    const bodyText = document.getElementById('no-drink');
    bodyText.textContent ='';
    const drinkContainer = document.getElementById('drink-wrapper');
    if(searchText == '' || !isNaN(searchText)){
        drinkContainer.textContent = '';
        const noDisplay = document.createElement('div');
        noDisplay.innerHTML = `
            <p class='text-center'>Nothing Show Here</p>
        `;
        bodyText.appendChild(noDisplay)
        // console.log(bodyText);

    }else{
        dataToggler('block');
        fetchData(searchText)
        searchValue.value = '';

    }
    // const drinkContainer = document.getElementById('drink-wrapper');
    // drinkContainer.textContent = '';

})


const dataToggler = displayProperty =>{
    const spinner = document.getElementById('spinner');
    spinner.style.display = displayProperty;
}
