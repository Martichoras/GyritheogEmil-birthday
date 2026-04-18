# Sådan tilføjer du gaveidéer 🎁

Filen hedder **gifts.json** og ligger i vores GitHub-mappe.

---

## Sådan redigerer du den

1. Gå til github.com/martichoras/GyritheogEmil-birthday
2. Klik på filen **gifts.json**
3. Klik på **blyant-ikonet** (Edit this file) øverst til højre
4. Rediger listen (se format nedenfor)
5. Klik **Commit changes** → **Commit changes** igen

Siden opdaterer sig selv inden for 1-2 minutter! ✅

---

## Format

Hver gave ser sådan ud:

```json
{
  "name": "Navn på gaven",
  "description": "Kort beskrivelse",
  "imageUrl": "https://link-til-billede.jpg",
  "link": "https://link-til-webshop.dk"
}
```

- **name** — hvad gaven hedder (påkrævet)
- **description** — kort beskrivelse (påkrævet)
- **imageUrl** — link til et billede (kan være tomt: `""`)
- **link** — link til webshop eller produktside (kan være tomt: `""`)

---

## Eksempel med flere gaver

```json
[
  {
    "name": "Bagestål",
    "description": "Til at bage brød med!",
    "imageUrl": "https://qookware.dk/cdn/shop/files/Bagestal_pae_grill.jpg",
    "link": ""
  },
  {
    "name": "Vinset",
    "description": "Et lækkert sæt vine.",
    "imageUrl": "",
    "link": "https://www.vinoble.dk"
  }
]
```

**Vigtigt:** Husk komma mellem gaverne, men IKKE efter den sidste! 
Og sørg for at hele listen starter med `[` og slutter med `]`.

---

## Billedlink — hvor finder jeg det?

1. Find produktet i en webshop
2. Højreklik på produktbilledet → **"Kopiér billedadresse"**
3. Indsæt linket i `"imageUrl"`
