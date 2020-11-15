class Pet{
    constructor(id, name, breed, pet_type){
        this.id = id
        this.name = name
        this.breed = breed
        this.pet_type = pet_type
    }

    renderPet(){
        let select = document.getElementById("pet_id")
        let option = `${this.name}`
        let el = document.createElement("option");
        el.textContent = option;
        el.value = option;
        select.appendChild(el);
    }
  }

