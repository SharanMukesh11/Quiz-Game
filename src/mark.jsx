
import './mark.css';


export default function Mark(total){
    console.log(total);
    return(
        <>
        <div className="markfull">
            <div className="markdiv">
                <h1> Your Total Score </h1>
               <center>  <h1> " {total.score} "</h1> </center>
            </div>

        </div>
        </>
    )
}