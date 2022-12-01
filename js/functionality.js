const designOptions = ["option-1", "option-2"];

let design = "";

if (!localStorage.getItem("design")) {
    design = designOptions[0];
} else {
    design = localStorage.getItem("design");
}

document.querySelector("body").setAttribute("data-design", design);
document.querySelector("input[value='" + design + "']").setAttribute("checked", true);

function updateDesign() {
    let tempDesign = document.querySelector("input[name='theme']:checked").value;
    console.log("tempDesign: " + tempDesign);
    localStorage.setItem("design", tempDesign);
    document.querySelector("body").setAttribute("data-design", tempDesign);
}