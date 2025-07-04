# 💖 PatsyGenGlitterDomains

**PatsyGenGlitterDomains** es un generador de nombres de dominio web, creado con JavaScript puro y un enfoque visual divertido. Ayuda a crear combinaciones únicas y memorables usando listas de palabras y extensiones populares. Además, incluye funcionalidades interactivas para copiar o descargar los resultados con estilo.

---

## 🐾 Personajes

- 🐶 **Patsy** – una pug adorable y sabia que te guía a encontrar tu dominio ideal.
- 💻 **JavaScript** – la mente detrás de todo este generador.
- 🧑‍💻 **Tú** – la persona que está a punto de encontrar el nombre perfecto para su proyecto digital.

---

## ✨ ¿Qué hace este proyecto?

Genera nombres de dominio automáticamente combinando:

- **Pronombres:** `the`, `our`
- **Adjetivos:** `great`, `big`
- **Sustantivos:** `jogger`, `racoon`
- **Extensiones:** `.com`, `.io`, `.es`

Y además:

- Te da sugerencias rápidas por tipo: divertido, profesional, mágico y hack.
- Muestra frases de apoyo y motivación con cada dominio.
- Permite copiar los resultados o descargarlos como un archivo `.txt`.

---

## 🧪 ¿Cómo lo uso?

1. Abre el archivo `index.html` en tu navegador.
2. Escribe una palabra clave o haz clic en **"Enviar"** para generar todos los dominios posibles.
3. Revisa las combinaciones y usa los botones para **copiar** o **descargar** tus favoritos.

---

## 📁 Estructura del proyecto

📦 patsy-gen-glitter-domains/
├── index.html ← Interfaz principal
├── style.css ← Estilos del diseño
├── app.js ← Lógica de generación
└── README.md ← Este documento

---

## 🧠 ¿Qué hace el archivo `app.js`?

El archivo `app.js` es el corazón del proyecto. Su función es generar nombres de dominio combinando diferentes listas de palabras y permitir que el usuario los vea, copie o descargue.

### Paso a paso:

1. **Define listas de palabras:**
   - Usa arrays como `pronouns`, `adjectives`, `nouns`, `extensions`.

2. **Genera TODAS las combinaciones posibles:**
   - Usa bucles `for` anidados para mezclar todas las combinaciones.
   - Ejemplo: `the` + `big` + `racoon` + `.com` → `thebigracoon.com`.

3. **Agrega frases divertidas a cada resultado:**
   - Cada dominio va acompañado de una frase aleatoria como:
     > ✨ ourgreatjogger.io  
     > 🧠 Nivel CEO desbloqueado.

4. **Responde a eventos del usuario:**
   - **Enviar:** genera todas las combinaciones.
   - **Borrar:** limpia el resultado.
   - **Copiar:** copia los dominios al portapapeles.
   - **Descargar:** genera un `.txt` con todos los dominios.

5. **Sugerencias personalizadas:**
   - Usa el botón de tipo (Divertido, Profesional, etc.) para ver dominios con prefijos o extensiones especiales.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Amor por el diseño y los detalles ✨

---

## 🎯 Contexto del proyecto

Este generador fue desarrollado como una versión creativa y visualmente atractiva del ejercicio original del bootcamp de [4Geeks Academy](https://github.com/4GeeksAcademy/vanillajs-hello). El objetivo fue combinar programación funcional con diseño amigable e interacción más divertida.

---

## 👩‍💻 Autora

Hecho con dedicación, color y código por  
**[@alejandrabarcena](https://github.com/alejandrabarcena)** 🐾

> "Porque si vas a emprender... que al menos el dominio esté bonito." — Patsy
