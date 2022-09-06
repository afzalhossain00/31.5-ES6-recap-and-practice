/* ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।  */

const object = {
    name: 'Afzal',
    phone: ['01912507592', '01629749572'],
    address: {
        street: {
            streetOne: 'House 86',
            streetTwo: 'Block E, Boherar chala'
        },
        city: 'Gazipur',
        country: 'Bangladesh',
    }
}

console.log(object.address.street?.streetThree);