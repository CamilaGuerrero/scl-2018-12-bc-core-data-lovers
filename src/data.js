window.pokemones ={
filterPokemon: (data , condition) => {
    if (condition === "0") {
        return data; 
    }
    const filteredPokemons  = data.filter(element => {
        if (element.type[0] === condition) return element.type[0] === condition;
        else if (element.type[1] === condition) return element.type[1] === condition;
    });
    return filteredPokemons;
},
orderPokemon: (data, sortBy, sortOrder) => {
    if (sortBy === "name" && sortOrder === "az"){
        data.sort((prev, next)=> {
            if (prev.name > next.name) {
            return 1;
            }
            if (prev.name < next.name) {
                return -1;
            }
            return 0;
        });
    }
    if (sortBy === "name" && sortOrder === "za"){
        data.sort((prev, next)=> {
            if (prev.name < next.name) {
                return 1;
            }
            if (prev.name > next.name) {
                return -1;
            }
            return 0;
        });
    }
    if (sortBy === "num" && sortOrder === "small-big"){
        data.sort((prev, next)=> {
            if (prev.id > next.id) {
            return 1;
            }
            if (prev.id < next.id) {
                return -1;
            }
            return 0;
        });
    }
    if (sortBy === "num" && sortOrder === "big-small"){
        data.sort((prev, next)=> {
            if (prev.id < next.id) {
                return 1;
            }
            if (prev.id > next.id) {
            return -1;

        }
        else return 0;
    });
    return orderedPokemon;
};
            }
            return 0;
        });
    }
    return data;
 },
 computeStats: (data, type) =>{
    let counter = 0;
    data.forEach(element =>{
      if(element.type.indexOf(type) !== -1){
        counter++; 
      }
    })
    return counter; 
}
}
