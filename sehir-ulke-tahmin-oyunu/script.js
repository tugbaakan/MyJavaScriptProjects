const continents = document.getElementById('continents');
const choices = document.getElementById('choices');
const question = document.getElementById('question');
const message = document.getElementById('message');

var selectedContinent = "";
var questionCity = "";

function setQuestion (countryKey){
    fetch(`https://referential.p.rapidapi.com/v1/city?lang=tr&iso_a2=${countryKey}`
    , { "method": "GET","headers": { "x-rapidapi-key": "4335f8fb68msh778cb33b4dca925p16ba68jsn3106227c5a55",
            "x-rapidapi-host": "referential.p.rapidapi.com" } } )
    .then( res => res.json() )
    .then( data => {
        questionCity = getRandom(data, 1)[0];
        question.innerHTML = questionCity.value + ' şehri aşağıdaki ülkelerden hangisindedir?'
    })
    .catch(err => {
        console.error(err);
    });
    
}

function setChoices () {

    fetch(`https://referential.p.rapidapi.com/v1/country?lang=tr&fields=value%2C%20iso_a2&continent_code=${selectedContinent}`
    , { "method": "GET","headers": { "x-rapidapi-key": "4335f8fb68msh778cb33b4dca925p16ba68jsn3106227c5a55",
            "x-rapidapi-host": "referential.p.rapidapi.com" } } )
    .then(res => res.json()
    )
    .then( data => {
        // Seçilen kıtadaki ülkelerden rastgele 3 tanesi seçilip, seçeneklere koyulacak.
        var choicesList = getRandom(data, 3);
        // Ilk seçilen ülke cevap olacak.
        // Bu ülkeden rastgele bir şehir alınıp soru olarak sorulacak.
        for ( let i = 0; i<choicesList.length ; i++)
        {
            if (i == 0)
            {
                choicesList[i].IsAnswer = true;
                setQuestion(choicesList[i].key);   
            }
            else 
                choicesList[i].IsAnswer = false;
        }

        // Seçeneklerdeki ülkeler rastgele seçildiği için bunları alfabetik olarak sıralayıp ekrana basıyoruz.
        // Böylece cevap olan seçenek her seferinde rastgele bir yere geliyor.
        choicesList.sort(function(a, b) {
            var textA = a.value.toUpperCase();
            var textB = b.value.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        
        // seçenekler ekrana basılıyor
        choices.innerHTML = '';   
        choicesList.map(element => {
            var opt = document.createElement('button');
            opt.classList.add('btn');
            opt.id = element.key;
            opt.value = element.IsAnswer;
            opt.innerHTML = element.value;
            opt.addEventListener('click', btnClicked);
            choices.appendChild(opt);
        });

    })
    .catch(err => {
        console.error(err);
    });

}

function loadContinents () {
   
    fetch("https://referential.p.rapidapi.com/v1/continent?lang=tr&fields=value%2C%20iso_a2", 
        { "method": "GET","headers": { "x-rapidapi-key": "4335f8fb68msh778cb33b4dca925p16ba68jsn3106227c5a55",
		        "x-rapidapi-host": "referential.p.rapidapi.com" } } )
    .then(res => res.json())
    .then( data => {
        if (data == null)
        {
            console.log('Kıta bulunamadı');
        }
        else
        {
            data.filter(item => item.key != 'AN')
                .map(element => {
                    var opt = document.createElement('option');
                    opt.value = element.key;
                    opt.innerHTML = element.value;
                    continents.appendChild(opt);
                });
            selectedContinent = data[0].key;
            //console.log(selectedContinent);
            setChoices(data);
        }
    })
    .catch(err => {
	    console.error(err);
    });  

}

function initializeScreen() {
    loadContinents();
}

function refreshScreen(){
    message.style.display = 'none';
    setChoices();
}

function changeContinent(){
    selectedContinent = continents.value;
    refreshScreen();
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function btnClicked(e){
    
    message.innerHTML = '';
    if(e.target.value === 'true')
    {
        console.log('congrats');

        var opt = document.createElement('h3');
        opt.innerHTML = "Tebrikler, bildiniz!";
        message.appendChild(opt);

        var opt2 = document.createElement('button');
        opt2.classList.add('replayButton');
        opt2.innerHTML = "Tekrar oyna";
        opt2.addEventListener('click', refreshScreen);
        message.appendChild(opt2);

        message.style.display = 'block';

        const buttons = choices.getElementsByClassName('btn');

        for(let i=0; i<buttons.length;i++)
        {
            buttons[i].disabled = true;
        }

    }
    else
    {
        console.log('yanlış cevap');

        var opt = document.createElement('h3');
        opt.innerHTML = "Yanlış cevap!";
        message.appendChild(opt);

        message.style.display = 'block';

    }
}

//initialize the screen
initializeScreen();

//eventlisteners
continents.addEventListener('change', changeContinent);
