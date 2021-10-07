const names = ['abul', 'kabul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'gabul', 'ebul'];

function myNameIs(names) {
    const undefine = [];

    for (let i = 0; i <= names.length; i++) {
        let element = names[i];
        // console.log(element);
        if (undefine.indexOf(element) == -1) {
            undefine.push(element);
        }
    }
    return undefine;
}

const MyFullNameIs = myNameIs(names);
console.log(MyFullNameIs);



/* const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        // console.log(element);
        // }
        // for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); */