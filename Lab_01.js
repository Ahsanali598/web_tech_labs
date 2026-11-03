
function addition(a, b) {
  return a + b;
}

console.log("task 1: ");
console.log("addition(2, 3)      =", addition(2, 3));        // 5
console.log("addition(-10, 4)    =", addition(-10, 4));      // -6
console.log("addition(0.1, 0.2)  =", addition(0.1, 0.2));    // 0.30000000000000004

/* task 2 */ 
function bitwiseAND(a, b) {
  return a & b;
}

function bitwiseOR(a, b) {
  return a | b;
}

function bitwiseXOR(a, b) {
  return a ^ b;
}

console.log("\ntask 2:");
console.log("bitwiseAND(5, 3)  =", bitwiseAND(5, 3));   // 1   (101 & 011 = 001)
console.log("bitwiseOR(5, 3)   =", bitwiseOR(5, 3));    
console.log("bitwiseXOR(5, 3)  =", bitwiseXOR(5, 3));   
console.log("bitwiseAND(12, 10)=", bitwiseAND(12, 10)); 
console.log("bitwiseOR(12, 10) =", bitwiseOR(12, 10));  
console.log("bitwiseXOR(12, 10)=", bitwiseXOR(12, 10)); 

/* task 3 */
function addUp(a) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
}



console.log("\ntask 3:");
console.log("addUp(4)   =", addUp(4));    // 10
console.log("addUp(13)  =", addUp(13));   
console.log("addUp(600) =", addUp(600));  

/* task 4  */
function progressBar(a) {
  
  const percent = Math.max(0, Math.min(100, a));
  const filled = Math.floor(percent / 10);
  const empty = 10 - filled;

  return "#".repeat(filled) + "-".repeat(empty);
}

console.log("\ntask 4: ");
console.log("progressBar(10)  =", progressBar(10));  // #---------
console.log("progressBar(40)  =", progressBar(40));  
console.log("progressBar(49)  =", progressBar(49));  // ####------  (partial stays empty)
console.log("progressBar(0)   =", progressBar(0));   
console.log("progressBar(100) =", progressBar(100)); 
console.log("progressBar(150) =", progressBar(150)); 

/* task 5  */
function minMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}

console.log("\ntask 5:");
console.log("minMax([1,2,3,4,5,6]) =", minMax([1, 2, 3, 4, 5, 6])); // [1, 6]
console.log("minMax([-5, 0, 12])   =", minMax([-5, 0, 12]));       

/* task 6 */
function calculateReposStats(repos) {
  if (!Array.isArray(repos) || repos.length === 0) {
    return { maxStars: 0, minStars: 0, avgStars: 0, varianceScore: 0 };
  }

  
  const stars = repos.map(function (repo) {
    return repo.stars;
  });

  const maxStars = Math.max(...stars);
  const minStars = Math.min(...stars);

  const totalStars = stars.reduce(function (sum, value) {
    return sum + value;
  }, 0);

  const avgStars = Math.floor(totalStars / stars.length); 
  const varianceScore = Math.abs(maxStars - minStars);    

  return {
    maxStars: maxStars,
    minStars: minStars,
    avgStars: avgStars,
    varianceScore: varianceScore
  };
}

console.log("\ntask 6:");
const repos = [
  { name: "repo-a", stars: 12 },
  { name: "repo-b", stars: 45 },
  { name: "repo-c", stars: 3 }
];
console.log(calculateReposStats(repos));
/* Expected: { maxStars: 45, minStars: 3, avgStars: 20, varianceScore: 42 } */

/* task 7 */
function roundTo2(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function calculateFinalPrice(basePrice, taxRate, discountPercentage) {
  
  const rate = taxRate > 1 ? taxRate / 100 : taxRate;

  
  const discountedPrice = basePrice * (1 - discountPercentage / 100);

  
  const roundedDiscounted = roundTo2(discountedPrice);

  
  const taxAmount = roundedDiscounted * rate;
  const finalPrice = roundTo2(roundedDiscounted + taxAmount);


  const loyaltyPoints = Math.ceil(finalPrice);

  return {
    basePrice: basePrice,
    discountedPrice: roundedDiscounted,
    taxAmount: roundTo2(taxAmount),
    finalPrice: finalPrice,
    finalPriceFormatted: finalPrice.toFixed(2),
    loyaltyPoints: loyaltyPoints
  };
}

console.log("\ntask 7:");
console.log("calculateFinalPrice(100, 0.05, 10) =", calculateFinalPrice(100, 0.05, 10));
console.log("calculateFinalPrice(59.99, 0.17, 15) =", calculateFinalPrice(59.99, 0.17, 15));
console.log("calculateFinalPrice(0.1 + 0.2, 0.05, 0) =", calculateFinalPrice(0.1 + 0.2, 0.05, 0));

function paginateData(items, pageNumber, pageSize) {
  const list = Array.isArray(items) ? items : [];

  
  const size = (typeof pageSize === "number" && pageSize > 0)
    ? Math.floor(pageSize)
    : 5;

  const totalPages = Math.ceil(list.length / size);

  
  let currentPage = (typeof pageNumber === "number" && !isNaN(pageNumber))
    ? Math.floor(pageNumber)
    : 1;

  if (currentPage < 1) currentPage = 1;
  if (totalPages > 0 && currentPage > totalPages) currentPage = totalPages;

  const startIndex = (currentPage - 1) * size;
  const data = list.slice(startIndex, startIndex + size);

  return {
    data: data,
    currentPage: currentPage,
    totalPages: totalPages,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1
  };
}

console.log("\ntask 8:");
const allProducts = [
  "Laptop", "Mouse", "Keyboard", "Monitor",
  "Desk", "Chair", "Webcam", "Headphones"
];

const result = paginateData(allProducts, 2, 3);
console.log(result);


console.log("paginateData(allProducts, 1)      =", paginateData(allProducts, 1));      
console.log("paginateData(allProducts, 1, 3)   =", paginateData(allProducts, 1, 3));  
console.log("paginateData(allProducts, 3, 3)   =", paginateData(allProducts, 3, 3));   


const summaryLines = [
  "Task 1  addition(2, 3)              -> " + addition(2, 3),
  "Task 2  bitwiseAND/OR/XOR(5, 3)     -> " + bitwiseAND(5, 3) + ", " + bitwiseOR(5, 3) + ", " + bitwiseXOR(5, 3),
  "Task 3  addUp(4)                    -> " + addUp(4),
  "Task 4  progressBar(49)             -> " + progressBar(49),
  "Task 5  minMax([1,2,3,4,5,6])       -> " + JSON.stringify(minMax([1, 2, 3, 4, 5, 6])),
  "Task 6  calculateReposStats(repos)  -> " + JSON.stringify(calculateReposStats(repos)),
  "Task 7  calculateFinalPrice(100,5%,10%) -> " + JSON.stringify(calculateFinalPrice(100, 0.05, 10)),
  "Task 8  paginateData(allProducts,2,3)-> " + JSON.stringify(result)
];

const outputEl = document.getElementById("output");
if (outputEl) {
  outputEl.textContent = summaryLines.join("\n");
}
