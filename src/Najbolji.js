import {Link} from 'react-router-dom';
import lopta from './slike/lopta.png';
import ramon from './slike/ramon1.png';
import orsic from './slike/orsic.png';
import mario from './slike/mario.png';
import lovric from './slike/lovric1.png';
import franko from './slike/franko.png';
import "./App.css";
import Igraci from "./Igraci.js";
import { Component } from 'react';

export class Najbolji extends Component{
    state={
        ime: "",
        lozinka: "",}
        onSubmit=e=>{e.preventDefault();document.getElementById("da").innerHTML="PRIJAVLJENI STE KAO:"+this.state.ime;}
 
    render()
    
{ const igrac={
    mjesto: "1.",
    slika:<img src={ramon} className="ramon"/>,
    ime_i_prezime:"Ramon Mierez",
    datum:"13. svi 1997.",
    golovi:22,
    klub:"NK Osijek",
    pozicija:"napadač",
    ocjena:7.33}

    const igrac1={
    mjesto: "2.",
    slika:<img src={orsic} className="ramon"/>,
    ime_i_prezime:"Mislav Oršić",
    datum:"29. pro 1992.",
    golovi:16,
    klub:"GNK Dinamo",
    pozicija:"vezni igrač",
    ocjena:7.34}

    const igrac2={
    mjesto: "3.",
    slika:<img src={mario} className="ramon"/>,
    ime_i_prezime:"Mario Gavranović",
    datum:"24. stu 1989.",
    golovi:16,
    klub:"GNK Dinamo",
    pozicija:"napadač",
    ocjena:7.28}

    const igrac3={
    mjesto: "4.",
    slika:<img src={lovric} className="ramon"/>,
    ime_i_prezime:"Kristijan Lovrić",
    datum:"1. pro 1995.",
    golovi:15,
    klub:"HNK Gorica",
    pozicija:"vezni igrač",
    ocjena:7.34}

    const igrac4={
    mjesto: "5.",
    slika:<img src={franko} className="ramon"/>,
    ime_i_prezime:"Franko Andrijašević",
    datum:"22. lip 1991.",
    golovi:12,
    klub:"HNK Rijeka",
    pozicija:"napadač",
    ocjena:7.23
    }




     return(
    <div className="najbolji">

        <center>
            <img src={lopta} className="lopta"/>
            <h1>NAJBOLJI STRIJELCI U 1.HNL</h1>
            </center>
            <div>
               <Link to="/" className="link1">NATRAG NA NASLOVNU</Link>
           </div>
           <br></br>

            <Igraci ja={igrac} ja1={igrac1} ja2={igrac2} ja3={igrac3} ja4={igrac4}></Igraci>

            <br></br>
            
            <h3>LOG IN</h3>
        <form onSubmit>
          <input placeholder= 'USERNAME' value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})}/>
      <br></br>
          <input placeholder= 'PASSWORD' type="password" value={this.state.lozinka} onChange={e=>this.setState({lozinka: e.target.value})}/> 
        <br></br>
          <button onClick = {e=>this.onSubmit(e)}>POTVRDI</button>
          <p id="da"></p>
        </form>
      
            <div>
               <Link to="/" className="link1">NATRAG NA NASLOVNU</Link>
           </div>
            
           <div class="form">
   
            
    </div>
    </div>
    
    
);


}
}

export default Najbolji;