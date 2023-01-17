function passwordGenerator () {

    const characters = {
        lettersLowerCase : 'abcdefghijklmnopqrstuvwxyz',
        letterUpperCase : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '°!"#$%&/()=?¡¨*][_:;<>¿',
    };
    
    let password = '';

    const getRandomNumber = (min, max)  => {
        return Math.floor(Math.random() * ((max + 1) - min) + min);
    }

    const lenghtPassword = getRandomNumber(8, 16);

    for (let i = 0; i < lenghtPassword; i++) {
        
        let randomCase = getRandomNumber(1, 4);

        switch (randomCase) {
            case 1: 
                password += characters.lettersLowerCase[getRandomNumber(0, (characters.lettersLowerCase.length - 1))];

                break;
            case 2: 
                password += characters.letterUpperCase[getRandomNumber(0, (characters.letterUpperCase.length - 1))];

                break;
            case 3:
                password += characters.numbers[getRandomNumber(0, (characters.numbers.length - 1))];

                break;
            case 4:
                password += characters.symbols[getRandomNumber(0, (characters.symbols.length - 1))];

                break;
            default:
                password += '';
        }
    }
    return password;

}

function main () {
    console.log(passwordGenerator());
}
main();