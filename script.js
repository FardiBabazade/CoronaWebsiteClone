
let i=0;

document.getElementById('iconbar').addEventListener('click',function()
{
     i++;
     if(i%2==1)
     {
          document.getElementById('idul').style.display="block";
          document.getElementById('blog-top-id').style.marginTop="27em";
     }
    else{
     document.getElementById('idul').style.display="none";
     document.getElementById('blog-top-id').style.marginTop="0";
    }
})

function func()
{
     document.getElementById('blog-top-id').style.marginTop="0";
}