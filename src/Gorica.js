import {Link} from 'react-router-dom';
import gorica1 from './slike/gorica1.png';
import radnik from './slike/radnik.png';
import "./App.css";

function Gorica(){
    return(
        <div className="Gorica">
            <div className="gorica">
            <center>
            <a href="https://www.hnk-gorica.hr/"><img src={gorica1} className="gorica1"/></a>
            <a href="https://www.hnk-gorica.hr/" className="link1"><h1>HNK GORICA</h1></a>
            </center>

            <div>
               <Link to="/" className="link1">NATRAG NA NASLOVNU</Link>
           </div>

            <h1>O klubu</h1>
        <p className="slova">
        Hrvatski nogometni klub Gorica, koji se obično naziva HNK Gorica ili jednostavno Gorica, hrvatski je nogometni klub sa sjedištem u gradu Velika Gorica, 
        smještenom južno od glavnog grada Hrvatske Zagreba. Domaće utakmice igraju na Gradskom stadionu Velika Gorica, čiji je kapacitet 5.200.
         Osvojili su naslov Hrvatske druge nogometne lige 2010-11. I u početku su promovirani u Hrvatsku prvu nogometnu ligu, ali im je oduzeta prva licenca.
          Klub sebe smatraju duhovnim nastavkom bivših članova Prve HNL NK Radnik, koji su bankrotirali i raspušteni 2009. Međutim, pravno je HNK Gorica zaseban 
          i odvojen klub i nema pravo polagati pravo na povijest starog NK Radnik.
        </p>

        <h1>Povijest</h1>
    

        <p className="slova">
        <img src={radnik} className="radnik"/>
        U Velikoj Gorici i regiji Turopolja postoji dugotrajna nogometna tradicija. Prvi organizirani klubovi osnovani su tijekom 1930-ih, ali najistaknutiji nogometni klub, 
        NK Radnik, stvoren je 1945., neposredno po završetku Drugog svjetskog rata.
        Radnik je tijekom Jugoslavije uživao prosječan uspjeh, a najimpresivniji rezultati postigli su osamostaljenjem Hrvatske. S novoizgrađenim stadionom za 1987. 
        ljetnu univerzijadu Radnik su bili prvaci prvog ikad hrvatskog drugoligaša. Pritom su promovirani u najvišu hrvatsku ligu. Radnik se tamo natjecao dvije sezone,
         1992.-93. I 1993.-94. Nakon ispadanja, Radnik je započeo pad, postižući osrednje rezultate zbog kojih su četiri sezone igrali od četvrtog ranga hrvatskog 
         nogometnog prvenstva (od 2002. do 2006.).
         Tijekom 2009. godine Radnik je upao u ozbiljne financijske probleme i jedino rješenje za očuvanje velikogoričke vrhunske i najpopularnije
          nogometne momčadi bilo je spajanje s jednim od financijski stabilnih lokalnih nogometnih klubova. Savršen partner pronađen je u NK Polet iz obližnjeg sela Buševec.
           NK Polet imao je dugogodišnju nogometnu tradiciju i bio je natjecateljski član Treće HNL. U ljeto 2009. dogovoreno je spajanje Radnika i Poleta i formiran je HNK Gorica.
         Kao primarni zadatak klub je izjavio osvajanje naslova prvaka i dostizanje Hrvatske druge nogometne lige nakon dugogodišnjeg izbivanja. Cilj je postignut tijekom prve sezone, 
         Gorica je pobijedila HNL Treća zapad i postigla promaknuće u Drugu HNL za sezonu 2010-11.
         Prije sezone 2010-11 izjavilo se da ambicije kluba nisu velike i da će svi biti zadovoljni završnicom u prvom poluvremenu. No kako je sezona odmicala, 
         Gorica se pokazala najboljim klubom u ligi, što je kulminiralo osiguranjem naslova dva kola prije kraja sezone. Kao 2. HNL prvakinja, Gorica je zaradila mjesto u
          hrvatskoj prvoj ligi, što je kasnije odbijeno nakon što im je oduzeta licenca za najvišu razinu.Gorica je osvojila Hrvatsku drugu nogometnu ligu 2017-18 nakon čega 
          su napokon dobili dozvolu za nastup u najvišem rangu nakon dugo godina odbijanja. Njihov debi u ligi (kao HNK Gorica) u sezoni 2018–19 bio je jedan od najneiznenađujućih
           i najimpresivnijih dijelova lige, osvojivši 59 bodova, postali su najbolji debitanti lige u povijesti, kao i pobijedivši europske konkurente Hajduk Split i Osijek dva
            puta i viceprvaci Rijeke tri puta, iako su i dalje završili na 5. mjestu, na samo 3 boda od plasmana u kvalifikacijske runde Europske lige. Mnogi strani igrači bez 
            ugovora kupljeni su besplatno prije sezone, što se pokazalo izvanrednim potpisima, ponajviše Łukasz Zwoliński, Kristijan Lovrić i Iyayi Atiemwen, koji je bio treći
             na ljestvici igrača Prve HNL 2018. godine i prodan Dinamo iz Zagreba tijekom prijelaznog roka 2019. za rekordnu naknadu.


        </p>

            <div>
               <Link to="/" className="link1">NATRAG NA NASLOVNU</Link>
           </div>

        </div>
        </div>
    )
}

export default Gorica;