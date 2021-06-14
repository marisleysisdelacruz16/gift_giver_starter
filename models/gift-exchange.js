const names = ["me", "you", "them", "us", "her", "him", "they", "y'all"]


class GiftExchange {
    static async returnNames () {
        return names;
    }

    static async pairs () {
        let firstName;
        let secondName;
        let pairedUsers = [];
        let arrays = [];
        while (pairedUsers.length != names.length) {
            firstName = names[Math.floor(names.length* Math.random())];
            while (pairedUsers.includes(firstName)) {
                firstName = names[Math.floor(names.length* Math.random())];
            }
            
        pairedUsers.push(firstName);

            secondName = names[Math.floor(names.length*Math.random())];
            while (pairedUsers.includes(secondName)) {
                secondName = names[Math.floor(names.length*Math.random())];
            }
        
        pairedUsers.push(secondName);

        arrays.push([firstName,secondName]);

        }

    return arrays;
}

     static async traditional () {
         let stringArray = [];
         for(let i=0; i < names.length; i++) {
             if (i != names.length-1) {
                stringArray.push(names[i] + " is giving a gift to " + names[i+1]);
             }
             else {
                 stringArray.push(names[i] + " is giving a gift to " + names[0]);
             }
             
         }

    return stringArray;

    } 
}

module.exports = GiftExchange