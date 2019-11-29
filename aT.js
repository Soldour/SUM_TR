let a=[[1, 2, 3.5],
[-10, 0, -7],
[91, 6, 4]]
function transpose(a)
{
    let t=[];
    t=new Array(a.length);
    for (let i =0 ;i<t.length;i++){
        t[i]= new Array(a[i].length)
        for(let j=0 ; j<t.length; j++)
         {
             t[i][j]=a[j][i]
         }
    }

return t

    
    }

console.table(transpose(a))
