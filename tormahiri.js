
(function(obj){

obj=obj || {};

obj.array=function(){
	this.arr=[];
  this.set=function(kimm){
       this.arr.push(kimm);

  }// set end
  this.get=function  (argument) {
  return this.arr[argument];
  }
  this.all=function(){

      this.arr.forEach(function(k){

      	console.log(k);
      })

  }

}
obj.yahxi={name:"tormahiri",age:23};
obj.objectkaytur=function(){


	for(var key in obj.yahxi){

		console.log(obj.yahxi[key]);
	}
}
obj.kixilar=[

{name:"tormahiri",age:23},
{name:"uycyber",age:21},
{name:"appmahiri",age:19}

]
obj.people=function(){


	for(var j=0; j<obj.kixilar.length;j++){

		console.log(obj.kixilar[j].name)
	}
}

return obj;


})(window.obj={});
