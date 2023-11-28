// class Animal {
//   static belly = [];
//   eat(e) {
//     Animal.belly.push(e);
//   }
// }
// let a = new Animal();
// a.eat("food");
// a.eat("error");
// a.eat(1);


// console.log(a); 

var nums = [3,2,4], target = 6;
var output=[];
var twoSum = function(nums, target) {

    for(let i=0;i<nums.length;i++){
      var j=i;
      
        for(let k=0;k<nums.length-1;k++){
          j++
          let m=j%nums.length;
          if(nums[i]+nums[m]==target){
            
              console.log(nums.indexOf(nums[i]),nums.indexOf(nums[m]));
              return;
            
          }
        }
        
        
    }
    
};

twoSum(nums,target);



