const data = window.POKEMON.pokemon;
const container = document.getElementById("root");
const selectType = document.getElementById("select");

document.addEventListener('DOMContentLoaded', function() {  
    window.M.AutoInit();
  });

const showPokemon = (data) =>{
    let card= '';
    data.forEach(element => { 
        if (element.weaknesses[1] === undefined && element.type[1] === undefined){
            card = container.innerHTML += 
            `   <div class="col s12 m3 ">
                    <div class = "card">
                        <h5 class="flow-text">${element.name}</h5>
                        <p class="number">ID: ${element.num}</p>
                        <img class="responsive-img" src="${element.img}"/>
                        <div class="table">
                            <table class="responsive-table centered">
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Debilidades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${element.type[0]}</td>
                                        <td>${element.weaknesses[0]}</td>
                                    </tr>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                    <tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`;
        } else if (element.weaknesses[1]=== undefined && element.type[1] !== undefined){
            card = container.innerHTML += 
            `   <div class="col s12 m3 ">
                    <div class = "card">
                        <h5 class="flow-text">${element.name}</h5>
                        <p class="number">ID: ${element.num}</p>
                        <img class="responsive-img" src="${element.img}"/>
                        <div class="table">
                            <table class="responsive-table centered">
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Debilidades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${element.type[0]}</td>
                                        <td>${element.weaknesses[0]}</td>
                                    </tr>
                                    <td>${element.type[1]}</td>
                                    <td></td>
                                </tr>
                                    <tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`;
        } else if (element.weaknesses[1]!== undefined && element.type[1] === undefined){
            card = container.innerHTML += 
            `   <div class="col s12 m3 ">
                    <div class = "card">
                        <h5 class="flow-text">${element.name}</h5>
                        <p class="number">ID: ${element.num}</p>
                        <img class="responsive-img" src="${element.img}"/>
                        <div class="table">
                            <table class="responsive-table centered">
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Debilidades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${element.type[0]}</td>
                                        <td>${element.weaknesses[0]}</td>
                                    </tr>
                                    <td>-</td>
                                    <td>${element.weaknesses[1]}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`;
        } else {
            card = container.innerHTML += 
            `   <div class="col s12 m3 ">
                    <div class = "card">
                        <h5 class="flow-text">${element.name}</h5>
                        <p class="number">ID: ${element.num}</p>
                        <img class="responsive-img" src="${element.img}"/>
                        <div class="table">
                            <table class="responsive-table centered">
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Debilidades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${element.type[0]}</td>
                                        <td>${element.weaknesses[0]}</td>
                                    </tr>
                                    <td>${element.type[1]}</td>
                                    <td>${element.weaknesses[1]}</td>
                                </tr>
                                    <tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`;
        }
        });
    return card;
}

selectType.addEventListener("change", () => {
    let condition = selectType.value;
    let filterResult = window.pokemones.filterPokemon(data, condition);
    container.innerHTML = "";
    filterResult.forEach(element => {
        if (element.weaknesses[1] === undefined && element.type[1] === undefined){
        container.innerHTML += 
            `   <div class="col s12 m3 ">
                    <div class = "card">
                        <h5 class="flow-text">${element.name}</h5>
                        <p class="number">ID: ${element.num}</p>
                        <img class="responsive-img" src="${element.img}"/>
                        <div class="table">
                            <table class="responsive-table centered">
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Debilidades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${element.type[0]}</td>
                                        <td>${element.weaknesses[0]}</td>
                                    </tr>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                    <tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`;
        } else if (element.weaknesses[1]=== undefined && element.type[1] !== undefined){
            container.innerHTML += 
            `   <div class="col s12 m3 ">
                    <div class = "card">
                        <h5 class="flow-text">${element.name}</h5>
                        <p class="number">ID: ${element.num}</p>
                        <img class="responsive-img" src="${element.img}"/>
                        <div class="table">
                            <table class="responsive-table centered">
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Debilidades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${element.type[0]}</td>
                                        <td>${element.weaknesses[0]}</td>
                                    </tr>
                                    <td>${element.type[1]}</td>
                                    <td></td>
                                </tr>
                                    <tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`;
        } else if (element.weaknesses[1]!== undefined && element.type[1] === undefined){
            container.innerHTML += 
            `   <div class="col s12 m3 ">
                    <div class = "card">
                        <h5 class="flow-text">${element.name}</h5>
                        <p class="number">ID: ${element.num}</p>
                        <img class="responsive-img" src="${element.img}"/>
                        <div class="table">
                            <table class="responsive-table centered">
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Debilidades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${element.type[0]}</td>
                                        <td>${element.weaknesses[0]}</td>
                                    </tr>
                                    <td>-</td>
                                    <td>${element.weaknesses[1]}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`;
        } else {
            container.innerHTML += 
            `   <div class="col s12 m3 ">
                    <div class = "card">
                        <h5 class="flow-text">${element.name}</h5>
                        <p class="number">ID: ${element.num}</p>
                        <img class="responsive-img" src="${element.img}"/>
                        <div class="table">
                            <table class="responsive-table centered">
                                <thead>
                                    <tr>
                                        <th>Tipo</th>
                                        <th>Debilidades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${element.type[0]}</td>
                                        <td>${element.weaknesses[0]}</td>
                                    </tr>
                                    <td>${element.type[1]}</td>
                                    <td>${element.weaknesses[1]}</td>
                                </tr>
                                    <tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`;
        }
    })
});

document.getElementById("selectOrder").addEventListener("change", () =>{
    let sortOrder = document.getElementById("selectOrder").value;
    if (sortOrder === "az" || sortOrder ==="za") {
        let sortBy ="name";
        let orderResult = window.pokemones.orderPokemon(data, sortBy, sortOrder);
        container.innerHTML = "";
        orderResult.forEach(element=>{
            if (element.weaknesses[1] === undefined && element.type[1] === undefined){
                container.innerHTML += 
                    `   <div class="col s12 m3 ">
                            <div class = "card">
                                <h5 class="flow-text">${element.name}</h5>
                                <p class="number">ID: ${element.num}</p>
                                <img class="responsive-img" src="${element.img}"/>
                                <div class="table">
                                    <table class="responsive-table centered">
                                        <thead>
                                            <tr>
                                                <th>Tipo</th>
                                                <th>Debilidades</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${element.type[0]}</td>
                                                <td>${element.weaknesses[0]}</td>
                                            </tr>
                                            <td>-</td>
                                            <td>-</td>
                                        </tr>
                                            <tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
                } else if (element.weaknesses[1]=== undefined && element.type[1] !== undefined){
                    container.innerHTML += 
                    `   <div class="col s12 m3 ">
                            <div class = "card">
                                <h5 class="flow-text">${element.name}</h5>
                                <p class="number">ID: ${element.num}</p>
                                <img class="responsive-img" src="${element.img}"/>
                                <div class="table">
                                    <table class="responsive-table centered">
                                        <thead>
                                            <tr>
                                                <th>Tipo</th>
                                                <th>Debilidades</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${element.type[0]}</td>
                                                <td>${element.weaknesses[0]}</td>
                                            </tr>
                                            <td>${element.type[1]}</td>
                                            <td></td>
                                        </tr>
                                            <tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
                } else if (element.weaknesses[1]!== undefined && element.type[1] === undefined){
                    container.innerHTML += 
                    `   <div class="col s12 m3 ">
                            <div class = "card">
                                <h5 class="flow-text">${element.name}</h5>
                                <p class="number">ID: ${element.num}</p>
                                <img class="responsive-img" src="${element.img}"/>
                                <div class="table">
                                    <table class="responsive-table centered">
                                        <thead>
                                            <tr>
                                                <th>Tipo</th>
                                                <th>Debilidades</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${element.type[0]}</td>
                                                <td>${element.weaknesses[0]}</td>
                                            </tr>
                                            <td>-</td>
                                            <td>${element.weaknesses[1]}</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
                } else {
                    container.innerHTML += 
                    `   <div class="col s12 m3 ">
                            <div class = "card">
                                <h5 class="flow-text">${element.name}</h5>
                                <p class="number">ID: ${element.num}</p>
                                <img class="responsive-img" src="${element.img}"/>
                                <div class="table">
                                    <table class="responsive-table centered">
                                        <thead>
                                            <tr>
                                                <th>Tipo</th>
                                                <th>Debilidades</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${element.type[0]}</td>
                                                <td>${element.weaknesses[0]}</td>
                                            </tr>
                                            <td>${element.type[1]}</td>
                                            <td>${element.weaknesses[1]}</td>
                                        </tr>
                                            <tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
                }
        });
    }
    else if (sortOrder === "small-big" || sortOrder === "big-small"){
        let sortBy ="num";
        let orderResult = window.pokemones.orderPokemon(data, sortBy, sortOrder);
        container.innerHTML = "";
        orderResult.forEach(element=>{
            if (element.weaknesses[1] === undefined && element.type[1] === undefined){
                container.innerHTML += 
                    `   <div class="col s12 m3 ">
                            <div class = "card">
                                <h5 class="flow-text">${element.name}</h5>
                                <p class="number">ID: ${element.num}</p>
                                <img class="responsive-img" src="${element.img}"/>
                                <div class="table">
                                    <table class="responsive-table centered">
                                        <thead>
                                            <tr>
                                                <th>Tipo</th>
                                                <th>Debilidades</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${element.type[0]}</td>
                                                <td>${element.weaknesses[0]}</td>
                                            </tr>
                                            <td>-</td>
                                            <td>-</td>
                                        </tr>
                                            <tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
                } else if (element.weaknesses[1]=== undefined && element.type[1] !== undefined){
                    container.innerHTML += 
                    `   <div class="col s12 m3 ">
                            <div class = "card">
                                <h5 class="flow-text">${element.name}</h5>
                                <p class="number">ID: ${element.num}</p>
                                <img class="responsive-img" src="${element.img}"/>
                                <div class="table">
                                    <table class="responsive-table centered">
                                        <thead>
                                            <tr>
                                                <th>Tipo</th>
                                                <th>Debilidades</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${element.type[0]}</td>
                                                <td>${element.weaknesses[0]}</td>
                                            </tr>
                                            <td>${element.type[1]}</td>
                                            <td></td>
                                        </tr>
                                            <tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
                } else if (element.weaknesses[1]!== undefined && element.type[1] === undefined){
                    container.innerHTML += 
                    `   <div class="col s12 m3 ">
                            <div class = "card">
                                <h5 class="flow-text">${element.name}</h5>
                                <p class="number">ID: ${element.num}</p>
                                <img class="responsive-img" src="${element.img}"/>
                                <div class="table">
                                    <table class="responsive-table centered">
                                        <thead>
                                            <tr>
                                                <th>Tipo</th>
                                                <th>Debilidades</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${element.type[0]}</td>
                                                <td>${element.weaknesses[0]}</td>
                                            </tr>
                                            <td>-</td>
                                            <td>${element.weaknesses[1]}</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
                } else {
                    container.innerHTML += 
                    `   <div class="col s12 m3 ">
                            <div class = "card">
                                <h5 class="flow-text">${element.name}</h5>
                                <p class="number">ID: ${element.num}</p>
                                <img class="responsive-img" src="${element.img}"/>
                                <div class="table">
                                    <table class="responsive-table centered">
                                        <thead>
                                            <tr>
                                                <th>Tipo</th>
                                                <th>Debilidades</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${element.type[0]}</td>
                                                <td>${element.weaknesses[0]}</td>
                                            </tr>
                                            <td>${element.type[1]}</td>
                                            <td>${element.weaknesses[1]}</td>
                                        </tr>
                                            <tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
                }
        });
    }    
});

selectType.addEventListener("change", () => {
    document.getElementById("counterResult").innerHTML = "";
    let type = selectType.value;
    document.getElementById("counterResult").innerHTML = `
    <p>Hay ${window.pokemones.computeStats(data, type)} pokemones de tipo '${type}' en la región de Kanto </p>`;
  
  });
window.onload = showPokemon(data);