

export default function Igrac({ja,ja1,ja2,ja3,ja4}){
    return(
        <div className="App">
            <table border="0" width="100%">
                <tr className="tr1">
                    <td className="mjesto">mjesto</td>
                    <td className="slika">slika</td>
                    <td className="ime">ime i prezime</td>
                    <td className="golovi">datum rođenja</td>
                    <td className="golovi">golovi</td>
                    <td className="golovi">klub</td>
                    <td className="golovi">pozicija</td>
                    <td className="golovi">ocjena</td>
                    
                    

                </tr>

                
                <tr>
                    <td className="mjesto">{ja.mjesto}</td>
                    <td>{ja.slika}</td>
                    <td className="ime">{ja.ime_i_prezime}</td>
                    <td className="golovi">{ja.datum}</td>
                    <td className="golovi">{ja.golovi}</td>
                    <td className="golovi">{ja.klub}</td>
                    <td className="golovi">{ja.pozicija}</td>
                    <td className="golovi">{ja.ocjena}</td>
                </tr>

                <tr>
                    <td className="mjeste">{ja1.mjesto}</td>
                    <td>{ja1.slika}</td>
                    <td className="ime">{ja1.ime_i_prezime}</td>
                    <td className="golovi">{ja1.datum}</td>
                    <td className="golovi">{ja1.golovi}</td>
                    <td className="golovi">{ja1.klub}</td>
                    <td className="golovi">{ja1.pozicija}</td>
                    <td className="golovi">{ja1.ocjena}</td>
                </tr>

                <tr>
                    <td className="mjesto">{ja2.mjesto}</td>
                    <td>{ja2.slika}</td>
                    <td className="ime">{ja2.ime_i_prezime}</td>
                    <td className="golovi">{ja2.datum}</td>
                    <td className="golovi">{ja2.golovi}</td>
                    <td className="golovi">{ja2.klub}</td>
                    <td className="golovi">{ja2.pozicija}</td>
                    <td className="golovi">{ja2.ocjena}</td>
                </tr>

                <tr>
                <td className="mjesto">{ja3.mjesto}</td>
                <td>{ja3.slika}</td>
                <td className="ime">{ja3.ime_i_prezime}</td>
                <td className="golovi">{ja3.datum}</td>
                <td className="golovi">{ja3.golovi}</td>
                <td className="golovi">{ja3.klub}</td>
                <td className="golovi">{ja3.pozicija}</td>
                <td className="golovi">{ja3.ocjena}</td>
                </tr>

                <tr>
                    <td className="mjesto">{ja4.mjesto}</td>
                    <td>{ja4.slika}</td>
                    <td className="ime">{ja4.ime_i_prezime}</td>
                    <td className="golovi">{ja4.datum}</td>
                    <td className="golovi">{ja4.golovi}</td>
                    <td className="golovi">{ja4.klub}</td>
                    <td className="golovi">{ja4.pozicija}</td>
                    <td className="golovi">{ja4.ocjena}</td>
                </tr>
                
            </table>
            
        </div>
    );
}