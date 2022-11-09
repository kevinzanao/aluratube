import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  
  const estilosDaHomePage = { 
    // backgroundColor: "red" 
  }

  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <div style={estilosDaHomePage}>
        {/* Prop Drilling */}
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
          {/* Conteúdo */}
        </Timeline>
    </div>
    </>
  );
  
}

export default HomePage

// function Menu() {
//   return (
//     <div>
//       Menu
//     </div>
//   )
// }

const StyledHeader = styled.div `
  background-color: ${({ theme }) => theme.backgroundLevel1};

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
  }
`

const StyledBanner = styled.div `
  background-color: blue;
  background-image: url(${({ bg }) => bg});
  /* background-repeat: no-repeat; */
  background-size: cover;
  height: 230px;
`

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      {/* <img src="banner" alt="" /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} alt="" />
        <div>
          <h2>
          {config.name}
          </h2>
          <p>
          {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline({searchValue, ...props}) {
  const playlistNames = Object.keys(props.playlists)
  // Statement
  // Retorno por expressão
  return(
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {
                videos.filter((video) => {
                  const titleNomalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNomalized.includes(searchValueNormalized)
                }).map((video) => {  
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>
                        {video.title}
                      </span>
                    </a>
                  )
                })
              }
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}