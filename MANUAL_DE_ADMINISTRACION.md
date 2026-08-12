# 📖 Guía Fácil de Administración — Luxora Global Group

Esta guía rápida le explicará cómo administrar y actualizar el catálogo de productos y la información del sitio web de **Luxora Global Group** de manera sencilla.

---

## 🛠️ OPCIÓN 1: Usar la Herramienta Visual (Modo Administrador)

Hemos construido una herramienta dentro de la misma página web del catálogo para que **no tenga que escribir código a mano**.

### Pasos para agregar un producto desde la pantalla:

1. Abra la página `catalog.html` en su navegador.
2. En la barra superior del catálogo, haga clic en el botón:  
   👉 **`⚙️ AGREGAR PRODUCTO (ADMIN)`**
3. Se abrirá una ventana emergente donde podrá ingresar:
   - **Categoría**: Seleccione una de las 5 categorías (*Beauty, Toys, Pets, Home, Outdoor*).
   - **Código SKU**: Escriba el SKU del producto (ej: `LG-BTY-99`).
   - **Nombre del Producto**: Escriba el título comercial del producto.
   - **Código ASIN** *(opcional)*: El código de Amazon si aplica.
   - **Nombre de la Imagen**: El archivo de foto (ej: `mi-producto.jpg`).
   - **Descripción**: Resumen o detalles comerciales.
4. **Haga clic en uno de los 2 botones**:
   - **`Probar en Pantalla`**: Agrega el producto inmediatamente a la vista en vivo para probar cómo se ve.
   - **`Copiar Código para catalog.js`**: Genera el código perfecto y lo copia automáticamente a su portapapeles. Luego abra `js/catalog.js` y péguelo.

---

## 📝 OPCIÓN 2: Editar directamente `js/catalog.js`

Si prefiere agregar o editar productos directamente en el archivo de datos:

1. Abra el archivo `js/catalog.js` con un editor de texto (VS Code, Bloc de notas, etc.).
2. En la parte superior verá el arreglo `const products = [ ... ];`.
3. Para agregar un nuevo producto, pegue esta estructura al inicio del arreglo:

```javascript
    {
        id: "SU-NUEVO-SKU",
        name: "Nombre del Producto Aquí",
        category: "beauty", // Opciones: beauty, toys, pets, home, outdoor
        sku: "SU-NUEVO-SKU",
        asin: "B0XXXXXX",
        condition: "Factory New / Sealed",
        packaging: "Commercial Master Case",
        image: "assets/products/beauty/foto.jpg",
        description: "Descripción detallada de su producto comercial B2B."
    },
```

4. Guarde el archivo `catalog.js` ¡y listo! El catálogo se actualizará automáticamente.

---

## 🖼️ Dónde colocar las fotos de los productos:

Guarde sus imágenes físicas (en formato `.jpg` o `.png`) dentro de las siguientes carpetas:

- **Belleza y Cuidado Personal**: `assets/products/beauty/`
- **Juguetes y Juegos**: `assets/products/toys/`
- **Artículos para Mascotas**: `assets/products/pets/`
- **Hogar y Estilo de Vida**: `assets/products/home/`
- **Exteriores y Herramientas**: `assets/products/outdoor/`

> 💡 **Nota Importante:** Si aún no ha guardado la foto física de un producto en la carpeta, la página web **no mostrará una imagen rota**, sino que generará automáticamente una tarjeta vectorial elegante en negro y dorado con el logo de *Luxora Global Group*.

---

## ✉️ Cómo cambiar los correos o teléfonos de contacto:

Para cambiar el correo receptor del formulario o los teléfonos corporativos:

1. **Página de contacto (`contact.html`) y Principal (`index.html`)**:
   - Busque la etiqueta `<strong>[CORPORATE EMAIL]</strong>` y reemplace por su correo real (ej: `info@luxoraglobal.com`).
   - Busque `<strong>[BUSINESS PHONE]</strong>` y reemplace por su teléfono comercial (ej: `+1 (602) 555-0199`).

2. **Acción del formulario (`js/main.js`)**:
   - En la línea 156 de `js/main.js`, reemplace `emailDestino = "TU-CORREO@EMPRESA.COM";` por su correo comercial real.

---

¡Su plataforma corporativa y catálogo B2B están 100% listos para operar y administrar fácilmente!
