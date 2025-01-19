

const DentalCareTable = () => {
  const data = [
    {
      krok: 'Čistenie zubov',
      coRobit: 'Použite mäkkú zubnú kefku a fluoridovú zubnú pastu. Čistite aspoň 2 minúty, ráno a večer.',
      tipy: 'Elektrická kefka môže zlepšiť efektivitu čistenia.',
    },
    {
      krok: 'Čistenie medzizubných priestorov',
      coRobit: 'Používajte dentálnu niť alebo medzizubné kefky na odstránenie zvyškov jedla a plaku.',
      tipy: 'Zvoľte správnu veľkosť medzizubnej kefky.',
    },
    {
      krok: 'Použitie ústnej vody',
      coRobit: 'Oplachujte ústnou vodou na posilnenie skloviny a prevenciu zápalov ďasien.',
      tipy: 'Vyberte si ústnu vodu bez alkoholu pre citlivé ďasná.',
    },
    {
      krok: 'Starostlivosť o jazyk',
      coRobit: 'Jemne vyčistite jazyk škrabkou alebo zadnou stranou kefky, aby ste odstránili baktérie.',
      tipy: 'Nepoužívajte prílišný tlak, aby ste nepoškodili jazyk.',
    },
    {
      krok: 'Pravidelné kontroly',
      coRobit: 'Navštívte zubného lekára a dentálneho hygienika aspoň dvakrát ročne na profesionálne čistenie a prehliadku.',
      tipy: 'Dodržiavajte plán prehliadok, aby ste predišli komplikáciám.',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#414F22', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Krok</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Čo robiť</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Tipy a pomôcky</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.krok}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.coRobit}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.tipy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DentalCareTable;