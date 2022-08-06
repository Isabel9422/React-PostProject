import React from 'react'

function EditStatePosts() {
  return (
    <div>
    {
        user && <button>Eliminar</button>  //ADMIN puede editar el tipo de estado de una publicacion
    }
    </div>
  )
}

export default EditStatePosts
