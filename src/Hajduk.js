import {Link} from 'react-router-dom';
import hajduk3 from './slike/hajduk3.png';
import Hajduk1911 from './slike/Hajduk1911.png';
import hajduk1951 from './slike/hajduk1951.png';
import hajduk1961 from './slike/hajduk1961.jpg';
import hajduk1970 from './slike/hajduk1970.jpg';
import hajduk1990 from './slike/hajduk1990.png';
import hajdukgrb from './slike/hajdukgrb.jpg';
import Hajduk100 from './slike/Hajduk100.jpg';
import "./App.css";


function Hajduk(){
    return(
        <div className="hajduk">
            <div className="hajduk">
            <center>
            <a href="https://hajduk.hr/"><img src={hajduk3} className="hajduk1"/></a>
            <a href="https://hajduk.hr/" className="link1"><h1>HNK HAJDUK SPLIT</h1></a>
            </center>
            <div>
               <Link to="/" className="link1">NATRAG NA NASLOVNU</Link>
           </div>
            <h1>O klubu</h1>
            <p className="slova">
            Hrvatski nogometni klub Hajduk Split (HNK Hajduk Split) je hrvatski nogometni klub iz Splita. Najveće je športsko društvo u Splitu i jedno od većih u Hrvatskoj. 
            Domaće utakmice igra na Gradskom stadionu u Poljudu. Kroz bogatu povijest klub je osvojio 18 prvenstava u pet država, 15 nacionalnih kupova i 5 superkupova, 
            a najveći europski uspjesi su mu tri četvrtzavršnice Lige prvaka te po jedna poluzavršnica Kupa UEFA i Kupa pobjednika kupova.
            Hajduk je u veljači 1911. u Pragu osnovala skupina splitskih studenata. 
            Oko kluba su se okupljali prohrvatski, puntarski građani, pristaše sjedinjenja kraljevine Dalmacije s kraljevinom Hrvatskom i Slavonijom.
             Odatle i pridjev Hrvatski u nazivu kluba, Hrvatski grb kao dio Hajdukovog grba te zastava kluba sa crvenom i plavom bojom te bijelim natpisom Hajduk u sredini. 
             Tradicionalna boja dresa je bijela s plavim donjim dijelom što simbolizira bijelo jedro broda i plavu boju Jadranskog mora. 
             Nadimci kluba su Bili, Hajduci, Majstori s mora. Godine 2011. Hajduk je velikom proslavom obilježio 100 godina od osnutka.
             Po istraživanju GfK Hrvatska iz 2005. godine za Hajduk navija približno 24 % ljudi u Hrvatskoj ili preko 1 060 000 navijača. 
             Za Hajduk navija 76 % ljudi u Dalmaciji što je ujedno i najveći postotak podrške za nogometni klub u jednoj regiji u Hrvatskoj.
              Osim tradicionalno najveće podrške u Dalmaciji klub ima velik broj navijača u svim dijelovima Hrvatske, među Hrvatima u BiH i među hrvatskom dijasporom u inozemstvu.
             Navijačka skupina Hajduka, Torcida, osnovana je 1950. godine te je najstarija navijačka grupa u Hrvatskoj i Europi. 
             Torcida je poznata po fanatičnoj podršci i vjernosti klubu. Hajduk je 2016. imao 43 339 članova.
             Hajduk je, uz zagrebački Dinamo, jedan od dva najpopularnija i najtrofejnija kluba u Hrvatskoj. 
             Nogometna utakmica između ova dva velika suparnika naziva se Vječni derbi, 
             a zbog velikog rivaliteta i navijačkih tenzija mnogi Vječni derbi svrstavaju među najveće nogometne derbije na svijetu.
             Rivalstvo splitskih bilih i zagrebačkih plavih traje još od 1913. godine kada su Hajduk i Građanski odigrali prvu utakmicu. 
             Do danas je odigrano 218 derbija, a Hajduk je slavio 68 puta.
             Jedan je od rijetkih klubova koji nikada nisu ispali iz prve lige. Prva su momčad na svijetu koja je obišla svih pet kontinetata.
            </p>

            <br></br>
            <h1>Grbovi</h1>
            <p className="slova">
            Hajdukov grb je hrvatski šahirani grb u krugu, obrubljena plavom vrpcom, s na svakoj strani po 2 okomite crte. 
            Iznad šahovnice je natpis Hajduk, a ispod Split. Šahirani grb se sastoji od 25 crveno bijelih polja koja su iste širine kao i plava vrpca.
            O značenju okomitih crta klub se još nikad nije službeno izjasnio. 
            Prema jednoj verziji one predstavljaju osnivače kluba Stellu, Kaliternu, Šakića i Ivaniševića. 
            Druge tvrdnje su da se radi o znakovima jednakosti koji povezuju grad Split s Hajdukom, ili da su to zapravo navodnici imenu Hajduk, 
            s obzirom da su se u to vrijeme, po pravopisu, imena svih udruga i organizacija morala pisati pod navodnicima. 
            <br></br><br></br>
            <table>
                
                   
                <tr>
                    <td><img src={Hajduk1911} className="hajduk1911"/></td><br></br>
                    <td><img src={hajduk1951} className="hajduk1911"/></td><br></br>
                    <td><img src={hajduk1961} className="hajduk1911"/></td><br></br>
                    <td><img src={hajduk1970} className="hajduk1911"/></td><br></br>
                    <td><img src={hajduk1990} className="hajduk1911"/></td><br></br>
                    <td><img src={hajdukgrb} className="hajduk1911"/></td><br></br>
                    <td><img src={Hajduk100} className="hajduk1911"/></td>
                    
                </tr>
                    <td>Grb do 1944. </td><br></br>
                    <td>Klupski grb 1951. godine</td><br></br>
                    <td>Klupski grb 1961. godine</td><br></br>
                    <td>Grb od 1960. do 1970. </td><br></br>
                    <td>Grb od 1970. do 1990.</td><br></br>
                    <td>Grb od 1990.</td><br></br>
                    <td>Jubilarni grb u 2011.</td>

                <tr>

                </tr>

                
                
                </table>
                <br></br><br></br>
                Grb je 1911. osmislio Vjekoslav Ivanišević, a najstarija sestra Fabijana i Luke Kaliterne, 
                Ana Kaliterna, je odnijela taj crtež u samostan gdje su časne sestre ručno izvezle 20-30 komada. 
                Grb se prvi puta u javnosti pojavio 1926. godine prilikom izvedbe Tijardovićeve operete 'Kraljica baluna' kao dio scenografije. 
                Hajduk je dugo igrao bez grba na dresu. 1939. se pojavljuje izvorna inačica.  
                Nakon toga odigrao je utakmicu u Bariju 1944. s crvenom zvijezdom u sredini igrajući pod drugim imenom i od tada je izbačen hrvatski šahirani grb. 
                Nakon toga godinama na dresu stoji samo crvena petokraka kao simbol komunizma sve do 1990. godine, 
                kada u posljednjem prvenstvu Jugoslavije klub nastupa sa starim grbom, s hrvatskim šahiranim grbom, koja se održala do danas. U međuvremenu se javlja i druga inačica, 
                s hrvatskim šahiranim grbom, ali uz zvijezdu petokraku u gornjem dijelu grba, na spoju vijenaca.
                Zajedno s petokrakom promijenjene su crte sa strane, te umjesto njih postavljena godina osnutka kluba - 1911, 
                što se dugo zadržalo te često bilo predmet zabune, pa tako i danas igrači igraju noseći grb s crtama, 
                dok je na istočnoj tribini stadiona obojenim klupama napravljen grb s brojkama 19 i 11. 
            </p>
            
            <h1>Stadion</h1>
            <p className="slova">
            HNK Hajduk igra svoje utakmice na Gradskom stadionu na Poljudu od 1979. godine. 
            Stadion Poljud, poznat pod nadimkom Poljudska ljepotica, nalazi se u splitskoj četvrti Poljudu na sjeverozapadu grada. Izgrađen je 1979. 
            godine u sklopu izgradnje športskih objekata 8. Mediteranskih igara. Autor projekta je bio istaknuti riječki arhitekt dr. Boris Magaš. 
            Stadion je utjecao na arhitektonske vizure brojnih svjetskih stadiona u Italiji, Japanu (Kobe) i Maleziji. 
            Nakon münchenskog Olimpijskog stadiona, izazvao je najviše pozornosti stručne javnosti na polju športske arhitekture.
            Od 1911. do 1979. utakmice je igrao na igralištu zvanom "Kod stare Plinare", gdje danas igra RK Nada. Teren se izvorno zvao "Kraljeva njiva". 
            Otkako je preselio na Poljud, staro igralište se u govoru u Splitu naziva "Stari Plac" ili "Staro Hajdukovo". 
            Stadion se nalazio kraj rodilišta čime je praktično svakom novom Splićaninu to bio prvi vanjski objekt koji je ugledao. 
            Na sjevernoj tribini stadiona nalazila se navijačka skupina Torcida, na njemu je odigrano 3148 utakmica, palo 9542 golova i osvojeno 11 prvenstava i 6 kupova.
            
            </p>

            <div>
               <Link to="/" className="link1">NATRAG NA NASLOVNU</Link>
           </div>

        </div>
        </div>
    )
}

export default Hajduk;