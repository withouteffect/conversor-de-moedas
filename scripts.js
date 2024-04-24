const convetButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const url = "https://economia.awesomeapi.com.br/last/"
    const coins = "USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL"

    fetch(url + coins)
        .then(function (reponse) {
            return reponse.json()
        })
        .then(function (data) {
            const dolarToday = data.USDBRL
            const euroToday = data.EURBRL
            const libraToday = data.GBPBRL
            const bitcoinToday = data.BTCBRL

            const inputCurrencyValue = document.querySelector(".input-currency").value
            const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//Valor em Real
            const currencyValueConverted = document.querySelector(".currency-value")//Outras moedas
            //const convertedValue = (inputCurrencyValue / dolarToday.high)

            if (currencySelect.value == "dolar") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrencyValue / dolarToday.high)
            }

            if (currencySelect.value == "euro") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrencyValue / euroToday.high)
            }

            if (currencySelect.value == "libra") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP"

                }).format(inputCurrencyValue / libraToday.high)
            }

            if (currencySelect.value == "btc") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "BTC",
                    maximumSignificantDigits: 9

                }).format(inputCurrencyValue / bitcoinToday.high)
            }

            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
        })

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "USD $ - Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "EUR € - Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "GBT £ - Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "btc") {
        currencyName.innerHTML = "ɃTC Ƀ - Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convetButton.addEventListener("click", convertValues)


