//Leet code task 1
/*

let nums = [3,3], target = 6;

var twoSum = function(nums, target) {
  for(let i=0;i<nums.length;i++){
    let j=i;
    
      for(let k=0;k<nums.length-1;k++){
        j++
        let m=j%nums.length;
        if(nums[i]+nums[m]==target){
          if(nums[i]==nums[m]){
             console.log([nums.indexOf(nums[i]),nums.indexOf(nums[m],i+1)]);
            return [nums.indexOf(nums[i]),nums.indexOf(nums[m],i+1)];

          }else{
            console.log([nums.indexOf(nums[i]),nums.indexOf(nums[m])]);
            return [nums.indexOf(nums[i]),nums.indexOf(nums[m])];
          };
            
          
        };
      };
      
      
  };
};

twoSum(nums,target);

*/
// end task 1