import {Link} from 'react-router-dom';
import dinamo1 from './slike/dinamo1.png';
import "./App.css";
import grb from './slike/grb.png';
import franjo from './slike/franjo.jpg';


function Dinamo(){
    return(
        <div className="dinamo">
            <center>
            <a href="https://gnkdinamo.hr/"><img src={dinamo1} className="dinamo1"/></a>
            
            <a href="https://gnkdinamo.hr/" className="link1"><h1>GNK DINAMO ZAGREB</h1></a>
            </center>
            <div>
               <Link to="/" className="link1">NATRAG NA NASLOVNU</Link>
           </div>
            <h1>O klubu</h1>
        <p className="slova">
            Građanski nogometni klub Dinamo Zagreb je hrvatski nogometni klub iz Zagreba. Od osnutka Republike Hrvatske najtrofejniji je klub u državi. 
            Nadimci kluba su modri, zagrebački plavi, plavi lavovi, purgeri. Maskota kluba je lav Maksi. Domaće utakmice igra na Stadionu Maksimir. 
            Dinamo je poznat po svojim vjernim i fanatičnim navijačima Bad Blue Boysima. 
            Klub je cijenjen u svijetu po svojoj nogometnoj školi koja se zadnjih godina smatra za jednu od najboljih u Europi.
            1. HŠK Građanski osnovan je 26. travnja 1911. godine. Nakon što je komunistička vlast 1945. 
            godine dekretom ukinula najpopularnije predratne zagrebačke nogometne klubove Građanski, 
            HAŠK i Concordia zbog igranja nogometnog prvenstva za vrijeme NDH, Nogometni klub Dinamo osnovan je 9. lipnja 1945. 
            kao nogometna sekcija Fiskulturnog društva Dinamo, koja od 1949. godine djeluje kao samostalni nogometni klub. 
            Od Građanskog je Dinamo preuzeo plavu boju dresova, većinu igrača i navijača te nadimak purgeri, a i grb kluba je napravljen po uzoru na grb Građanskog.
            Promjene imena kluba u HAŠK Građanski i Croatia Zagreb nisu dobro primljene ratnih devedesetih godina 20. stoljeća, 
            današnje ime usvojeno je na sjednici skupštine kluba 12. travnja 2011. godine kad se ime Nogometni klub Dinamo 
            Zagreb mijenja u Građanski nogometni klub Dinamo Zagreb želeći naglasiti povezanost sa Građanskim.
            U bogatoj povijesti kluba osvojili su 32 naslova prvaka u pet država te 25 nacionalnih kupova. 
            Dinamo je jedini hrvatski klub koji je uspio osvojiti neki europski trofej, Kup velesajamskih gradova 1967. godine, 
            preteču Kupa UEFA-e. Klub je od osnivanja športski simbol grada Zagreba. Najviše odigranih utakmica, 802, za Dinamo ima Dražen Ladić, 
            a najbolji je strijelac Dražan Jerković s 322 postignuta gola. Najduže je kapetan bio Tomislav Crnković.
            Najveći sportski rival kluba je splitski Hajduk. Dinamo i Hajduk igraju Vječni derbi oko prestiža u Hrvatskoj. 
            Do danas su odigrali 219 utakmica u svim natjecanjima, Dinamo je pobijedio 96 puta, a Hajduk 68 puta. 
            Zbog dugotrajnog rivalstva koje traje od 1920-ih godina i utakmica Građanskog i Hajduka, kao dva najpopularnija i najtrofejnija kluba u zemlji
             čije utakmice izazivaju velike tenzije, mnogi svrstavaju Vječni derbi među najznačanije nogometne derbije na Svijetu. </p>
            <br></br>
            <br></br>

            <h1>Povijest</h1>

            <p className="slova">
            <img src={grb} className="grb"/>
            Klub nastavlja tradiciju Prvog hrvatskog građanskog športskog kluba (Građanski) utemeljenog u travnju 1911. godine. 
            Tijekom 34 godine djelovanja šest puta je osvojio naslov prvaka Kraljevine Jugoslavije i NDH (1923., 1926., 1928., 1937., 1940. i 1943.).
             Pod tim nazivom nastupao je do svibnja 1945. godine, a potom je rasformiran odlukom nove komunističke vlasti, a sva bogata pismohrana je vandalski uništena.
              Umjesto Građanskog utemeljeno je tada Fiskulturno društvo Dinamo, a pet godina kasnije osamostaljuje se njegov nogometni klub. 
              Dinamo je od Građanskog baštinio veći dio svoje tradicije (grb i boja).
              U prostorijama Elektre u Gundulićevoj ulici, osnovan je 9. lipnja 1945. godine Dinamo. Klub je dobio ime po uzoru na moskovski Dinamo. 
              Ondašnji zagrebački športski komesar Ivica Medarić, koji je najprije igrao u HAŠK-u, potom i u Građanskom, 
              je predložio ime Dinamo koje je prihvaćeno zbog bliskih odnosa sa SSSR-om.
              <img src={franjo} className="franjo"/>
              Nakon osnivanja klubu su pristupili svi najbolji i najpopularniji igrači Građanskog: Urch, Wölfl, Kokotović, Lešnik, Cimermančić, Pleše, Antolković, Belošević, 
              Jazbinšek, Reiss, te njegovi juniori: Bučar, Ferković, Martinec, Kukec, Gereš, Čonč i Režek te trener Márton Bukovi. Od igrača HAŠK klubu su pristupili Čajkovski, 
              Kacian, Lojen, Peričić. Od njih samo je Čajkovski dugo ostao u Maksimiru – čak jedanaest godina. Dinamo je od Građanskog naslijedio plavu boju dresova i 
              status najpopularnijeg zagrebačkog nogometnog kluba, nadimak purgeri, navijačku bazu, a od 1969. godine i grb je vrlo sličan grbu Građanskog.
              U razdoblju nakon Drugoga svjetskog rata bio je glavni predstavnik zagrebačkog nogometa te jedan od četiriju najuspješnijih klubova u SFRJ uz splitski Hajduk 
              te beogradske klubove Crvena zvezda i Partizan koji su zbog dominacije u jugoslavenskom nogometu dobili naziv velika četvorka. Osvojio je jugoslavenska prvenstva 1948., 
              1954., 1958., 1982. i kupove 1951., 1960., 1963., 1965., 1969., 1980. i 1983.
            Dinamo je dana 25. lipnja 1991. godine pod ravnanjem tadašnjeg predsjednika Josipa Šoića promijenio ime u HAŠK Građanski. 
            Bio je to pokušaj bijega od komunističkog imena Dinamo i povratak tradicijama dvaju slavnih prethodnika. Navijači nikad nisu prihvatili ovaj hibrid 
            i nesretno ime je napušteno 1993. godine. Godine 1993. ime je promijenjeno u Croatia Zagreb. Bio je to potez kojim je tadašnji hrvatski politički vrh
             predvođen predsjednikom Franjom Tuđmanom želio distancirati od komunističke prošlosti i naziva kluba. Predsjednik Tuđman je uspješnim nastupom kluba u Europi, 
             kojeg su državne tvrtke obilno financirale, pod imenom Croatia želio promovirati novostvorenu hrvatsku državu.
             Pokušaj predsjednika Tuđmana stvoriti u Maksimiru klub nacionalnog jedinstva funkcionirao je samo za njegova života. U drugoj polovici 
             devedesetih Dinamo osvaja pet hrvatskih prvenstava u nizu: 1996., 1997., 1998., 1999. i 2000. Iako je Croatia igrajući dvaput u Ligi prvaka ostavila dubok trag 
             u maksimirskoj povijesti, ni ona se nije uspjela nametnuti javnosti i navijačima. Navijači Dinama osobito Bad Blue Boysi su se žestoko protivili i zahtjevali vraćanje
              imena Dinamo.
            </p>

           

           <div>
               <Link to="/" className="link1">NATRAG NA NASLOVNU</Link>
           </div>

        </div>
    )
}

export default Dinamo;