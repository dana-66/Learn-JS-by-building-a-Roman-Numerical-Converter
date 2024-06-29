const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const form = document.getElementById("form");

const convertToRoman = (num) => {
  const resource = [
    ['M',1000],
    ['CM',900],
    ['D',500],
    ['CD',400],
    ['C',100],
    ['XC',90],
    ['L',50],
    ['XL',40],
    ['X',10],
    ['IX',9],
    ['V',5],
    ['IV',4],
    ['I',1]
  ];

  const result = [];

  resource.forEach((arr) => {
    while(num >= arr[1]){
      result.push( arr[0]);
      num -= arr[1];
    }
  });
  return result.join("");
};

const checkUserInput = (str, int) => {
    let errMsg = "";

    if (!str || str.match(/e.\g/)) {
         errMsg = "Please enter a valid number";
         
    } else if (int < 1) {
         errMsg = "Please enter a number greater than or equal to 1";
         
    } else if (int > 3999) {
         errMsg = "Please enter a number less than or equal to 3999";
         
    }else{
        return true;
    }
    output.innerText = errMsg;
    output.style.display = "block";
    output.classList.add("alert");
    return false;
};
const clearOutput = () => {
    output.innerText = '';
    output.classList.remove('alert');
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    updateResult();
});
convertBtn.addEventListener("click", () => {
  updateResult();
});
convertBtn.addEventListener("submit", (e) => {
    if (e.key === "Enter") {
        e.preventDefault()
        updateResult();
    }
});

const updateResult = () => {
  
  const int = parseInt(number.value, 10);

  output.classList.remove("hidden");
  clearOutput();
  if(checkUserInput(number.value, int)){
    output.innerText = convertToRoman(int);
    
  }
};