import {Link} from 'react-router-dom';
import dinamo1 from './slike/dinamo1.png';
import osijek1 from './slike/osijek1.png';
import gorica1 from './slike/gorica1.png';
import rijeka1 from './slike/rijeka1.png';
import hajduk3 from './slike/hajduk3.png';
import lopta from './slike/lopta.png';
import "./App.css";

function Naslovna(){
    return(
        
        <div className="Naslovna">
         

            <div class="top"><h1>TOP 5 NAJBOLJIH KLUBOVA IZ 1.HNL:</h1></div>
        <center>
        <table>
            <tr>
                
                
                <td><Link to='/dinamo'><img src={dinamo1} className="dinamo1"/></Link></td>
                <br></br>
                <td><Link to='/osijek'><img src={osijek1} className="osijek1"/></Link></td>
                <br></br>
                <td><Link to='/gorica'><img src={gorica1} className="osijek1"/></Link></td>
                <br></br>
                
                </tr>
                <br></br>
                
                <tr>
                <td><Link to='/dinamo' class="link">DINAMO</Link></td>
                <br></br>
                <td><Link to='/osijek' class="link">OSIJEK</Link></td>
                <br></br>
                <td><Link to='/gorica' class="linkgorica">GORICA</Link></td>
                <br></br>
                
               
            </tr>
            <br></br>

            <tr>
            <td><Link to='/rijeka'><img src={rijeka1} className="rijeka1"/></Link></td>
                <br></br>
            <td><Link to='/hajduk'><img src={hajduk3} className="hajduk1"/></Link></td>
                <br></br>
            <td><Link to='/Najbolji'><img src={lopta} className="lopta"/></Link></td>
            <br></br>
            </tr>
            <br></br>
            <tr>
            <td><Link to='/rijeka' class="link">RIJEKA</Link></td>
                <br></br>
                <td><Link to='/hajduk' class="link">HAJDUK</Link></td>
                <br></br>
                <td><Link to='/Najbolji' class="linklopta">NAJBOLJI STRIJELCI<br></br> U 1.HNL</Link></td>
            </tr>
          
        </table>
        </center>
       
        </div>
    )
}

export default Naslovna;