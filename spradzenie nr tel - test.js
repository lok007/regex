var phoneNumber = /\d{3}-\d{3}-\d{3}/m;
var isPhoneNumber = [];
var isNotPhoneNumber = [];
var numbers = ["Przemek 692-407-128", "Basia 500-500-500", "Mati 300-300-30"];
for (i=0; i<numbers.length; i++){
var result = phoneNumber.test(numbers[i]);
	if (result) {
		isPhoneNumber.push(numbers[i])
	} else { isNotPhoneNumber.push(numbers[i])}
};
console.log("Poprawne numery telefonów: ");
console.log(isPhoneNumber);
console.log("Niepoprawne numery telefonów: ");
console.log(isNotPhoneNumber);