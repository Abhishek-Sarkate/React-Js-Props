import './Myinfo.css';


function Myinformation(porps)
{
    
    return (
    
<div>

<div className="Myinfo">
<ol>

                <li>Name : {porps.name}</li>
                <li>Age : {porps.age}</li>
                <li>Mobileno : {porps.Mobileno}</li>


</ol>




</div>

</div>

    );

}
export default Myinformation;