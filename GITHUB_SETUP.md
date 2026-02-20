# Guía para subir a GitHub

## 🚀 Paso a paso

### 1. Crea un repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Click en el botón **+** → **New repository**
3. Nombre del repositorio: `laura-galvis-abogada` (o el que prefieras)
4. Deja en **Public** (o Private si prefieres)
5. NO marques "Add a README file" (ya lo tenemos)
6. Click **Create repository**

### 2. Sube el código

GitHub te mostrará comandos. Usa la opción **"…or push an existing repository from the command line"**:

```bash
# En tu computadora, navega a la carpeta del proyecto
cd laura-galvis-abogada

# Inicializa git
git init

# Agrega todos los archivos
git add .

# Primer commit
git commit -m "Initial commit: Website Laura Marcela Galvis Castro"

# Conecta con GitHub (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/laura-galvis-abogada.git

# Sube el código
git branch -M main
git push -u origin main
```

### 3. Configura GitHub Pages (opcional - para hosting gratuito)

1. En tu repositorio de GitHub, ve a **Settings**
2. En el menú lateral, click **Pages**
3. En "Source", selecciona **Deploy from a branch**
4. Selecciona la rama `main` y carpeta `/ (root)`
5. Click **Save**
6. Espera 2-5 minutos y tu sitio estará en: `https://TU_USUARIO.github.io/laura-galvis-abogada`

---

## 🔄 Actualizaciones futuras

Cuando hagas cambios:

```bash
# Agrega cambios
git add .

# Commit con mensaje descriptivo
git commit -m "Descripción de los cambios"

# Sube a GitHub
git push origin main
```

---

## 📁 Estructura del proyecto

```
laura-galvis-abogada/
├── public/                 # Archivos estáticos
│   ├── laura-galvis.jpg   # Tu foto
│   └── ...
├── src/                    # Código fuente
│   ├── sections/          # Secciones de la web
│   ├── components/        # Componentes reutilizables
│   ├── hooks/             # Custom hooks
│   └── ...
├── dist/                  # Build para producción
├── index.html
├── package.json
├── README.md
├── LICENSE
└── .gitignore
```

---

## ❓ Problemas comunes

### "fatal: not a git repository"
```bash
git init
```

### "fatal: Authentication failed"
- Usa un token de acceso personal en lugar de contraseña
- Ve a GitHub → Settings → Developer settings → Personal access tokens

### "rejected: non-fast-forward"
```bash
git pull origin main --rebase
git push origin main
```

---

## 🆘 Ayuda adicional

- [GitHub Docs - Creating a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
- [GitHub Docs - Adding a local repository](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
