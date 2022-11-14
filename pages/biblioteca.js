import Menu from "../src/components/Menu";
import config from "../config.json";
import { StyledTimeline } from "../src/components/Timeline";
import styled from "styled-components";
import { Toolsbar } from "../src/components/Sides/components/Toolsbar";

const StyledDiv = styled.div `
  display: flex;
`

export default function Library() {
  return(
    <>
      <div>
        <Menu />
        <StyledDiv>
          <Toolsbar />
          {/* Playlist2 como parâmetro */}
          <Timeline playlist={config.playlist2}>

          </Timeline>

        </StyledDiv>
      </div>
    </>
  )
}

// Comentar depois de terminar o código
const StyledSection = styled.section `
  margin-top: 50px;
`

function Timeline(props) {
  // props é um objeto com nome "playlist" que possui um objeto playlist dentro dele, ou seja tem que  acessar playlist.playlist para alcançar os objetos da config.playlist2
  // console.log(props)
  // console.log(props.playlist)
  // pegar um array com os valores de playlist2.
  const sectionsNames = Object.keys(props.playlist)
  // console.log("aqui1",sectionsNames)
  // Output: [historico{}, assistirMaisTarde{}, playlists{}];

  return (
    <StyledTimeline>
        {
          // Cria a estrutura para colocar os videos na tela
          sectionsNames.map((sectionName) => {
            const videos = props.playlist[sectionName];
            // output é um objeto com os valores do objeto atual
            // console.log(videos);
            return (
                <StyledSection key={sectionName}>
                  <h2>{sectionName}</h2>
                  <div>
                    {
                      videos.map((video) => {
                        return (
                          <a key={video.url} href={video.url}>
                            <img src={video.thumb} />
                            <span>{video.title}</span>
                          </a>
                        )
                      })
                    }                  
                  </div>
                </StyledSection>
            )
          })
          
        }
    </StyledTimeline>
  )
}

