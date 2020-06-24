const from_input = document.querySelector("#id_from")
const to_input = document.querySelector("#id_to")
const source_input = document.querySelector("#id_source")
const destination_input = document.querySelector("#id_destination")
const weight_input = document.querySelector("#id_weight")
const dimensions_input = document.querySelector("#id_dimensions")
const contact_input = document.querySelector("#id_contact")

const validate = (val) => {

    console.log(from_input.value + " value ")
}

from_input.addEventListener("focusout", () => {
    if(! (from_input.value !== "")) {
        from_input.nextElementSibling.innerHTML = "* Required"
    } else {
        from_input.nextElementSibling.innerHTML = ""
    }
})

to_input.addEventListener("focusout", () => {
    if(! (to_input.value !== "")) {
        to_input.nextElementSibling.innerHTML = "* Required"
    } else {
        to_input.nextElementSibling.innerHTML = ""
    }
})

source_input.addEventListener("focusout", () => {
    if(! (source_input.value !== "")) {
        source_input.nextElementSibling.innerHTML = "* Required"
    } else {
        source_input.nextElementSibling.innerHTML = ""
    }
})

destination_input.addEventListener("focusout", () => {
    if(! (destination_input.value !== "")) {
        destination_input.nextElementSibling.innerHTML = "* Required"
    } else {
        destination_input.nextElementSibling.innerHTML = ""
    }
})

weight_input.addEventListener("focusout", () => {
    if (!( ( weight_input.value !== "") )){ // !isNaN(weight_input.value))) ){
        weight_input.nextElementSibling.innerHTML = "* Required"
    } else if (isNaN(weight_input.value) ){
        weight_input.nextElementSibling.innerHTML = "Number Required"
    } else if ( ( parseInt(weight_input.value) > 150 ) ) {
        weight_input.nextElementSibling.innerHTML = "Weight should be less than 150 pounds"
    } else {
        weight_input.nextElementSibling.innerHTML = ""
    }
})

dimensions_input.addEventListener("focusout", () => {
    if (!( (dimensions_input.value !== "") )) {// & (!isNaN(dimensions_input.value)))) {
        dimensions_input.nextElementSibling.innerHTML = "* Required"
    } else if (isNaN(dimensions_input.value)){
        dimensions_input.nextElementSibling.innerHTML = "Number Required"
    } else if ( (parseInt(dimensions_input.value) > 36)) {
        dimensions_input.nextElementSibling.innerHTML = "Dimension should not be more than 36 inches"
    } else {
        dimensions_input.nextElementSibling.innerHTML = ""
    }
}) 

contact_input.addEventListener("focusout", () => {
    if(! (contact_input.value !== "")) {
        contact_input.parentElement.nextElementSibling.innerHTML = "* Required"
    } else {
        contact_input.parentElement.nextElementSibling.innerHTML = ""
    }
})