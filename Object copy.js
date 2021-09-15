function copyProperty(source) {
    let target = {}; 
    let key;
  
    for (key in source) {
      target[key] =source[key]; 
    }
    return target;
  }
  
  const source = {
    a: 2,
    b: 5,
    c: {"topic":"java",
    Instructor:['xyz','abc']
  },
    
    }
   console.log(copyProperty(source));