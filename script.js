console.log("helló")
// CRUD 
const allatok = [
    { id: 1, nev: "Micike", faj: "macska", ar: "1000", szin: "cirmos" },
    { id: 2, nev: "Lune", faj: "macska", ar: "500", szin: "cirmos" },
    { id: 3, nev: "Macsa", faj: "macska", ar: "2000", szin: "cirmos" }
]
const oszlopok = ["nev", "faj", "ar", "szin", "muveletek"]

function keresdMegEztAzElemetAHtmlben(htmlElemClassNeve) {
    // NEM CSINÁLUNK OLYAN FÜGVÉNYT AMI TÖBBFÉLE TIPUSSAL TÉRHET megtalaltHtmlElemek!!!

    // megkeressük az adott class nevű html elemeket -> tehát ez egy tömb lesz
    let megtalaltHtmlElemek = document.querySelectorAll(htmlElemClassNeve)

    // ha csak egy elemet találunk, akkor a tömb nulladik indexű elemét adjuk vissza
    if (megtalaltHtmlElemek.length === 1) {

        return megtalaltHtmlElemek[0]
    } else {

        // különben adjuk vissza a megtalált elemek tömbjét
        return megtalaltHtmlElemek;
    }
}


function fejlecHozzaado(elemAmihezHozzaadjukASort) {
    let sor = document.createElement('div');
    sor.className = "row";
    oszlopok.forEach(oszlopNev => {
        let oszlop = document.createElement('div');
        oszlop.className = "col";
        oszlop.innerHTML = oszlopNev;
        sor.appendChild(oszlop);
    })
    elemAmihezHozzaadjukASort.appendChild(sor)
}

function gombHozzaado(oszlop) {
    let gomb1 = document.createElement("button");
    gomb1.innerHTML = "edit";
    let gomb2 = document.createElement("button");
    gomb2.innerHTML = "delete";
    oszlop.appendChild(gomb1)
    oszlop.appendChild(gomb2)
}
function rendel() {
    let container = keresdMegEztAzElemetAHtmlben('.container')
    fejlecHozzaado(container)

    // végigmegyünk az állatok tömb összes elemén (forEach), "allat" változó az az elem amin éppen áll a forEach
    allatok.forEach((allat) => {

        // létrehozunk egy divet a sor nevű változóba
        let sor = document.createElement('div');

        // adunk neki egy class nevet, jelen esetben "row"
        sor.className = "row";

        // igy lesz egy ilyenünk => <div class="row"></div>

        // végigdzsalunk az oszlopok tömb elemein
        oszlopok.forEach((oszlopNeve) => {

            // létrehozunk egy divet ami a soron belül lesz egy oszlop cella
            let oszlop = document.createElement('div');

            // adunk az oszlop cella div-nek egy class nevet
            oszlop.className = "col";

            if (oszlopNeve === "muveletek") {
                gombHozzaado(oszlop)
            } else {
                // az oszlop div tartalmát megadjuk, az "allat" objektum "oszlopNeve" kulcsához tartozó értékkel
                // pl.: allat["nev"] => Micike => <div class="col">Micike</div>
                oszlop.innerHTML = allat[oszlopNeve];

            }


            // hozzáadjuk a sor divhez a létrehozott oszlop divet
            sor.appendChild(oszlop);
        }
        )
        // megkeressük a container nevű divet a html-ben és beletesszük a sor divet
        container.appendChild(sor);
    }
    )
}

rendel()