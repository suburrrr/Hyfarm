
const nilai = 3;

if(nilai == 0){
    console.log('nilai = '+nilai);
    let state = 'good';
}
else if(nilai == 1){
    console.log('nilai = '+nilai)
    const state = 'good';
}
else{
    console.log('nilai = '+nilai+', bukan nilai yang diinginkan')
    const state = 'not good';
}

console.log('program selesai');
console.log(state);