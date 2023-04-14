
let warDatas = [
    {regionName:"Cəbrayıl", unoccupyDate:"04.10.2020", villageCount:90 },
    {regionName:"Füzuli", unoccupyDate:"17.10.2020", villageCount:53 },
    {regionName:"Zəngilan", unoccupyDate:"20.10.2020", villageCount: 52},
    {regionName:"Qubadlı", unoccupyDate:"25.10.2020", villageCount:41 },
    {regionName:"Şuşa", unoccupyDate:"08.11.2020", villageCount:1 },
    {regionName:"Ağdam", unoccupyDate:"20.11.2020", villageCount:100 },
    {regionName:"Kəlbəcər", unoccupyDate:"25.11.2020", villageCount: 147},
    {regionName:"Laçın", unoccupyDate:"01.12.2020", villageCount:3 }
];

function writeWarDatas(warDatasArray){ 
  for (let i = 0; i < warDatasArray.length; i++) {
  let eachWarData = `
      <tr>
      <td>${i+1}</td>
      <td>${warDatasArray[i].regionName}</td>
      <td>${warDatasArray[i].unoccupyDate}</td>
      <td>${warDatasArray[i].villageCount}</td>
      </tr>
  `;
  tableRows.innerHTML = tableRows.innerHTML+eachWarData;
}
};

function sortWarDatesAlphabetical(){
  let warDatasCopy = warDatas.slice(); // orjinal arrayimiz dəyişməsin deyə kopyasından istifadə edirik.
    warDatasCopy.sort(function(a, b) {
        if (a.regionName > b.regionName) {
          return 1; 
        } else {
          return -1; 
        }
      });
    return warDatasCopy;
}

function sortWarDatasByCount(){
    let warDatasCopy = warDatas.slice();// orjinal arrayimiz dəyişməsin deyə kopyasından istifadə edirik. 
    warDatasCopy.sort(function(a, b) {
        if (a.villageCount > b.villageCount) {
          return 1; 
        } else {
          return -1; 
        }
      });
    return warDatasCopy;
}

// Default görünüş azad olunma sırası ilədir deyə başlanğıcda bu kodlar çağırılsın.
let tableRows = document.querySelector(".table-content");
writeWarDatas(warDatas);


const options = document.getElementsByClassName("dropdown-item");

// A-Z optionun kodları
options[0].addEventListener('click',function(){
  tableRows.innerHTML="";
  console.log(sortWarDatesAlphabetical());
  writeWarDatas(sortWarDatesAlphabetical());
});

// Kənd sayı artan sıra ilə
options[1].addEventListener('click',function(){
  tableRows.innerHTML="";
  writeWarDatas(sortWarDatasByCount());
})


// Və yenidən defaulta qayıtmaq üçün azad olunma sırası optionu
options[2].addEventListener('click',function(){
    tableRows.innerHTML="";
    writeWarDatas(warDatas);
});

//maximum tapılır
let mostVillageCount = sortWarDatasByCount(warDatas)[sortWarDatasByCount(warDatas).length-1].regionName; 
// bütün kənd sayını hesablayan funsiyadlr
function findAllVillageCount(warDatasArray){
  let allVillageCount= 0;
  for (let i = 0; i < warDatasArray.length; i++) {
    
    allVillageCount=allVillageCount+warDatasArray[i].villageCount;
  }
  return allVillageCount;
}


const moreInfo = document.getElementById("open-dialog");
const overlay = document.getElementsByClassName("overlay");
const modal = document.getElementById("modal");
let modalTemplate = `
<h4>Daha çox məlumat</h4>
<p>Ən çox kəndi azad edilən rayon:${mostVillageCount}</p>
<p>Azad edilən kəndlərin ümumi sayı:${findAllVillageCount(warDatas)}</p>
<div class="buttons">
  <button class = "more-info" type="button" id="ok-btn">Ok</button>
  
</div>
`
modal.innerHTML=modal.innerHTML+modalTemplate;
moreInfo.addEventListener('click',function () {

  overlay[0].style.display = 'block';
  modal.style.display = 'block';
})

const okButton = document.getElementById("ok-btn");
okButton.addEventListener('click',function () {
  overlay[0].style.display = 'none';
  modal.style.display = 'none';
})




