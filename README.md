# pruebas-ghost
## Pruebas automatizadas - CYPRESS
# Pasos para ejecutar
- Descargar el repositorio: git clone + URL del repostitorio
- Para ir a la rama donde esta todos los test integrados (git checkhout develop)
- Iniciar servidor Ghost en su maquina local (ghost start)
- Para que los tests ejecuten de manera correcta ingrese a los archivos (members.spect.js, pages.spect.js, post.spect.js y tags.spect.js) y edite el usuario y contraseña en cada archivo con su usuario y contraseña de Ghost, este paso es necesario, ya que no encontramos la forma de crear super usuarios.
- Ejecutar tests con cypress open y seleccionar cada uno de los sets de pruebas.
- Los tests se deben iniciar en un nuevo navegador. 

# FUNCIONALIDADES CYPRESS:
## FUNCIONALIDAD: POST
Prueba de Funcionamiento: https://www.youtube.com/watch?v=5dfN5VlxfE4
## Escenarios:
- Login
- Create_Publish_Post
- Update_Publish_Post
- Publish_to_unpublish
- Deleting_Post

## FUNCIONALIDAD: PAGES
## Escenarios:
- Publicar una nueva pagina
- Actualizar titulo y contenido de  una  pagina
- Quitar pagina publicada
- Eliminar pagina

## FUNCIONALIDAD: MEMBERS
## Escenarios:
- Explorar opciones de members
- crear un nuevo miembro
- Filtrar por miembro
- Gestionar Filtros
- Eliminar un miembro

## FUNCIONALIDAD: TAGS
Prueba de Funcionamiento: https://youtu.be/jKeGVBGUTQc
## Escenarios:
- Visits Tag Main Page
- Create New Tag
- Edit Tag
- Delete Tag
- Associate Post to Tag
