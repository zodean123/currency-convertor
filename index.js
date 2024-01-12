const baseurl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const dropdowns = document.querySelectorAll(".dropdown select");

// for(let codes in countryList){
//     console.log(codes,countryList[codes]);
// }
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value=currCode;
        select.append(newOption);
        if(select.name === "from" && currCode==="USD")
        newOption.selected=currCode;
        else if(select.name ==="to" && currCode ==="INR")
   newOption.selected=currCode;
    }
    select.addEventListener("change",(evt)=>{
        updatedFlag(evt.target);
    });
}

const updatedFlag = (element) =>{
    let currCode = element.value;
    console.log(currCode)
}