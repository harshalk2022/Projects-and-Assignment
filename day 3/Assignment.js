const largestNum = (a, b, c, d, e) =>{
    if(a>b && a>c && a>d && a>e){
        alert('Largest number is : ' +a);
    }

    if(b>a && b>c && b>d && b>e){
        alert('Largest number is : ' +b);
    }

    if(c>a && c>b && c>d && c>e){
        alert('Largest number is : ' +c);
    }

    if(d>a && d>b && d>c && d>e){
        alert('Largest number is : ' +d);
    }

    if(e>a && e>b && e>c && e>d){
        alert('Largest number is : ' +e);
    }
}

const a = 3;
const b = 7;
const c = 9;
const d = 8;
const e = 5;

largestNum(a, b, c, d, e);