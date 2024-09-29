const successPromise = new Promise((resolve) => 
    setTimeout(() => resolve("nach 2 Sekunden Erfolgreich!"), 2000)
)

const errorPromise = new Promise((_, reject) => 
     setTimeout(() => reject("Fehlgeschlagen nach 3 sekunden"), 3000)
)

successPromise.then(console.log).catch(console.error)
errorPromise.then(console.log).catch(console.error)