# Guessing-Number-Game

/*
Opis:
Cilj je napraviti igru pogađanja nasumične kombinacije cifara od 1 do 4. Kombinacija se generiše prilikom učitavanja stranice.
Obezbediti korisniku unos pokušaja pomoću klika na dugmiće (za svaku cifru po jedno dugme).
Kada se neka od cifara unese bilo klikom bilo preko tastature to dugme treba disable-ovati kako bismo sprečili višestruko unošenjeiste cifre. S toga pokušaj pogotka mora da sadrži najviše 4 cifre (1 pojavljivanje svake cifre).
Interfejs treba da sadrži dugme koje služi za proveru unete kombinacije, da li je ista sa generisanom, tj da li je pogodak. 
Dugme se aktivira klikom. 
Bitna stvar je da je dugme vidljivo uvek ali disable-ovano dok se ne unesu sve 4 cifre (pokušaj).
Korisnik ima pravo da pokušava neograničen broj puta, s tim da neuspešni pokušaji ostaju vidljivi u interfejsu izlistani jedan ispod drugog.
Takođe, treba olakšati korisniku ubacivanjem `indikatora pogodataka` u interfejs. Trebalo bi grafički da se prikazuje koja je cifra
na svom mestu u pokušaju u odnosu na generisanu kombinaciju. Recimo crveno slovo ili simbol 'X' ukoliko cifra nije na mestu, a zeleno 'O'
ukoliko jeste. Primer:
Izgenerisana kombinacija: 
3241
Pokušaj:
1234
Indikator:
XOXX
Kada korisnik pogodi kombinaciju, trebalo bi da se dese sledeće stvari:
- Pojavljuje se alert dijalog sa čestitkom i porukom da je kombinacija pogođena. Opciono se može ubaciti koliko je pokušaja bilo potrebno
- Pojavljuje se dugme za kreiranje nove igre koje je sve vreme postojalo ali je bilo sakriveno. Ono praktično služi za reset stanja aplikacije i interfejsa. Dakle: 
    * svi dugmići 1 - 4 se vraćaju u enabled stanje, 
    * svi pokušaji se brišu iz HTML, 
    * indikator se resetuje na početno neutralno stranje (recimo 4 crtice '-' ), 
    * generiše se nova kombinacija u pozadini, 
    * dugme za proveru pogotka prelazi u disabled stanje,
    * dugme za novu igru se sakriva
Taskovi:
1. Generisanje kombinacije,
2. Inderfejs:
    - dugmići za unos brojeva,
    - indikator pogodaka,
    - dugme za proveru,
    - poruka kada se pogodi kombinacija,
    - dugme za novu igru
3. Logika igre:
    - svaki broj može da se unese samo jednom po kombinaciji ,
    - kombinacija može da ima max 4 broja,
    - kombinacija može da se proverava tek kada su sva 4 broja uneta,
    - dugme za novu igru se pojavljuje tek kada je kombinacija pogođena,
    - klik na dugme za novu igru enable-uje 1 - 4 dugmiće, disable-uje check dugme i briše sve pokušaje osim prvog, a njegov tekst setuje na prazan string
    - ukoliko kombinacija nije dobra ona ostaje, a sledeća se dodaje ispod
*/
