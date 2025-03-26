var name=['Harkirat','Sameer','Rohan','Menakshi']
console.log(name)

var Objects={
  Name:"harkirat",
  Address:'Gaindakot'
}
console.log(Objects['Name'])

var obj=[
  {
    Name:'harkirat',
    Age:44
  },
  {
    Name:"sameer",
    Age:22
  },
  {
    Name:"Menakshi",
    Age:26
  }
  ]
  for(let i=0;i<obj.length;i++){
    if(obj[i]["Age"]>25){
  console.log(obj[i]['Name'])
    }
  }
      