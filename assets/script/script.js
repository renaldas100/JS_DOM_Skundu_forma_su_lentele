
console.log('veikia')


const form = document.querySelector('form');
// console.log(form);

const first = form.firstName;
// console.log(first);
// console.log(first.value);

const second = form.secondName;
// console.log(second);
// console.log(second.value);

const teleph = form.telephone;
// console.log(teleph);
// console.log(teleph.value);

const Bdate = form.gdata;
console.log(Bdate);
console.log(Bdate.value);


const text = form.notes;
console.log(text);
console.log(text.value);

const but = document.querySelector('.button');
console.log(but);
// console.log(but.value);


form.addEventListener('keyup', duomTikrinimas);


const error1 = document.querySelector('.error1');
const error2 = document.querySelector('.error2');
const error3 = document.querySelector('.error3');
const error4 = document.querySelector('.error4');

function duomTikrinimas() {
    let i = 0;
    let ia = 0;
    let ib = 0;
    let ic = 0;
    let id = 0;
    const vardas = first.value.length;
    const pavarde = second.value.length;
    const telefonas = teleph.value;
    const badNews = text.value.length;

    
        if (vardas >= 3 && vardas <= 20 && vardas != 0){
            console.log(`Vardas teisingas`);
            ia = 1;
            error1.innerHTML ='';
        } 
        if (vardas > 0 && vardas < 3 || vardas > 20){
            console.log(`Vardas turi būti ilgesnis nei 3 raidės, trumpesnis nei 20 raidžių`)
            error1.innerHTML = '*Vardas turi būti ilgesnis nei 3 raidės, trumpesnis nei 20 raidžių';
        }
        if (vardas == 0){
            console.log(`Vardas teisingas`);
            error1.innerHTML ='*Užpildyti būtina';
        } 


        if (pavarde >= 3 && pavarde <= 20 || pavarde == 0) {
            console.log(`Pavarde teisinga`)
            ib = 1;
            error2.innerHTML ='';
            console.log((telefonas.toString()).length)
        } 
        if (pavarde > 0 && pavarde < 3 || pavarde > 20) {
            console.log(`Pavardė turi būti ilgesnė nei 3 raidės, trumpesnė nei 20 raidžių`)
            error2.innerHTML ='*Pavardė turi būti ilgesnė nei 3 raidės, trumpesnė nei 20 raidžių';
        }
          
            let tel = telefonas.toString()
            let skaiciai = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            let a = tel.length
            let count = 0
            for (j = 0; j < a; j++) {
                for (k = 0; k < skaiciai.length; k++) {
                    if (tel[j] == skaiciai[k]) {
                        count++
                    }
                }
            }
            if (count == a && telefonas.length == 9 || a == 0) {
                console.log(`Telefono numeris teisingas`);
                ic = 1;
                error3.innerHTML ='';
            } 
            if (count == a && a != 0 && a != 9) {
                console.log(`Telefono numerio ilgis turi būti 9 skaičiai`)
                error3.innerHTML ='*Telefono numerio ilgis turi būti 9 skaičiai';
            } 
            if (count != a)  {
                console.log(`Telefono numerį turi sudaryti tik skaičiai`)
                error3.innerHTML ='*Telefono numerį turi sudaryti tik skaičiai';
            }
       
            if(badNews >= 1){
                error4.innerHTML ='';
                id = 1;
            }
            if(badNews == 0){
                error4.innerHTML ='*Užpildyti būtina';
            } 

    
        i = ia + ib + ic + id
        if (i == 4) {
            console.log(`Visi duomenys teisingi`)
            but.classList.remove('disabled');
            but.removeAttribute('disabled', '');

        } else {
            console.log(`Dalis duomenų neteisingi`)
            but.classList.add('disabled');
            but.setAttribute('disabled', '');
            
        }
    
    
    }
    duomTikrinimas()
    


// MYGTUKO PASPAUDIMAS

but.addEventListener('click', result);




let counter = 0;
function result(){
    
    showTable();


    counter++
    // console.log(Bdate.value);
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = counter;
    cell2.innerHTML = first.value;
    cell3.innerHTML = second.value;
    cell4.innerHTML = teleph.value;
    cell5.innerHTML = calculateAge(Bdate.value) + " m.";
    cell6.insertAdjacentHTML(
        'afterbegin',
        `<div class='delete' onclick="removeLine(this)">ištrinti</div>`
        //`<div class='del' onclick="removeLine(this)">del</div>`
        
    );

    // cell6.classList.add('delete');
    // cell6.getAttribute(name);
    

  
    first.value = '';
    second.value = '';
    teleph.value = '';
    Bdate.value = '';
    text.value = '';


}


const calculateAge = (birthday) => {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age;
    // return Math.abs(ageDate.getUTCFullYear() - 1970);
}
console.log(calculateAge(Bdate.value))
// console.log(calculateAge('2000-01-21'))


// DELETE mygtukas

const deleteButt = document.getElementsByClassName('delete');
// const deleteButt = document.getElementById('delete');
console.log(deleteButt);
console.log(

);


// const tableBody = document.getElementsByClassName('table');
const tableBody = document.querySelector('tbody');
// const tableBody = document.getElementById('table');
console.log(tableBody.childElementCount);
console.log(tableBody.lastChild);

// // selected = tableBody.getElementsByClassName('selected');
// tableBody.onclick = highlight;
// function highlight(e) {
//     if (deleteButt[0]) deleteButt[0];
//     // e.target.parentNode.className = 'selected';
//     document.getElementById('table').deleteRow('.vienas');

// }

// document.getElementById('table').deleteRow(2); 
// document.getElementById('table').deleteRow(3);






// deleteButt[1].addEventListener('click', findDelete);

// function findDelete(){
//     // console.log(`test2`)
//        for(i = 0; i < tableBody.childElementCount; i++){
//         console.log(`test ${i}`);
//         deleteButt[i].addEventListener('mouseover', findDelete);
//         console.log(tableBody.children[i]);
//             function findDelete(){
//                 console.log(`test ${i}`);
//                 document.getElementById('table').deleteRow(i);
//                 return
//             } 
           
//     } 
// }



// TRINA PASKUTINĘ EILUTĘ, BET ID REIKIA

// tableBody.children[0].addEventListener('click', deletRows);
// // let n = 3;
// function deletRows(){
//     console.log(`test`)
//     console.log(tableBody.childElementCount);
//     document.getElementById('table').deleteRow(tableBody.childElementCount - 1);
// };


const table = document.querySelector('table');

function showTable(){
    //counter = 0;
    table.classList.remove('hide');
}


function removeLine(del){
    console.log(del);
    console.log(del.parentElement);

    const row = del.parentElement.parentElement
    tableBody.removeChild(row);
    changeCounter();
}


function changeCounter(){
    const row = tableBody.querySelectorAll('tr');
    if(row.length == 0){
        table.classList.add('hide');
    }
    counter = 0;
    row.forEach((element, index) => {
        counter++;
        const cells = element.querySelectorAll('td');
        cells[0].innerHTML= counter;
    });
}
