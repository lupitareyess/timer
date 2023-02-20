// Recieve command line input 
const setAlarmNumber = process.argv.slice(2);


// Sort so that beeping goes off in order
setAlarmNumber.sort();

// alarm beeps after a specified amount of time has passed
// user can specify and unlimited number of alarms using CLA


let delay = 0;

for (let alarm of setAlarmNumber) {
  // edge cases
  if (alarm === undefined || alarm < 1 || isNaN(alarm)) {
    continue;
  } setTimeout(() => {
    process.stdout.write(`.`);
  }, alarm * 1000);
  // need to redefine here since next setTimeout does not have alarm within its scope
  delay = alarm * 1000;
}

setTimeout(() => {
  console.log(`\n`);
}, delay);





