type Hodnoceni = {
    jmeno: string,
    znamka: number
}
let znamky: Array<Hodnoceni> = [
    { jmeno: "Petr", znamka: 2 },
    { jmeno: "Anna", znamka: 1 },
    { jmeno: "Jana", znamka: 3 },
    { jmeno: "David", znamka: 1 }

]
const novySeznam: Array<string> = [];
let nejlepsiZnamka: number = znamky[0].znamka;
for (let i: number = 0; i < znamky.length; i++) {
    if (znamky[i].znamka < nejlepsiZnamka) {
        nejlepsiZnamka = znamky[i].znamka;
    }
}

for (let i: number = 0; i < znamky.length; i++) {
    if (znamky[i].znamka === nejlepsiZnamka) {
        novySeznam.push(znamky[i].jmeno);
    }
}
console.logValue("šprti", novySeznam)