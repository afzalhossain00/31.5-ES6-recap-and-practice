/*২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। */

let num = 5;

const obj = {
    name: 'Afzal Hossain',
    phone: '01912507592',
    email: 'afzalhossen00@gmail.com',
    address: {
        street: 'House 86, Mawna Chowrasta',
        streetTwo: 'Koraitola',
        city: 'Gazipur',
        country: 'Bangladesh'
    }
}
const friends = ['Salman', 'Hira', 'Sagor', 'Sadman', 'Rony']; //Additional For Practice.

const templeteString = `I am ${obj.name}. I Live in ${obj.address.city}. I have ${num} Friedns. ${friends[4]} is one of them.`;

console.log(templeteString);