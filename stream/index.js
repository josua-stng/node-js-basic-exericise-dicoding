import fs from  "fs";

const readableStream=fs.createReadStream('./input.txt',{
    highWaterMark:5
});

readableStream.on('readable',()=>{
    try{
        process.stdout.write(`[${readableStream.read()}]`);
    }catch(err){

    }
})

readableStream.on('end',()=>{
    console.log("done");
})

const writableStream=fs.createWriteStream('output.txt');

writableStream.write('Lorem ipsum dol\n')
writableStream.write('or sit amet, co\n')
writableStream.write('nsectetur adipi\n')
writableStream.write('scing elit, sed\n')
writableStream.write('do eiusmod tem\n')
writableStream.write('por incididunt\n')
writableStream.write('ut labore et dol\n')
writableStream.write('lore magna aliq\n')
writableStream.write('ua. Ut enim ad\n')
writableStream.write('minim veniam, q\n')
writableStream.write('uis nostrud exe\n')
writableStream.write('rcitation ullam\n')
writableStream.write('co laboris nisi\n')
writableStream.write('ut aliquip ex\n')
writableStream.write('ea commodo cons\n')
writableStream.write('equat. Duis aut\n')
writableStream.write('e irure dolor in')
writableStream.write('in voluptate v\n')
writableStream.write('elit esse cillu\n')
writableStream.write('m dolore eu fug\n')
writableStream.write('iat nulla paria\n')
writableStream.write('tur. Excepteur\n')
writableStream.write('sint occaecat c\n')
writableStream.write('upidatat non pr\n')
writableStream.write('oident, sunt in\n')
writableStream.write('culpa qui offi\n')
writableStream.write('cia deserunt mo\n')
writableStream.write('llit anim id es\n')
writableStream.write('t laborum.\n')
writableStream.write('null\n')

