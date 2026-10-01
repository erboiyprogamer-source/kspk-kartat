# kspk-kartat

Tämän repon ainoa tehtävä on säilyttää ja julkaista K-S-P-K:n uNmINeD-maailmankartat.
Varsinainen sivusto on erillisessä repossa: `kspk-kotisivut`.

Julkaistaan GitHub Pagesissa osoitteessa:
https://erboiyprogamer-source.github.io/kspk-kartat/

## Sisältö

| Kansio | Kartta |
|---|---|
| `paiva/` | Päiväkartta |
| `yo/` | Yökartta |
| `5k/` | Suuri kartta (1:1, ei zoomia) |

Jokaisessa on uNmINeDin oma export **sekä `custom.markers.js`**, joka sisältää
koko merkkijärjestelmän (symbolit, kuvaliitteet, personointi, Supabase-yhteys,
realtime). uNmINeD ei ylikirjoita sitä renderöidessään.

## Kartan päivitys

1. Avaa tämä repo GitHub Desktopissa.
2. Aja uNmINeD ja aseta sen output-kansioksi **suoraan** tämän klonin
   `paiva/`, `yo/` tai `5k/`.
3. Commit + Push. Pages päivittyy noin minuutissa (Ctrl+F5 selaimessa).

### Älä koskaan poista koko karttakansiota
`custom.markers.js` ei tule uNmINeDin exportin mukana. Jos tyhjennät kansion,
menetät sen. Renderöi aina olemassa olevan kansion **päälle**.

Jos tarvitset puhtaan pöydän (kartta kutistuu tai tiiliformaatti vaihtuu),
poista vain `paiva/tiles/` — ei koko kansiota.

## Miksi kartat ovat omassa repossaan

Git säilyttää jokaisen vanhan tiilikuvan ikuisesti, eivätkä binäärikuvat
pakkaudu erotuksena edelliseen. Jokainen täysi karttapäivitys kasvattaa siis
historiaa suunnilleen oman kokonsa verran, vaikka julkaistu sivusto pysyy
samankokoisena. Omassa repossa tämä kasvu ei uhkaa sivuston koodihistoriaa.

## Kun repo joskus täyttyy

GitHub suosittelee repoa alle 1 Gt. Nykykoolla (~65 Mt / täysi päivitys) ja
kuukausittaisella tahdilla siihen menee yli vuosi — WebP-tiilillä useita vuosia.

Tyhjennys: **poista repo GitHubista ja luo heti uudelleen samalla nimellä.**
Osoite säilyy identtisenä eikä sivuston koodiin tarvitse koskea. Klonaa sen
jälkeen uusi klooni GitHub Desktopiin. Historiassa ei ole mitään säilytettävää —
vain uusin kartta merkitsee.

## Rajat

- yksittäinen tiedosto: 100 Mt
- julkaistu Pages-sivusto: 1 Gt
- kaista: 100 Gt/kk (kävijä lataa vain ruudulla näkyvät tiilet, ~1–3 Mt/kerta)
