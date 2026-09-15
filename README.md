# Tehtävä 1 - Comment Generator

Tämä sovellus tekee vastauksen YouTube-kommenttiin tekoälyn avulla.

Käyttäjä lähettää kommentin ja halutun tyylin palvelimelle.
Palvelin lähettää promptin tekoälylle ja palauttaa vastauksen käyttäjälle.

## API

POST:

```text
/api/v1/comments
```

## Esimerkki 1 - Muodollinen

### Syöte

```
{
	"text": "I strongly disagree with this video.",
	"tone": "formal"
}
```

### Vastaus

```
{
	"response": "Thank you for sharing your perspective. We value diverse opinions and encourage constructive discussions."
}
```

## Esimerkki 2 - Hauska

### Syöte

```
{
	"text": "This video was really helpful!",
	"tone": "funny"
}
```

### Vastaus

```
{
	"response": "LISÄÄ TÄHÄN POSTMANISTA SAAMASI FUNNY-VASTAUS"
}
```

## Testatut tyylit

Testasin eri vastaustyylejä:

- friendly
- funny
- formal
- sarcastic
- professional

Eri tyylit vaikuttavat tekoälyn vastaukseen. Vastaus ei kuitenkaan aina ole täysin samanlainen kuin pyydetty tyyli.

## Testaus

Testasin API:n toimintaa Postmanilla.

Käytin POST-pyyntöä:

```
http://localhost:3001/api/v1/comments
```

Kun pyyntö onnistui, Postman näytti:

```
200 OK
```

Tämä tarkoittaa, että palvelin vastaanotti pyynnön ja palautti vastauksen onnistuneesti.
