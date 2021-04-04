


alert('Welcome to BALSAM Foundation for free electronic Medical Profile Record Making');

let userName = prompt("Would you please provide us with your name?");
console.log(userName);

let userMedHis = prompt('Do you Have any ongoing chronic Medical diseases?, please mention them if yes.');
console.log(userMedHis);

let userMeds= prompt('What Medications are you currently taking?');
console.log(userMeds);

let userAllergies = prompt('If you have ever developed any allergic reaction to medication or food, please specify it.');
console.log(userAllergies);

alert('So, to make last confirmation. Your name is ' + userName + ' and you suffer from the following diseases ' + userMedHis+ ' and you are taking currently the following medications ' + userMeds+ ' also you are allergic to ' +userAllergies)

document.write('<tr><td>'+userName+'</td></tr>');
document.write('<tr><td>'+userMedHis+'</td</tr>');
document.write('<tr><td>'+userMeds+'</td</tr>');
document.write('<tr><td>'+userAllergies+'</td></tr>');