/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// your code goes here
for(let i = 0; i <= SPENDING_THRESHOLD ; i = PHONE_PRICE + ACCESSORY_PRICE) {
    amount = amount + i;
    for(let i = 0; 200 > i <= 0 ; i = PHONE_PRICE) {
        amount = amount + i; 
    }
    console.log(`Phone price is ${PHONE_PRICE} 
    \n Accessory price is ${ACCESSORY_PRICE} 
    \nTax is ${TAX_RATE}% 
    \nPurchased amount is $${amount + ((amount*TAX_RATE)/100)}% 
    \nCurrent balance is $${bank_balance - (amount + ((amount*TAX_RATE)/100))} `);
}

// ⛑ Answer of the above will `$334.76`
