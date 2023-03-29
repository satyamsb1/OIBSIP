let result;
        const myfun = () => {
            let temp = document.getElementById('temp').value;
            console.log(temp);
            let tempselector = document.getElementById('select_temp');
            let n = tempselector.options.selectedIndex;
            let selectionis = tempselector.options[n].value;
            if (selectionis == 'Celcius') {
                result = ((temp * 1.8) + 32)
                document.getElementById('myresult').innerHTML = `  ${result.toFixed(3)}  Fahrenheit`
            }
            else if(selectionis == 'Fehranheit'){
                result = ((temp - 32) / 1.8);
                document.getElementById('myresult').innerHTML = ` ${result.toFixed(3)} Celcius`
            }
            else if(selectionis == 'Kelvin'){
                result = (parseFloat(temp) + 273.15);
                document.getElementById('myresult').innerHTML = ` ${result.toFixed(3)} Kelvin`
            }
            else{
                document.getElementById('myresult').innerHTML = `Invalid selection`
            }
        }