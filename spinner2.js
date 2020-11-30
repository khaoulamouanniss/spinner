let arr = ['\r/   ', '\r-   ','\r\\   ', '\r|   '];
let time = 0;
for (let i = 0; i < 2; i++) {
  setTimeout(() => { process.stdout.write('\r|   ');}, time + 200);
  for (let c of arr){
    setTimeout(() => { process.stdout.write(c);}, time + 200);
    time += 200;
  }
}
