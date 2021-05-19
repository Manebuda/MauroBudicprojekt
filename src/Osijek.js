import {Link} from 'react-router-dom';
import osijek1 from './slike/osijek1.png';
import slavonija from './slike/slavonija.jpg';
import "./App.css";

function Osijek(){
    return(
        <div className="osijek">
            
            <center>
            <a href="https://nk-osijek.hr/"><img src={osijek1} className="osijek1"/></a>
            <a href="https://nk-osijek.hr/" className="link1"><h1>NK OSIJEK</h1></a>
            </center>

            <div>
               <Link to="/" className="link1">NATRAG NA NASLOVNU</Link>
           </div>

            <h1>O klubu</h1>
        <p className="slova">
        NK Osijek je hrvatski nogometni klub iz Osijeka.
        Jedan je od najznačajnijih, te među navijačima i jedan on najpopularnijih nogometnih klubova u Hrvatskoj. 
        Prema istraživanjima za Osijek navija 5% ljudi u Hrvatskoj čime je po popularnosti treći klub u državi. Najviše navijača ima u Slavoniji.
        </p>

        <h1>Povijest</h1>
    <img src={slavonija} className="slavonija"/>

        <p className="slova">
        Nogometni klub Osijek osnovan je 27. veljače 1947. kao Fiskulturno društvo Proleter, nastalo spajanjem fiskulturnih društava Slavonija i Bratstvo. 
        Prvu utakmicu odigrao je 16. ožujka iste godine protiv gradskog suparnika Mladosti koja je poražena rezultatom 5:0. 
        Prvo redovno ligaško natjecanje u kojem je klub sudjelovao bilo je Osječko okružno prvenstvo kojeg je činilo pet momčadi, da bi potom uslijedilo natjecanje 
        u Drugoj saveznoj ligi. Osvajanjem prvog mjesta u Hrvatsko-slovenskoj ligi 1953. godine prvi je put izboreno sudjelovanje u Prvoj saveznoj ligi, i to nakon dva 
        neuspješna pokušaja 1950. i 1952. Stožerni igrači ove generacije bile su klupske legende Andrija Vekić, Franjo Rupnik, Dionizije Dvornić i Franjo Majer. 
        Uslijedile su tri uzastopne sezone u Prvoj saveznoj ligi, da bi nakon sezone 1955./56. klub ispao iz nje nakon što je, osim novčano, bio kažnjen i s tri utakmice neigranja (predaje).
        U jesen 1958. klub se sa svog dotadašnjeg igrališta Kraj Drave preselio u Gradski vrt, u kojem boravi i danas. Dana 1. rujna 1962. 
        osnovano je Sportsko društvo Slavonija koje je ujedinilo atletski, boksački i dizački klub. Dotadašnji Proleter je, pridruživši se društvu, 
        preuzeo njegovo ime postavši i sam Nogometni klub Slavonija. Navedeno društvo djelovalo je nekoliko godina, da bi se u proljeće 1967. raspalo, 
        nakon čega je novo ime nogometnog kluba postalo Nogometni klub Osijek. Promijenjene su i dotadašnje službene klupske boje jer su se umjesto dotadašnjih crvene i plave 
        počele rabiti bijela i plava, otprije poznate kao boje grada. Na terenima je nastavljena borba za povratak u prvoligaško društvo. Već u sezoni 1966./67. u zapadnoj skupini 
        Druge savezne lige osvojeno je drugo mjesto, a iduće sezone 1967./68. treće mjesto. Od sezone 1968./69. druga je liga bila podijeljena na četiri skupine, a Osijek se natjecao
         u sjevernoj, u kojoj je osvojio prvo mjesto u sezoni 1969./70. U međuskupnim kvalifikacijama je, međutim, uspješniji bio banjolučki Borac. I iduće sezone dogodilo se slično.
          Nakon izbacivanja Rijeke, Osijek je igrao protiv skopskog Vardara koji je pobjedama u oba susreta izborio ulazak u prvu ligu. Sezona 1972./73. ostala je zapamćena ponajprije po kvalifikacijskim susretima sa Zagrebom. Osijek je prethodno kao prvak sjeverne skupine igrao protiv Prištine kao drugoplasirane momčadi istočne skupine, te ju i izbacio. Uslijedila su dva susreta protiv Zagrepčana. Prva, osječka utakmica, odgođena za tri dana zbog trovanja Osijekovih igrača, završila je rezultatom 0:0. Uzvratna utakmica odigrana je 19. srpnja 1973. u Maksimiru pred gotovo 65.000 gledatelja (od toga oko 25.000 Osijekovih), čime je do danas ostala najposjećenija nogometna utakmica u hrvatskoj povijesti. Osijek je prvo gubio 1:0, da bi u drugom poluvremenu došao u vodstvo. Ipak, Zagreb je uspio izjednačiti i igrali su se jedanaesterci u kojima je Zagreb bio uspješniji i ukupnim rezultatom 6:5 izborio plasman u prvu ligu.
          Konačno, povratak u prvu ligu Osijek je izborio u sezoni 1976./77. kada je momčad čija su okosnica bili Vjekoslav Majer, Mile Dumančić, Stjepan Čordaš, 
          Ivica Grnja, Ivan Lukačević i Ljupko Petrović, a predvođena tandemom Andrije Vekića i Mate Kasača, sigurno osvojila prvo mjesto u zapadnoj skupini. 
          Zbog velike euforije nastale plasmanom u najviši razred, na mjestu dotadašnjeg starog stadiona u Gradskom vrtu izgrađen je i otvoren do danas nedovršen stadion. 
          Klub se u prvoj ligi zadržao do raspada Jugoslavije i Domovinskog rata, s izuzetkom sezone 1980./81. nakon koje izborio brzi povratak. U idućim sezonama nisu 
          ostvarivani značajniji plasmani, pa se pamte šesto mjesto u sezoni 1983./84. i poluzavršnica kupa 1989./90. Još je za istaknuti da je u sezoni 1988./89., 
          u kojoj je Osijek osvojio osmo mjesto, najbolji strijelac lige bio Osijekov napadač Davor Šuker, koji je postigao 18 pogodaka.
          Godine 1992. započela je nova hrvatska nogometna liga. Prvu sezonu u novoj ligi Osijek je završio kao treći, 
          iako je, zbog ratne opasnosti u Osijeku, sve domaće utakmice bio primoran odigravati izvan Osijeka i Gradskog vrta, diljem Slavonije. 
          U sezoni 1994./95. Osječani su, predvođeni prvim strijelcem lige Robertom Špeharom, u HNL-u osvojili treće mjesto, sa zaostatkom od šest bodova za prvakom, 
          uz razliku zabijenih i primljenih pogodaka +35. Tada je prvi puta u povijesti izboren i nastup u Europi, a protivnik u pretkolu bio je Slovan iz Bratislave.
           U prvoj utakmici odigranoj u Bratislavi slovački klub pobijedio je s visokih 4:0, a u uzvratu, koji je zbog ratne opasnosti odigran na zagrebačkom stadionu 
           u Kranjčevićevoj, s 2:0. Na nove europske nastupe čekalo se do sezone 1998./99., kada je Osijek nesretno ispao od belgijskog Anderlechta u drugom pretkolu Kupa 
           UEFA: nakon pobjede 3:1 u Osijeku, poraz 0:2 u Bruxellesu. Iste sezone predvođeni Juricom Vranješem, Osječani osvajaju prvi trofej: Hrvatski kup, pobijedivši Cibaliju. 
           Bila je to šokantna utakmica. Cibalia je vodila do 93. minute kada Mitu izjednačuje, a u produžetku Lasić zlatnim golom donosi kup u Osijek. U sezoni 1999./00. Osijek 
           je u Kupu UEFA ispao u prvom kolu od engleskog West Hama rezultatima 0:3 i 1:3, ali je u domaćem prvenstvu ponovno osvojio treće mjesto.
           Sezona 2000./01. pamti se kao jedna od boljih. Najprije je Osijek prvi put nakon 9 godina u Maksimiru pobijedio Dinamo. U Europi, točnije
           
        </p>
            <div>
               <Link to="/" className="link1">NATRAG NA NASLOVNU</Link>
           </div>

        </div>
        
    )
}

export default Osijek;