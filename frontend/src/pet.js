class Pet{
    constructor(id, name, pet_type, user_id){
        this.id = id
        this.name = name
        this.pet_type = pet_type
        this.user_id = user_id
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