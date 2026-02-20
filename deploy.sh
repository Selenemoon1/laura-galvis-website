#!/bin/bash

# Script de despliegue para Laura Marcela Galvis Castro - Website
# Uso: ./deploy.sh [netlify|vercel|github]

set -e

echo "🚀 Desplegando sitio web de Laura Marcela Galvis Castro..."

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Build
echo "🔨 Construyendo proyecto..."
npm run build

# Verificar que dist existe
if [ ! -d "dist" ]; then
    echo "❌ Error: No se encontró la carpeta dist"
    exit 1
fi

echo "✅ Build completado exitosamente"
echo ""
echo "📁 Archivos listos en: ./dist/"
echo ""

# Opciones de despliegue
case "$1" in
    netlify)
        echo "🌐 Desplegando a Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist
        else
            echo "⚠️  Netlify CLI no instalado"
            echo "Instálalo con: npm install -g netlify-cli"
            echo "O arrastra la carpeta 'dist' a netlify.com"
        fi
        ;;
    vercel)
        echo "🌐 Desplegando a Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo "⚠️  Vercel CLI no instalado"
            echo "Instálalo con: npm install -g vercel"
        fi
        ;;
    github)
        echo "📤 Subiendo a GitHub..."
        if [ ! -d ".git" ]; then
            git init
            git add .
            git commit -m "Initial commit"
            echo "✅ Repositorio git inicializado"
            echo ""
            echo "Ahora conecta con GitHub:"
            echo "  git remote add origin https://github.com/TU_USUARIO/nombre-repo.git"
            echo "  git branch -M main"
            echo "  git push -u origin main"
        else
            git add .
            git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
            git push origin main
        fi
        ;;
    *)
        echo "💡 Opciones de despliegue:"
        echo "  ./deploy.sh netlify   - Desplegar a Netlify"
        echo "  ./deploy.sh vercel    - Desplegar a Vercel"
        echo "  ./deploy.sh github    - Subir a GitHub"
        echo ""
        echo "📂 La carpeta 'dist' está lista para subir manualmente"
        ;;
esac
