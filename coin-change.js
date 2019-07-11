const makeChange = coin => {
    let quarter = Math.floor(coin/25);
    coin -= 25*quarter
    let dime = Math.floor(coin/10);
    coin -= 10*dime
    let nickel = Math.floor(coin/5);
    coin -= 5*nickel
    let penny = coin;
    let totalCoinsUsed = quarter + dime + nickel + penny;
    console.log(`Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel},Pennies: ${penny} \n Total number of coins used is ${totalCoinsUsed}`)
};

makeChange(300);
// Output for 300 should look like this
// Quarters: 12, Dimes: 0, Nickels: 0,Pennies: 0 
// Total number of coins used is 12
makeChange(6);
// Output for 6 should look like this
// Quarters: 0, Dimes: 0, Nickels: 1,Pennies: 1 
//  Total number of coins used is 2
makeChange(89);
// Output for 89 should look like this
// Quarters: 3, Dimes: 1, Nickels: 0,Pennies: 4 
//  Total number of coins used is 8