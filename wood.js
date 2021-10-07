function WoodCal(tablewood, charewood, bedwood) {
    const partablewood = 20;
    const parcharewood = 15;
    const parbedwood = 50;

    const totalcharewood = charewood * parcharewood;
    const totaltablewood = tablewood * partablewood;
    const totalbedwood = bedwood * parbedwood;

    const totalWoodSize = totalcharewood + totaltablewood + totalbedwood;


    return totalWoodSize;
}

const Jisan = WoodCal(5, 7, 9);
console.log('Total Wood Need Is  : ', Jisan);
