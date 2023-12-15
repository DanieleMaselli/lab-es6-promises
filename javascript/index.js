// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          
          getInstruction('mashedPotatoes', 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`

            if (step5 === step5) {
              const mashedImage = document.querySelector("#mashedPotatoesImg");
              mashedImage.removeAttribute('hidden');
            }
    
          });
  
        });
      });
    });  
  });   
});

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 1);
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 2); 
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 3);
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 4); 
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 5); 
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 6); 
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 7); 
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 8); 
  })
  .then( (step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
    //  ... Your code here
    if (step8 === step8) {
      const steakImage = document.querySelector("#steakImg")
      steakImage.removeAttribute('hidden');
    }
    return obtainInstruction('steak', 9); 
   
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
  
// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  //declare the function!
  const step0 = await obtainInstruction('broccoli',0)
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
  const step1 = await obtainInstruction('broccoli',1)
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
  const step2 = await obtainInstruction('broccoli',2)
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
  const step3 = await obtainInstruction('broccoli',3)
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
  const step4 = await obtainInstruction('broccoli',4)
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
  const step5 = await obtainInstruction('broccoli',5)
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
  const step6 = await obtainInstruction('broccoli',6)
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
  const step7 = await obtainInstruction('broccoli',7)
  document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
  
}
//call the function
makeBroccoli()

// Bonus 2 - Promise all

const brusselArray = [ 
    obtainInstruction('brusselsSprouts',0),
    obtainInstruction('brusselsSprouts',1),
    obtainInstruction('brusselsSprouts',2),
    obtainInstruction('brusselsSprouts',3),
    obtainInstruction('brusselsSprouts',4),
    obtainInstruction('brusselsSprouts',5),
    obtainInstruction('brusselsSprouts',6),
];

Promise.all(brusselArray)
  .then((value) => {
    //console.log(value)
    const brusselsSproutsElement = document.querySelector("#brusselsSprouts");
    value.forEach((instruction) => {
      brusselsSproutsElement.innerHTML += `<li>${instruction}</li>`;
    });

  })
