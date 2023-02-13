const click_button = document.getElementsByClassName("button");

const counter = document.getElementsByClassName("total_counter");
const counter_cps = document.getElementsByClassName("cps_counter");
const counter_cpm = document.getElementsByClassName("cpm_counter");

const clickanything = document.getElementsByTagName("body");

clickanything[0].addEventListener("click",(e)=>{
    console.log(e)
});

// this is for total_clicks.html page

// if(counter[0].innerText == "0 clicks"){

//     let count=0;

//     click_button[0].addEventListener("click",(e)=>{
//         count++;
//         counter[0].innerText = count + " clicks";
//     })

//     clickanything[0].addEventListener("keypress",(e)=>{
//         count++;
//         counter[0].innerText = count + " clicks";
//     })
    
//     let score_count = 0;

//     click_button[1].addEventListener("click",(e)=>{  //this is for score button
//         score_count++;
//         counter[0].innerText = "0 clicks";

//         const display = document.getElementsByClassName("scores");
//         const table = document.getElementsByTagName("table");

//         const row = document.createElement("tr");
//         const table_data1 = document.createElement("td");
//         const table_data2 = document.createElement("td");

//         table_data1.innerText= score_count;
//         row.appendChild(table_data1);
//         table_data2.innerText= count;
//         row.appendChild(table_data2);
//         display[0].appendChild(row);

//         // table[0].style.removeProperty("visibility");

//         count = 0;

//         if(score_count==1){
//             let table = document.getElementsByTagName("table");
//             table[0].style.visibility="visible";
//         }
//     })

//     click_button[2].addEventListener("click",(e)=>{  //this id for reset button
//         const table_elements = document.getElementsByClassName("scores");


//         while (table_elements[0].hasChildNodes()) {
//             table_elements[0].removeChild(table_elements[0].firstChild);
//         }

//         score_count = 0;
//         counter[0].innerText = "0 clicks";
//     })
// }

//this is for cpm.html

// if(counter_cps[0].innerText == "0 CPS"){

//     let count=0;

//     click_button[0].addEventListener("click",(e)=>{
//         count++;
//         counter_cps[0].innerText = count + " CPS";
//     })

//     clickanything[0].addEventListener("keypress",(e)=>{
//         count++;
//         counter_cps[0].innerText = count + " CPS";
//     })
// }

// //this is for cps.html

// if(counter[0].innerText == "0 clicks"){

//     click_button[0].addEventListener("click",(e)=>{
//         count+=1;
//         counter[0].innerText = count+' clicks';
//     })
    
//     click_button[1].addEventListener("click",(e)=>{
//         count = 0;
//         counter[0].innerText = count+' clicks';
//     })
// }