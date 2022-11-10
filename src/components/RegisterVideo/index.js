import React from "react";
import { StyledRegisterVideo } from "./style";

  // botão de adicionar a video
  // Modal
  // controlando o state
  // formulario

// Pesquisar Whiteboarding
// Custom Hook
function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);
  
  return {
    values,
    handleChange: (evento) => {
      const value = evento.target.value;
      const name = evento.target.name;
      setValues({
        ...values,
        [name]: value,  
      });
    },
    clearForm() {
      setValues({});
    }
  }
}

export default function RegisterVideo() {
  /* 
    ## O que precisamos para o form funcionar?
    - pegar os dados, que precisam vir do state
     - titulo 
     - url
    - precisamos ter um onSubmit do nosso form
    - limpar o formulario após o submit
  */
  
  const formCadastro = useForm({
    initialValues: { titulo: "Frost", url: "url"}
  });
  const [formVisivel, setFormVisivel] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {/* Ternário */}
      {/* Operadores de curto-circuito */}
      {/* && */}
      
      {formVisivel ? (
        <form onSubmit={(event) => {
          event.preventDefault();
          setFormVisivel(false);
          formCadastro. clearForm();
        }}>
          <div>
            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
              X
            </button>
            <input
              placeholder="Título do vídeo" 
              name="titulo"
              value={formCadastro.values.titulo} 
              onChange={formCadastro.handleChange} 
            />
            <input 
              placeholder="URL" 
              name="url"
              value={formCadastro.values.url} 
              onChange={formCadastro.handleChange} 
            />
            <button type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      ): false}
    </StyledRegisterVideo>
  )
}