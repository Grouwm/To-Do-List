//id genetrator
export function createID() {
    let dateNow = Date.now(); 
    let randomNum = (Math.random() * 1000).toFixed();
    let uniqueID = dateNow + randomNum; 
    return uniqueID; 
}
