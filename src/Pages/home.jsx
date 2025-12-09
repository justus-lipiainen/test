import NavBar from '../components/NavBar';
import $ from "jquery";

function Home() {
    console.log("Home page loaded");
    return (
        <>
            <NavBar />
            <div className="mainContent">
                <p>
                    Kaukana arjen metelistä – tarina joka kasvaa jokaisesta sivusta

                    On olemassa hetkiä, jotka eivät kysy lupaa saapua. Ne vain ilmestyvät – kuin valo, joka hiipii huoneeseen varhain aamulla, ennen kuin kukaan on ehtinyt päättää, millainen päivästä tulee. Usein juuri näistä hetkistä syntyy kaikki merkittävä: ideat, jotka ravistelevat rutiineja, unelmat, jotka vaativat tulla nähdyiksi, ja tarinat, jotka haluavat tulla kerrotuiksi.

                    Tämä paikka, tämä sivu, on yksi niistä hetkistä. Se on lähtöpiste polulle, jota kukaan ei ole vielä tallannut. Ehkä se kertoo sinusta, ehkä se kertoo meistä kaikista – niistä, jotka etsivät vielä sanoja kaikelle sille, mikä liikkuu pinnan alla.

                    Jokainen tarina alkaa pienestä signaalista. Toisinaan se on hiljainen kuiske, joka tuntuu melkein kuin muisto tulevaisuudesta. Toisinaan se on räiskyvä voima, joka sinkoaa meidät liikkeelle tavalla, jota emme ole osanneet ennakoida. Mutta tarinan voima ei synny alusta – vaan siitä, minne se on matkalla.

                    Täällä sanat saavat kulkea vapaasti. Ne rakentavat maailmaa pala palalta, kerroksista jotka eivät peitä toisiaan, vaan paljastavat sen, mikä on olennaista: muutoksen mahdollisuuden. Sillä jokainen päivä, jokainen ajatus ja jokainen valittu suunta muovaa meitä enemmän kuin huomaammekaan.

                    Kuvittele tie, joka kääntyy horisontin edessä. Et tiedä, mitä kulman takana odottaa, mutta juuri siksi jatkat kulkemista. Ehkä löydät sieltä uusia mahdollisuuksia, ehkä vastaukset, joita et tiennyt etsiväsi. Tai ehkä jotain vieläkin arvokkaampaa – uuden tavan nähdä itsesi.

                    Tämä sivu on kutsu siihen. Se kutsuu pysähtymään, mutta ei jähmettymään. Se kutsuu unelmoimaan, mutta myös rakentamaan. Se kutsuu sinut kirjoittamaan omaa tarinaasi tavalla, joka tuntuu täysin omalta, täysin oikealta.

                    Sillä jokainen meistä kantaa mukanaan ääntä, joka haluaa tulla kuulluksi.
                    Täällä sille on tilaa.
                    Täällä se saa kasvaa.

                    Tervetuloa – et ole eksynyt.
                    Olet juuri siellä, missä tarinasi jatkuu.
                </p>
            </div>
        </>
    );
}

export default Home;
