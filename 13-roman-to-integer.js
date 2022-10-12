/**
@param String s
@return Int num
*/
    //Given a hash map with Symbol ==> Value;
    //Iterate through string characters.
    //Initial value to check is first character.
    //Add first character to total N
    //Go to next character.
    //If that char/ current character value is less than or equal to the previous, add that to total
    //If current character is greater than previous, add (current - 2 * previousValue)

    // ex: s = "MCMXCIV". //1994

map = new Map([
    ['I', 1],['V', 5],['X', 10],['L', 50],['C', 100],['D', 500],['M', 1000]
    ])

function romanToInt(s){
    initialValue = s[0];
    total = map.get(initialValue);
    for(let i = 1; i < s.length; i++){
        if (map.get(s[i]) <= map.get(initialValue)) total += map.get(s[i]);
        else total += (map.get(s[i]) - 2 * map.get(initialValue) )
        initialValue = s[i];
    }
    
    return total;
}