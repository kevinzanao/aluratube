import Styled from "styled-components";

export const StyledToolbar = Styled.aside`
  display: flex;
  margin-top: 60px;
  width: 59.53px;
  p {
    font-size: 11px;
  }
  a {
    color: ${({ theme }) => theme.textColorBase || "#222222"}
  }
   
  ul {
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
    margin-top: 5px;
    text-align: center;
    position: fixed;
  }
  ul li {
    padding: 5px;
  }
  svg {
    width: 18px;
    fill: ${({ theme }) => theme.textColorBase || "#323232"}
  }
  
`

export function Toolsbar() {
  return (
    <StyledToolbar>
      <ul>
        <li>
          <a href="/">
            <span>
              <HomeIcon />
              <p>Inicio</p>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <ShortsIcon />
              <p>Shorts</p>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <SubscriptionIcon />
              <p>Inscrições</p>
            </span>
          </a>
        </li>
        <li>
          <a href="biblioteca">
            <span>
              <LibrayIcon />
              <p>Biblioteca</p>
            </span>
          </a>
        </li>
      </ul>
    </StyledToolbar>
  )
}

function LibrayIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_17_438)">
        <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM12 5.5V14.5L18 10L12 5.5Z" />
      </g>
      <defs>
        <clipPath id="clip0_17_438">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function SubscriptionIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_17_447)">
        <path d="M4 6H20V8H4V6ZM6 2H18V4H6V2ZM20 10H4C2.9 10 2 10.9 2 12V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V12C22 10.9 21.1 10 20 10ZM20 20H4V12H20V20ZM10 12.73V19.26L16 16L10 12.73Z" />
      </g>
      <defs>
        <clipPath id="clip0_17_447">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function RowsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_17_4624)">
        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
      </g>
      <defs>
        <clipPath id="clip0_17_4624">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6_16266)">
        <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" />
      </g>
      <defs>
        <clipPath id="clip0_6_16266">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function ShortsIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_17_504)">
        <path d="M13.05 9.78999L10 7.49999V16.5L13.05 14.21L16 12L13.05 9.78999ZM13.05 9.78999L10 7.49999V16.5L13.05 14.21L16 12L13.05 9.78999ZM13.05 9.78999L10 7.49999V16.5L13.05 14.21L16 12L13.05 9.78999ZM11 4.06999V2.04999C8.99005 2.24999 7.16005 3.04999 5.68005 4.25999L7.10005 5.68999C8.21005 4.82999 9.54005 4.24999 11 4.06999ZM5.69005 7.09999L4.26005 5.67999C3.05005 7.15999 2.25005 8.98999 2.05005 11H4.07005C4.25005 9.53999 4.83005 8.20999 5.69005 7.09999ZM4.07005 13H2.05005C2.25005 15.01 3.05005 16.84 4.26005 18.32L5.69005 16.89C4.83005 15.79 4.25005 14.46 4.07005 13ZM5.68005 19.74C7.16005 20.95 9.00005 21.75 11 21.95V19.93C9.54005 19.75 8.21005 19.17 7.10005 18.31L5.68005 19.74ZM22 12C22 17.16 18.08 21.42 13.05 21.95V19.93C16.97 19.41 20 16.05 20 12C20 7.94999 16.97 4.58999 13.05 4.06999V2.04999C18.08 2.57999 22 6.83999 22 12Z" />
      </g>
      <defs>
        <clipPath id="clip0_17_504">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}