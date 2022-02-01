import eventEmmiter from "events"

const event=new eventEmmiter()

const birthdayEventListener = ({name}) => {
  console.log(`Happy birthday ${name}!`);
};


event.on('birthdayEventListener',birthdayEventListener)

event.emit('birthdayEventListener',{name:'Dimas'})


// run code node ../event/index.js


