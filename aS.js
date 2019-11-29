let a=[[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 0, 1, 2],

]

let b=[[-9, -8, -7, -6],
[-1, -2, -3, -4],
[-9, 0, -1, -2],

]
if(a.length === b.length){

function sum(a,b)
{
    let m=[]
     m=new Array(a.length);
     for (let i =0 ;i<m.length;i++){
         m[i]= new Array(a[i].length) 
       for(let j=0 ; j<m.length; j++)
         {
             m[i][j]=a[i][j]+b[i][j]
         }
         
     }
     return m
    }
    console.table(sum(a,b))
     }else
    {
    console.table("undefined")
    }
        
      
     
    
 

