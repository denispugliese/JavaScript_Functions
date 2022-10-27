

function printOdds(count) {
    for (let i = 0; i <= count; i++){
        if (i % 2 == 1){
            console.log(i);
        }
        }
    }


printOdds(8)

function checkAge(userName, age) {
    let oldEnoughMsg = `Congrats ${userName}! You can drive!`;
    let tooYoungMsg = `Sorry ${userName}, but you need to wait ${16 - age} 
    until you can drive`;

    if (age < 16){
    console.log(tooYoungMsg)
    } else {
        console.log(oldEnoughMsg)
    }
}


function checkQuadrant(x,y){
    if (x > 0 && y > 0){
      return "Quadrant 1";
    } else if (x < 0 && y > 0){
        return "Quadrant 2"
    } else if (x < 0 && y < 0){
        return "Quadrant 3"
    } else if (x > 0 && y < 0){
        return "Quadrant 4";
    } else if (x == 0 && y !=0) {
        return "X-axis";
    } else if (x != 0 && y == 0 ) {
        return "Y-axis";
    } else {
        return "Origin";
    }
}

console.log(checkQuadrant(1,1));
console.log(checkQuadrant(-1,1));
console.log(checkQuadrant(1,-1));
console.log(checkQuadrant(1,0));
console.log(checkQuadrant(0,0));

function isValidTriangle(a, b, c) {
    return a + b > c || a + c > b || b + c > a;
  }
  
  function checkTriangle (a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
      if (a == b || b == c) {
        return "Equilateral";
      } else if (a == b || b == c || a == c) {
        return "Isosceles";
      } else if (a != b || b != c) {
        return "Scalene";
      } else {
        return "Not a valid triangle.";
      }
    };

    checkTriangle()
  
  let side1 = parseInt(prompt("Enter side one"));
  let side2 = parseInt(prompt("Enter side two"));
  let side3 = parseInt(prompt("Enter side three"));
  console.log(determineTriangle(side1, side2, side3));

  function checkData(planLimit, day, usage){
    if (day > 30)
    
    const totalDays = 30;
    const daysRemaining = totalDays - day;
    const avgUsage = usage/day;
    const avgUsagePerfect = planLimit/totalDays;
    const avgUsageCatchUp = dataRemaining/daysRemaining;
    const dataRemaining = planLimit - usage;

    let = extraMessage = "";
    if(dataRemaining > 0){
        extraMessage = `You are EXCEEDING your average daily use ($),
        continuing this high usage, you'll exceed your data plan by
        11.9 GB.`;
    
    }