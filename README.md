# Les Aperitifs: Una Piattaforma Interattiva di Cocktail

## 1. Titolo del Progetto e Overview

**Titolo:** Les Aperitifs: Esplora il Mondo dei Cocktail

**Overview:**
"Les Aperitifs" è un'applicazione web statica e interattiva progettata per permettere agli utenti di esplorare un catalogo di cocktail. Il progetto offre una homepage accattivante, una sezione dedicata alla scoperta dei cocktail con funzionalità di filtro avanzate e una pagina "Chi Siamo" con statistiche animate e recensioni dei clienti. L'obiettivo principale è fornire un'interfaccia utente semplice e intuitiva per la navigazione e la ricerca di cocktail, rendendo l'esperienza piacevole e informativa.

Il progetto è sviluppato interamente lato client utilizzando tecnologie web standard (HTML, CSS, JavaScript) e sfrutta librerie moderne per migliorare l'esperienza utente, come Bootstrap per il layout responsivo, Boxicons per le icone e Swiper.js per i caroselli. I dati dei cocktail sono gestiti tramite un file JSON locale, che viene caricato e manipolato dinamicamente da JavaScript.

## 2. Struttura del Progetto

La repository "Progetto_Cocktail" è organizzata in modo lineare, con tutti i file principali nella directory radice e una sottocartella per le risorse multimediali.

```
.
├── aboutUs.html
├── aboutUs.js
├── cocktail.html
├── cocktail.js
├── cocktail.json
├── index.html
├── main.js
├── media/
│   ├── 360_F_165729135_F6Svm7ymFgIx3dGHFxp4NCAoY84w03y5.jpg
│   └── fresh-cocktails-with-ice-lemon-lime-fruits-generative-ai_188544-12370.avif
└── style.css
```

### Descrizione dei File e delle Cartelle:

*   **`index.html`**: La pagina principale (homepage) del sito. Presenta il titolo del progetto e include la barra laterale di navigazione.
*   **`cocktail.html`**: La pagina dedicata alla lista dei cocktail. Contiene la logica di visualizzazione, filtro e ricerca dei cocktail, con dettagli accessibili tramite modali.
*   **`aboutUs.html`**: La pagina "Chi Siamo". Include sezioni sui "numeri" del locale con animazioni di conteggio e un carosello di recensioni dei clienti.
*   **`cocktail.json`**: Un file JSON che funge da database per i cocktail. Contiene un array di oggetti, ciascuno rappresentante un cocktail con proprietà come `difficulty`, `price`, `ingredients`, `instructions` e `name`.
*   **`style.css`**: Il foglio di stile globale del progetto. Definisce l'aspetto visivo di tutti gli elementi comuni (sidebar, navbar) e specifici delle singole pagine (card dei cocktail, sezioni "Chi Siamo").
*   **`main.js`**: Lo script JavaScript specifico per `index.html`. Gestisce la funzionalità di toggle (apertura/chiusura) della sidebar.
*   **`cocktail.js`**: Lo script JavaScript principale per la pagina `cocktail.html`. Si occupa del recupero dei dati da `cocktail.json`, della generazione dinamica dell'interfaccia utente (radio button, card, modali) e dell'implementazione delle logiche di filtro e ricerca.
*   **`aboutUs.js`**: Lo script JavaScript principale per la pagina `aboutUs.html`. Gestisce la funzionalità di toggle della sidebar, l'animazione dei contatori numerici tramite `IntersectionObserver` e la generazione dinamica delle recensioni con integrazione Swiper.js.
*   **`media/`**: Cartella contenente le risorse multimediali come immagini di sfondo e placeholder.

## 3. Prerequisiti e Setup

Il progetto "Les Aperitifs" è un'applicazione web statica e non richiede un ambiente di sviluppo complesso o un server specifico per essere eseguito localmente.

### Prerequisiti:

*   Un browser web moderno (es. Chrome, Firefox, Edge, Safari).
*   Git (opzionale, per clonare il repository).

### Istruzioni di Setup:

Segui questi semplici passaggi per installare ed eseguire il progetto sul tuo computer:

1.  **Clonare il Repository (opzione consigliata):**
    Apri il tuo terminale o prompt dei comandi e esegui il seguente comando:
    ```bash
    git clone https://github.com/federicamudu/Progetto_Cocktail.git
    ```
    Questo creerà una cartella `Progetto_Cocktail` contenente tutti i file del progetto.

2.  **Scaricare il Codice Sorgente (alternativa):**
    Se non hai Git installato, puoi scaricare il progetto come file ZIP direttamente da GitHub:
    *   Vai su [https://github.com/federicamudu/Progetto_Cocktail](https://github.com/federicamudu/Progetto_Cocktail)
    *   Clicca sul pulsante verde "Code".
    *   Seleziona "Download ZIP".
    *   Estrai il contenuto del file ZIP in una cartella a tua scelta.

3.  **Eseguire il Progetto:**
    *   Naviga nella directory principale del progetto (`Progetto_Cocktail`).
    *   Apri il file `index.html` con il tuo browser web preferito (es. fai doppio clic sul file, oppure trascinalo nella finestra del browser).

    Il progetto sarà ora in esecuzione e potrai iniziare a navigare tra le diverse sezioni.

## 4. Architettura e Moduli Principali

L'architettura del progetto è quella di una **Single Page Application (SPA) multi-pagina statica**, dove ogni sezione principale è una pagina HTML separata che carica i propri script e stili.

### Architettura Generale:

*   **Frontend-Centric:** L'intera logica e presentazione avvengono lato client. Non c'è un backend server dinamico che genera le pagine o serve API.
*   **Dati Statici:** I dati dei cocktail sono forniti da un file JSON statico (`cocktail.json`) e caricati da JavaScript.
*   **Modularità (funzionale):** Sebbene non sia un framework moderno con componenti veri e propri, il codice è organizzato in file JavaScript distinti per ogni pagina, gestendo le funzionalità specifiche di quella vista.

### Tecnologie e Librerie Principali:

*   **HTML5:** Struttura semantica delle pagine web.
*   **CSS3:** Stili e layout, inclusa la responsività.
*   **JavaScript (ES6+):** Logica interattiva, manipolazione del DOM, fetching dati.
*   **Bootstrap 5.3:** Framework CSS per un layout responsivo e componenti UI predefiniti (navbar, accordion, modali, grid system).
*   **Boxicons:** Libreria di icone vettoriali per migliorare l'estetica e la navigabilità.
*   **Swiper.js 11:** Libreria JavaScript per la creazione di caroselli touch-friendly, utilizzata per le recensioni nella pagina "Chi Siamo".

### Moduli e Componenti Chiave:

#### 4.1. `index.html` (Homepage)

*   **Scopo:** Punto di ingresso del sito, presenta il nome del progetto in modo visivamente accattivante.
*   **Struttura:** Contiene una navbar per dispositivi mobili e una sidebar per desktop, entrambe comuni a tutte le pagine per la navigazione.
*   **Script:** Carica `main.js` per gestire il comportamento della sidebar.

#### 4.2. `cocktail.html` (Lista Cocktail)

*   **Scopo:** Visualizzare i cocktail disponibili e permettere agli utenti di filtrarli e cercare.
*   **Interfaccia Utente:**
    *   **Sidebar/Navbar:** Come per `index.html`, per la navigazione.
    *   **Filtri (Accordion Bootstrap):**
        *   **Difficoltà:** Radio button generati dinamicamente da JavaScript.
        *   **Prezzo:** Slider range input.
        *   **Ricerca per parola:** Input testuale.
    *   **Cards dei Cocktail:** Visualizza ogni cocktail con nome, difficoltà, prezzo e un pulsante per i dettagli.
    *   **Modali Dettagli:** Si aprono cliccando su "ShakeIt!" e mostrano ingredienti e istruzioni.

*   **Script (`cocktail.js`):**
    *   **Sidebar Toggle:** Logica per l'apertura/chiusura della sidebar (ripetuta rispetto a `main.js` e `aboutUs.js`).
    *   **`fetch('./cocktail.json')`**: Recupera asincronamente i dati dei cocktail dal file JSON.
    *   **`setRadios()`**:
        *   Estrae tutte le difficoltà uniche dai dati dei cocktail.
        *   Crea dinamicamente i radio button per ciascuna difficoltà (più un'opzione "All").
        *   Li appende al `radioWrapper` nella UI.
    *   **`showCards(array)`**:
        *   Pulisce il contenitore delle card (`cardsWrapper`).
        *   Itera sull'array di cocktail fornito.
        *   Per ogni cocktail, crea un elemento `div` con la classe `cocktail-card` e lo popola con nome, difficoltà, prezzo e un pulsante "ShakeIt!".
        *   Appende la card al `cardsWrapper`.
    *   **`showDetails(array)`**:
        *   Pulisce il contenitore delle modali (`modalWrapper`).
        *   Itera sull'array di cocktail.
        *   Per ogni cocktail, crea una struttura di modale Bootstrap (`.modal.fade`) con ID univoco.
        *   Popola la modale con il nome del cocktail, ingredienti e istruzioni.
        *   Appende la modale al `modalWrapper`.
    *   **`setInputPrice()`**:
        *   Determina il prezzo massimo tra tutti i cocktail.
        *   Imposta il valore `max` dello slider `inputRange` a questo prezzo massimo.
        *   Aggiorna la visualizzazione del prezzo corrente.
    *   **Funzioni di Filtro (`filterByDifficulty`, `filterByPrice`, `filterByWord`):**
        *   Ciascuna funzione riceve un array di cocktail e restituisce un nuovo array filtrato in base al criterio specifico (difficoltà selezionata, prezzo massimo, testo di ricerca nel nome).
    *   **`globalFilter()`**:
        *   Questa è la funzione orchestratrice dei filtri.
        *   Applica i filtri in sequenza: prima per difficoltà, poi per prezzo, poi per parola chiave.
        *   Chiama `showCards()` e `showDetails()` con l'array di cocktail risultante per aggiornare la UI.
    *   **Event Listeners:** Vengono aggiunti listener agli elementi di input (radio button, slider, campo di testo) per invocare `globalFilter()` ogni volta che un filtro viene modificato.

#### 4.3. `aboutUs.html` (Chi Siamo)

*   **Scopo:** Fornire informazioni sull'azienda, inclusi dati numerici e recensioni dei clienti.
*   **Interfaccia Utente:**
    *   **Sidebar/Navbar:** Per la navigazione.
    *   **"I nostri numeri":** Contatori numerici animati (`firstNumber`, `secondNumber`, `thirdNumber`).
    *   **"Le nostre recensioni":** Un carosello di recensioni implementato con Swiper.js.

*   **Script (`aboutUs.js`):**
    *   **Sidebar Toggle:** Logica per l'apertura/chiusura della sidebar.
    *   **`createInterval(finalNumber, total, time)`**:
        *   Funzione utility per creare un effetto di conteggio animato da 0 fino a `total`.
        *   Usa `setInterval` per incrementare progressivamente il numero visualizzato.
    *   **`IntersectionObserver`**:
        *   Monitora la visibilità di un elemento (in questo caso, `thirdNumber`).
        *   Quando l'elemento entra nella viewport, attiva l'animazione dei contatori tramite `createInterval` per dare un effetto "wow" all'utente.
        *   Utilizza un flag `check` e un `setTimeout` per evitare che l'animazione si ripeta troppo frequentemente.
    *   **Array `reviews`**: Un array statico di oggetti JavaScript che contiene i dati delle recensioni (nome, descrizione, valore in stelle).
    *   **Generazione Recensioni:**
        *   Itera sull'array `reviews`.
        *   Per ogni recensione, crea un `div` con la classe `swiper-slide` e lo popola con i dettagli della recensione.
        *   Utilizza `createStar()` per generare dinamicamente le icone delle stelle piene/vuote.
        *   Appende le slide al `swiperWrapper`.
    *   **`createStar(stars)`**:
        *   Funzione che prende un numero di stelle (es. 5) e restituisce una stringa HTML con le icone `bi-star-fill` e `bi-star` di Bootstrap Icons.
    *   **Inizializzazione Swiper**:
        *   Configura e inizializza il carosello Swiper per la sezione recensioni, con effetti come `coverflow`, `loop` e `pagination`.

#### 4.4. `cocktail.json`

*   **Struttura:** Un array di oggetti JavaScript, dove ogni oggetto rappresenta un singolo cocktail.
*   **Proprietà:**
    *   `numberId`: ID numerico (non utilizzato nei filtri attuali, ma utile per l'identificazione).
    *   `difficulty`: Livello di difficoltà (da 1 a 5).
    *   `price`: Prezzo del cocktail.
    *   `ingredients`: Array di stringhe che descrivono gli ingredienti.
    *   `instructions`: Stringa con le istruzioni per la preparazione.
    *   `name`: Nome del cocktail.

## 5. Guida all'Uso

Questa sezione fornisce istruzioni su come interagire con l'applicazione "Les Aperitifs".

### 5.1. Navigazione Generale

1.  **Apertura del Sito:** Dopo aver eseguito il setup, apri `index.html` nel tuo browser.
2.  **Barra Laterale (Sidebar - Desktop):**
    *   Sulla sinistra, vedrai una barra laterale. Clicca sull'icona a forma di "hamburger" (`bx bx-menu`) in alto a sinistra per espandere o contrarre la sidebar.
    *   Utilizza i link (`Home`, `Cocktail`, `AboutUs`) per navigare tra le diverse sezioni del sito.
3.  **Navbar (Mobile):**
    *   Su dispositivi mobili o schermi stretti, la sidebar si nasconde e appare una navbar in alto.
    *   Clicca sull'icona dell'hamburger (`navbar-toggler-icon`) per aprire il menu di navigazione e selezionare la pagina desiderata.

### 5.2. Pagina "Home" (`index.html`)

*   Questa è la pagina di benvenuto. Ti saluta con il titolo "Les Aperitifs". Non ci sono interazioni specifiche oltre alla navigazione.

### 5.3. Pagina "Cocktail" (`cocktail.html`)

Questa è la sezione più interattiva, dove puoi esplorare il catalogo dei cocktail.

1.  **Visualizzazione Cocktail:**
    *   All'apertura della pagina, vedrai una lista di schede (cards) che mostrano tutti i cocktail disponibili, con il loro nome, difficoltà e prezzo.
2.  **Filtrare per Difficoltà:**
    *   Sulla sinistra (o in alto su mobile), nella sezione "DIFFICULTY", seleziona una delle opzioni radio:
        *   **All:** Mostra tutti i cocktail.
        *   **Numeri (es. 1, 2, 3, 4, 5):** Mostra solo i cocktail con la difficoltà selezionata.
    *   La lista dei cocktail si aggiornerà automaticamente in base alla tua scelta.
3.  **Filtrare per Prezzo:**
    *   Nella sezione "PRICE", troverai uno slider (`Price range`).
    *   Trascina il cursore dello slider per impostare un prezzo massimo. Il numero sotto lo slider (`#numberPrice`) mostrerà il valore selezionato.
    *   La lista dei cocktail si aggiornerà in tempo reale, mostrando solo quelli con un prezzo pari o inferiore al valore impostato.
4.  **Ricerca per Parola Chiave:**
    *   Nella sezione "WORD", c'è un campo di testo (`Thirsty?`).
    *   Digita il nome o parte del nome di un cocktail che stai cercando.
    *   La lista si filtrerà dinamicamente, mostrando solo i cocktail il cui nome include il testo digitato (la ricerca non è case-sensitive).
5.  **Combinare i Filtri:**
    *   Puoi utilizzare tutti e tre i filtri contemporaneamente. L'applicazione applicherà i filtri in sequenza, restringendo progressivamente la lista dei risultati.
6.  **Visualizzare i Dettagli del Cocktail:**
    *   Per ogni cocktail visualizzato, clicca sul pulsante **"ShakeIt!"**.
    *   Si aprirà una finestra modale (pop-up) che mostrerà i **Ingredients** (ingredienti) e le **Method** (istruzioni) dettagliate per quel cocktail.
    *   Clicca su "Cheers!" o sul pulsante di chiusura (X) per tornare alla lista.

### 5.4. Pagina "AboutUs" (`aboutUs.html`)

*   **"Chi Siamo":** Presenta una sezione introduttiva.
*   **"I nostri numeri":** Quando scorri verso questa sezione, noterai tre contatori numerici (`cocktail venduti`, `clienti soddisfatti`, `recensioni ricevute`) che si animeranno, conteggiando da zero al valore finale, offrendo un effetto visivo coinvolgente.
*   **"Le nostre recensioni":**
    *   Sotto i numeri, troverai un carosello (`swiper`) che mostra le recensioni dei clienti.
    *   Puoi navigare tra le recensioni scorrendo (su touch) o utilizzando le frecce di navigazione (se disponibili) o i pallini di paginazione. Ogni recensione mostra il nome del cliente, una descrizione e un rating a stelle.
