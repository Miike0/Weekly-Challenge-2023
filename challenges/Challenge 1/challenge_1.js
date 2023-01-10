const alphabet = (character) => {
    const alphabetObj = {
        a: '4',
        b: 'I3',
        c: '[',
        d: ')',
        e: '3',
        f: '|=',
        g: '&',
        h: '#',
        i: '1',
        j: ',_|',
        k: '>|',
        l: '1',
        m: '/\\/\\',
        n: '^/',
        o: '0',
        p: '|*',
        q: '(_,)',
        r: 'I2',
        s: '5',
        t: '7',
        u: '(_)',
        v: '\\/',
        w: '\\/\\/',
        x: '><',
        y: 'j',
        z: '2',

    }
    let founded = false, characterFounded = '';

    for (const property in alphabetObj) {
        if (property === character) {
            founded = true;
            characterFounded = alphabetObj[property];
            break;
        }
    }

    return (founded) ? characterFounded : 'error';
    
}

const naturalToHacker = (text) => {
    const textToConvert = text.split('');
    let textConverted = '', textAccum = '', textConvertedFailed = false;
    
    textToConvert.forEach(element => {
        textAccum = alphabet(element);
        if (textAccum !== 'error') {
            textConverted += textAccum;
        }else {
            textConvertedFailed = true;
            return;
        }
    });

    return (!textConvertedFailed) ? textConverted : 'Error, Some characters not supported';
}

const tests = () => {
    let test = naturalToHacker('leet');

    console.log(test);

    test = naturalToHacker('leet1');
    console.log(test)

    test = naturalToHacker('challenge');
    console.log(test)

}

tests();
