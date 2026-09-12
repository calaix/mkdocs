# 📚 Documentació del Projecte (MkDocs)

Aquest repositori conté el codi font i els arxius de documentació generats amb **MkDocs**.

## 🚀 Requisits previs

Abans de començar, assegura't de tenir instal·lat:
* **Python 3.x**
* **pip** (el gestor de paquets de Python)

---

## 🛠️ Instal·lació

1. **Clona el repositori:**
```bash
git clone [https://github.com/calaix/mkdocs.git](https://github.com/calaix/mkdocs.git)
cd mkdocs
```
   
2. **Crea i activa un entorn virtual (opcional però recomanat):**
```bash
python -m venv venv
source venv/bin/activate  # En Linux/macOS
# venv\Scripts\activate   # En Windows
```
3. **Instal·la MkDocs i les dependències:**

``` Bash
pip install mkdocs
# Si utilitzes el tema Material (molt comú):
# pip install mkdocs-material
(Si tens un arxiu requirements.txt, pots fer servir: pip install -r requirements.txt)
```


4. 💻 Desenvolupament en local
Per iniciar el servidor de desenvolupament local i veure els canvis en temps real a la documentació:

``` Bash
mkdocs serve
Obre el teu navegador i entra a: http://127.0.0.1:8000/
```


5. 🏗️ Estructura del projecte
mkdocs.yml: Fitxer de configuració principal de MkDocs (títol, tema, navegació, plugins...).

docs/: Carpeta que conté les pàgines de la documentació en format Markdown (.md).

docs/index.md: Pàgina d'inici de la documentació.

5. 🌐 Publicació / Desplegament
Per publicar la documentació directament a GitHub Pages:

``` Bash
mkdocs gh-deploy
```
Això generarà el lloc web estàtic i el pujarà automàticament a la branca gh-pages.

6. 📄 Llicència
Aquest projecte està sota la llicència [MIT / GPL / La teva llicència]. Consulta el fitxer LICENSE per a més informació.

