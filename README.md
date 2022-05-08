# pruebas-ghost
## Pruebas automatizadas - CYPRESS
### Tags
# Pasos para ejecutar
- Descargar el repositorio: git clone + URL del repostitorio
- Para ir a la rama donde esta todos los test integrados (git chechout develop)
- iniciar servidor Ghost en su maquina local (ghost start)
- para que los tes ejecuten de manera correcta ingrese a los archivos (members.spect.js, pages.spect.js, post.spect.js y tags.spect.js) y edite el usuario y contraseña en cada archoivo con su usuario y contraseña de Ghost, este paso es necesario, ya que no encontramos la forma de crear super usuarios.
- Ejecutar test con cyprest open y seleccionar cada uno de los sets de pruebas.
- Los test se deben iniciar en un nuevo navegador. 
