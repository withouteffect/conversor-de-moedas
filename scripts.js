const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const converterDe = document.querySelector(".converter-de")

function convertValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValue = document.querySelector(".currency-value")

 

    const realToday = 1
    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 344.733

   
    if (currencySelect.value == "real"){
        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL", 
        }).format(inputCurrencyValue / realToday )
    } 
 
    if (currencySelect.value == "dolar"){
        currencyValue.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD",
        }).format(inputCurrencyValue / dolarToday)
    } 

    if (currencySelect.value == "euro"){
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR",
        }).format(inputCurrencyValue / euroToday)
    } 

    if (currencySelect.value == "bitcoin"){
        currencyValue.innerHTML = new Intl.NumberFormat("BTC",{
            style:"currency",
            currency:"BTC",
        }).format(inputCurrencyValue / bitcoinToday)
    } 


    if (converterDe.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency:"BRL",
        }).format(inputCurrencyValue / realToday)
    } 
  
    if (converterDe.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD",
        }).format(inputCurrencyValue / dolarToday)
    } 
    
    if (converterDe.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR",
        }).format(inputCurrencyValue / euroToday)
    } 

   


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL" 
    }).format(inputCurrencyValue)
       
}

function changeCurrency (){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML ="$ Dólar Americano"
        currencyImage.src= "./assets/dolar.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML ="€ Euro"
        currencyImage.src= "./assets/euro.png"
    }

    if (currencySelect.value == "real"){
        currencyName.innerHTML ="R$ Real"
        currencyImage.src= "./assets/real.png"
    }

 //   if (currencySelect.value == "btc"){
 //       currencyName.innerHTML ="BTC Ƀ Bitcoin"
 //      currencyImage.src= "./assets/bitcoin.png"
 //   }
    convertValues ()
}




currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)



