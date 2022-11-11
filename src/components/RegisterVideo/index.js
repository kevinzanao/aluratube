import React from "react";
import { StyledRegisterVideo } from "./style";
import { createClient } from "@supabase/supabase-js";

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

const PROJECT_URL = "https://orcjkzsqfcwyphjgnozw.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yY2prenNxZmN3eXBoamdub3p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjAwNTQsImV4cCI6MTk4MzczNjA1NH0.S-A3mnmfvQLPv1ZeL9NXWYjH1Afd6HqzTaB3W_Kqcps";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
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
    initialValues: { titulo: "", url: ""}
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

          supabase.from("video").insert({
            title: formCadastro.values.titulo,
            url: formCadastro.values.url,
            thumb: getThumbnail(formCadastro.values.url),
            playlist: "jogos",
          })
          .then((oqueveio) => {
            console.log(oqueveio)
          })
          .catch((error) => {
            console.log(error)
          })

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