class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
     
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    

    //console.log(Math.floor((this.currentTime)/60 ))
    return (Math.floor(this.currentTime / 60));
  }

  getSeconds() {
    // console.log((this.currentTime)% 60 )
    return (Math.floor(this.currentTime % 60));
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value > 9) {
      return value.toString();
    } else {
      return "0" + value.toString();
    }

   // console.log(value)
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset()
   {

    
this.currentTime=0;





  }

  split() {

let minString = this.computeTwoDigitNumber(this.getMinutes)
let secString = this.computeTwoDigitNumber(this.getSeconds)

// NO ENTIENDO MUY BIEN POR QUENO FUNCIONA EN EL CONSOLE LOG SI QUE ME FUNCIONABA CUANDO ESTABA EN GETMINUTES Y GETSECONDS
// console.log(minString+":"+secString)

return minString+":"+secString

  }
}
//IMPORTANT  La implementación del último ejercicio no la he hecho ya que quiero repasar el 
// tema del dom y la verdad es que creo que es bastante trabajo y el tema con el que se juega es el hecho 
// de que tienes que tener en cuenta cuantos cenit segundos hay en un segundo y luego cuantos cenit segundos hay en un minuto.
//MPORTANT                               

//MPORTANT   SOME ASCII LOVE!!!


// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣤⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⡾⣻⣿⣿⣿⣿⣯⣍⠛⠻⢷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠟⢁⣾⠟⠋⣁⣀⣤⡉⠻⣷⡀⠀⠙⢿⣷⣄⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⣰⣿⠏⠀⠀⢸⣿⠀⠼⢋⣉⣈⡳⢀⣿⠃⠀⠀⠀⠙⣿⣦⡀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢰⡿⠿⣷⡀⠀⠀⠀⣼⣿⠃⠀⠀⣀⣤⡿⠟⠛⠋⠉⠉⠙⢛⣻⠶⣦⣄⡀⠀⠘⣿⣷⡀⠀⠀⠀
// ⢠⣾⠟⠳⣦⣄⢸⡇⠀⠈⣷⡀⠀⣼⣿⡏⢀⣤⡾⢋⣵⠿⠻⢿⠋⠉⠉⢻⠟⠛⠻⣦⣝⠻⣷⣄⠸⣿⣿⠀⠀⠀
// ⠘⣧⠀⠀⠀⠙⢿⣿⠀⠀⢸⣷⠀⣿⣿⣧⣾⣏⡴⠛⢡⠖⢛⣲⣅⠀⠀⣴⣋⡉⠳⡄⠈⠳⢬⣿⣿⣿⡿⠀⠀⠀
// ⠀⠘⠷⣤⣀⣀⣀⣽⡶⠛⠛⠛⢷⣿⣿⣿⣿⣏⠀⠀⡏⢰⡿⢿⣿⠀⠀⣿⠻⣿⠀⡷⠀⣠⣾⣿⡿⠛⠷⣦⠀⠀
// ⠀⠀⢀⣾⠟⠉⠙⣿⣤⣄⠀⢀⣾⠉⠀⢹⣿⣿⣷⠀⠹⡘⣷⠾⠛⠋⠉⠛⠻⢿⡴⢃⣄⣻⣿⣿⣷⠀⠀⢹⡇⠀
// ⠀⠀⢸⡇⠈⠉⠛⢦⣿⡏⠀⢸⣧⠀⠈⠻⣿⡿⢣⣾⣦⣽⠃⠀⠀⠀⠀⠀⠀⠀⣷⣾⣿⡇⠉⢿⡇⠀⢀⣼⠇⠀
// ⠀⠀⠘⣷⡠⣄⣀⣼⠇⠀⠀⠀⠻⣷⣤⣀⣸⡇⠀⠹⣿⣿⣦⣀⠀⠀⠀⠀⢀⣴⣿⣿⡟⠀⠀⢸⣷⣾⡿⠃⠀⠀
// ⠀⠀⠀⠈⠻⢦⣍⣀⣀⣀⡄⠀⣰⣿⡿⠿⢿⣇⠀⠀⠉⠛⠻⣿⣿⡷⠾⣿⣿⡿⠉⠁⠀⠀⢀⣾⠋⠁⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠈⠉⠉⠙⠿⢿⣿⣇⠀⠀⠈⢿⣧⣄⠀⠀⠀⢹⣷⣶⣶⣾⣿⡇⠀⠀⣀⣴⡿⣧⣄⡀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣷⡀⠀⠀⠙⢿⣿⣶⣤⡀⠻⢤⣀⡤⠞⢀⣴⣿⣿⠟⢷⡀⠙⠻⣦⣄⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣦⠀⢠⡟⠁⠙⢻⣿⠷⠶⣶⠶⠾⠛⠙⣿⠇⠀⠀⢻⡄⠀⠀⠙⢷⡀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⡀⣿⠁⣤⣤⡄⢻⡶⠶⠛⠛⠛⠛⠛⣿⢠⣾⣷⣆⢻⡀⠀⠀⠈⣷
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⢸⣿⣿⣿⡈⢿⡀⠀⠀⠀⠀⠀⡿⢸⣿⣿⣿⢸⡇⠀⠀⠀⡟
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠈⠉⠉⠉⠁⠈⠁⠀⠀⠀⠀⠈⠁⠈⠉⠉⠉⠀⠁⠀⠀⠈⠁