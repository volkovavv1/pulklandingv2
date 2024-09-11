let telegram = document.getElementById("telegram");
let pulkovsky = document.getElementById("logopulk-one");
let lavka = document.getElementById("logolavka-one");

let pulkovskyTwo = document.getElementById("logopulk-two");
let lavkaTwo = document.getElementById("logolavka-two");

let ownerName = document.getElementById("ownerName");
let phoneNumber = document.getElementById("phoneNumber");
let checkNumber = document.getElementById("checkNumber");
let dateCheck = document.getElementById("dateCheck");
let sumCheck = document.getElementById("sumCheck");

let alert = document.getElementById("alert");

let errorInput = document.getElementsByClassName("error-input");
let input = document.getElementsByClassName("check-input");

const handleClick = (link) => {
  window.open(link);
}

telegram.onclick = () => { handleClick("https://t.me/SuperPulk")}

pulkovsky.onclick = () => { handleClick("https://unpul.ru/")}
pulkovskyTwo.onclick = () => { handleClick("https://unpul.ru/")}

lavka.onclick = () => { handleClick("https://vk.com/dailymeals")}
lavkaTwo.onclick = () => { handleClick("https://vk.com/dailymeals")}

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  validator(ownerName.value, phoneNumber.value, checkNumber.value, dateCheck.value, sumCheck.value)
})

if (!phoneNumber.value.includes('+7')) {
  phoneNumber.value = '+7'+ phoneNumber.value;
};

  phoneNumber.addEventListener('keyup', function(e) {
    if (!e.target.value.includes('+7')) {
      e.target.value = '+7' + e.target.value;
    }
  });

  if (!dateCheck.value.includes('2024')) {
    dateCheck.value = '2024-09-03';
  };

const validator = (name, phone, number, date, sum) => {
    let userName = validateName(name) ;
    let userPhone = validatePhone(phone);
    let userCheckNumber = validateNumber(number);
    let userCheckSum = validateSum(sum);
    let userCheckDate = validateDate(date);

    if (userName && userPhone && userCheckNumber && userCheckSum && userCheckDate) {
      alert.classList.add("alert__good");

    let user = {
        "user_name" : userName,
        "phone" : userPhone,
        "receiptnumber": userCheckNumber,
        "receiptdate": userCheckDate,
        "receiptsum": userCheckSum,
      }

      for (let i; i < input.length, i++;) {
        input[0].value = ""
      }

      for (const [key, value] of Object.entries(user)) {
        setCookie(key, value)
      }
    }
  }

  function showError (text, number) {
    errorInput[number].innerText = text;
    errorInput[number].style.display = 'flex';
    input[number].classList.add("check-input__err")
  }
  
  function validateName(name) {
    let regex = new RegExp('^[A-Za-z.!@?#"$%&:;() *\+,\/;\-=[\\\]\^_{|}<>\u0400-\u04FF]*$');
  
    if (!regex.test(name)) {
      showError("Введенные данные некорректны", 0)
      return false
    } else {
      return name
    }
  }
  
  function validatePhone(phone) {
    phone = phone.replace("+7", "")
    phone = phone.replace(" ", "")
    let regex = new RegExp("^\\d{10}$");

    if (!regex.test(phone)) {
      showError("Введенные данные некорректны", 1)
      return false
    } else {
      return phone
    }
  }
  
  function validateNumber(number) {
    let length = number.length
    let regex = new RegExp("^\\d{6}$");

    if (length !== 6 && !regex.test(number)) {
      showError("Номер чека должен составлять 6 цифр", 2)
      return false
    } else {
      return number
    }
  }

  function validateDate(date) {
    let year = date.slice(0, 4);
    date = date.replace(/-/g, "");
    let number = parseInt(date, 10)
    
    if (year !== '2024' || number < 20240903 || number > 20241018) {
      showError("Некорректная дата. Введите дату в диапазоне от 03.09.2024 до 17.10.2024", 3)
      return false;
    } else {
      return date;
    }
  }

  function validateSum(sum) {
    if (sum < 1000) {
      showError("Сумма должна быть от 1000 рублей", 4);
      return false
    } else {
      return sum
    }
  }

  function setCookie(name, value) {
    document.cookie = `${name}=${value}; Secure`;
  }
  