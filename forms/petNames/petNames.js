const petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam'];

let withMarmaduke = [petNames, 'Marmaduke']

alert(withMarmaduke)

let addPet = petNames.push('Demi'); 
alert(petNames)

const removePets = petNames.indexOf("Vinny")
if (index > -1) { petNames.splice(index, 1) }

alert('Vinnys name was removed')

