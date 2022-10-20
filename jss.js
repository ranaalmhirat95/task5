let titleName="Elzero",
descriptionContant ="Elzero web school",
dateCont ="25/10" ;
let a = `<div class="card">
<h3>Hello${titleName}</h3>
<p>${descriptionContant}</p>
<span>${dateCont}</span>
</div>
`;

// let b = document.write(`<div class="card">
// <h3>Hello ${titleName}</h3>
// <p>${descriptionContant}</p>
// <span>${dateCont}</span>
// </div>
// `);
// let c = document.write(`<div class="card">
// <h3>Hello ${titleName}</h3>
// <p>${descriptionContant}</p>
// <span>${dateCont}</span>
// </div>
// `);
// let d = document.write(`<div class="card">
// <h3>Hello ${titleName}</h3>
// <p>${descriptionContant}</p>
// <span>${dateCont}</span>
// </div>
// `);
 cp = a.repeat(4);
document.write(cp)



