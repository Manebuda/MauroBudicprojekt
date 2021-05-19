import {Link} from 'react-router-dom';
import rijeka1 from './slike/rijeka1.png';
import kvarner from './slike/kvarner.jpg';
import kvarner1 from './slike/kvarner1.jpg';
import "./App.css";


function Rijeka(){
    return(
        <div className="rijeka">
        <center>
        <a href="http://www.nk-rijeka.hr"><img src={rijeka1} className="rijeka1"/></a>
        <a href="http://www.nk-rijeka.hr" className="link1"><h1>HNK RIJEKA</h1></a>
        </center>
        <div>
           <Link to="/" className="link1">NATRAG NA NASLOVNU</Link>
       </div>
        <h1>O klubu</h1>
            <p className="slova">HNK Rijeka je hrvatski nogometni klub iz Rijeke. Jedan je od najuspješnijih hrvatskih klubova po tradiciji i značenju u hrvatskom nogometu. 
                Klub je osnovan 1906. godine pod imenom Club sportivo Olimpia. Domaće utakmice igra na stadionu Rujevica, a do 2015. godine Rijeka je nastupala na stadionu Kantrida.
                HNK Rijeka je osvojila jedan naslov prvaka Hrvatske iz 2017. godine dok je sedam puta bila doprvak. Osvajač je 7 nacionalnih kupova, 2 jugoslavenska kupa te 5 Hrvatskih kupova,
                 jednog Hrvatskog nogometnog superkupa, te Balkanskog kupa osvojenog 1978. godine. Najveći rivali HNK Rijeke su momčadi splitskog Hajduka s kojim igra Jadranski derbi,
                  zagrebačkog Dinama, pulske Istre te gradskog rivala Orijenta.
                Prema istraživanjima za Rijeku navija 4 % ljudi u Hrvatskoj čime je po popularnosti četvrti klub u državi. Navijačka skupina HNK Rijeke Armada je osnovana 1987. godine </p>
           
           <h1>Povijest</h1>
           <p className="slova">
           <img src={kvarner} className="kvarner"/>
           HNK Rijeka nastaje 1946. godine pod imenom Kvarner. Osnivači kluba bili su tada vodeći športski djelatnici u gradu: Drago Harapin, Edo Radetti, Renato Tich itd. 
           Prvi predsjednik u povijesti kluba bio je dr. Ljudevit Sošić, a prvi trener Hans Bloch. 
           Prvu utakmicu u svojoj povijesti Rijeka je odigrala na domaćem terenu protiv splitskog Hajduka. Rijeka je pobijedila rezultatom 2:0, 
           a prvi pogodak u povijesti kluba postigao je Rinaldo Petronio. Pod imenom Kvarner se klub natječe samo do 1954. godine kada ga se mijenja u NK Rijeka.
            Pod tim imenom on će ostvariti neke od svojih najvećih uspjeha u europskim natjecanjima kada jednom dolazi do četvrtzavršnice,
            <img src={kvarner1} className="kvarner1"/>
             a jednom do osmine završnice europskih kupova. U doba Domovinskog rata NK Rijeka vrši malenu promjenu imena u Hrvatski nogometni klub Rijeka. 
             U to je vrijeme HNK Rijeka jasno zauzela antijugoslavenski stav kao pravi hrvatski klub. Klupska maskota je morski pas, popularno nazvan pešekan.
             U novoj državi Hrvatskoj, od 1991. godine, Rijeka je uvijek završavala u vrhu HNL. Posebno se ističu rezultati kada su 2017. bili prvi,
              1999., 2006., 2014. i 2018. su bili drugi, a 2004., 2009. i 2013. na trećem mjestu.
              U sezoni 1998./99. je skandaloznim suđenjem u zaključnom dijelu prvenstva, u Ligi za prvaka, HNK Rijeka ostala bez svog prvog naslova prvaka. 
              U posljednjim minutama zadnjeg kola prvenstva, poništen je regularan pogodak HNK Rijeke protiv Osijeka, kojim bi Rijeka pobijedila Osijeka i postala prvakom. 
              Rijeka se za naslov prvaka Hrvatske borila još i 2005., te 2006. godine u Hrvatskoj, te nekoliko puta u Jugoslaviji. HNK Rijeka je jedan od tri najveća hrvatska kluba,
             što potvrđuje i podatak da Rijeka konstantno igra u prvoj ligi još od 1974. godine, kao i pet osvojenih nacionalnih kupova, 
             jedan osvojeni superkup te brojni europski uspjesi.
             Rijeka je u sezoni 2004./05., imala najboljeg strijelca Prve HNL, Tomislava Ercega, sa 17 pogodaka.Leon Benko bio je najbolji stijelac nacionalnog prvenstva 2012./13.
              U ligi bivše države najbolji strijelac prvenstva bio je Milan Radović sa 26 postignutih golova 1981. godine.
              Tijekom siječnja 2012. dogovoreno je da će talijanski poslovnjak Gabriele Volpi, ujedno i vlasnik fondacije Social Sport, preuzeti 70 % vlasničkog udjela HNK Rijeke.
             Ostatak od 30 % udjela ostao je u rukama Grada Rijeke (25 %), odnosno malih dioničara, navijača (5 %). 
             Volpi je već vlasnik talijanskog nogometnog kluba "La Spezie" koja je izborila ulazak u Seriu B za narednu sezonu te je bio i vlasnik vaterpolskih klubova 
             Pro Recco i Primorje (prvaci i doprvaci Europe). Rijeka je osigurala trofej hrvatskog prvaka sezone 2016./17. pobijedivši Cibaliju 21. svibnja 2017.,
              a zadnjih 5 utakmica su odigrane 27. svibnja 2017. godine. Rijeka je te sezone osvojila i četvrti Hrvatski nogometni kup (ukupno 6 u povijesti)
             ostvarivši povijesnu duplu krunu.
           </p>

           <div>
           <Link to="/" className="link1">NATRAG NA NASLOVNU</Link>
       </div>
        </div>
    )
}

export default Rijeka;