import { Path, Rect, Svg } from "react-native-svg";

const CloseIcon = () => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path 
    d="M10 30L30 10M10 10L30 30" stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
  </Svg>

);

const CameraIcon = () => {
  <Svg
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M5.125 15.375C5.125 13.4881 6.65469 11.9584 8.54167 11.9584H10.1298C11.2722 11.9584 12.339 11.3874 12.9726 10.4369L14.3607 8.35481C14.9944 7.4043 16.0612 6.83337 17.2035 6.83337H23.7965C24.9388 6.83337 26.0056 7.4043 26.6393 8.35482L28.0274 10.4369C28.661 11.3874 29.7278 11.9584 30.8702 11.9584H32.4583C34.3453 11.9584 35.875 13.4881 35.875 15.375V30.75C35.875 32.637 34.3453 34.1667 32.4583 34.1667H8.54167C6.65469 34.1667 5.125 32.637 5.125 30.75V15.375Z"
      stroke="#BDBDBD"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M25.625 22.2084C25.625 25.0388 23.3305 27.3334 20.5 27.3334C17.6695 27.3334 15.375 25.0388 15.375 22.2084C15.375 19.3779 17.6695 17.0834 20.5 17.0834C23.3305 17.0834 25.625 19.3779 25.625 22.2084Z"
      stroke="#BDBDBD"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>;
};

const YenoLogo = () => (
  <Svg width="206" height="77" viewBox="0 0 206 77" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M43.7773 10.8145C44.6237 10.0007 45.3887 9.44727 46.0723 9.1543C46.7884 8.82878 47.5371 8.66602 48.3184 8.66602C49.1322 8.66602 49.8971 8.82878 50.6133 9.1543C51.3294 9.44727 51.9479 9.85417 52.4688 10.375C53.6081 11.4492 54.1777 12.7839 54.1777 14.3789V61.5469C54.1777 65.5182 52.7292 68.9199 49.832 71.752C46.9674 74.584 43.5495 76 39.5781 76H30.9355C29.6986 76 28.6406 75.5768 27.7617 74.7305C26.9154 73.8841 26.4922 72.8424 26.4922 71.6055C26.4922 70.3685 26.9154 69.3268 27.7617 68.4805C28.6406 67.6016 29.6986 67.1621 30.9355 67.1621H36.6973C39.2689 67.1621 41.0755 66.0065 42.1172 63.6953C42.4102 62.9792 42.5566 62.2305 42.5566 61.4492V54.7598C42.5566 54.1413 42.3776 53.7344 42.0195 53.5391C41.694 53.3112 41.3685 53.1973 41.043 53.1973C40.7174 53.1973 40.4245 53.3438 40.1641 53.6367L39.334 54.418C37.1204 56.6315 34.5488 57.7383 31.6191 57.7383C28.1361 57.7383 25.2227 56.3223 22.8789 53.4902C20.5677 50.6908 19.4121 47.2891 19.4121 43.2852V18.4316H17.2637C15.7012 18.4316 14.513 18.8548 13.6992 19.7012C12.3646 21.1335 11.6973 22.6471 11.6973 24.2422V27.0254C11.6973 29.5645 10.5091 31.3223 8.13281 32.2988C7.41667 32.5918 6.65169 32.7383 5.83789 32.7383C5.05664 32.7383 4.30794 32.5918 3.5918 32.2988C2.9082 32.0059 2.30599 31.599 1.78516 31.0781C0.678385 29.9714 0.125 28.6204 0.125 27.0254V24.0957C0.125 20.0918 1.55729 16.6901 4.42188 13.8906C7.28646 11.0586 10.6719 9.64258 14.5781 9.64258H25.1738C26.7363 9.64258 27.9408 10.0495 28.7871 10.8633C30.252 12.263 30.9844 13.7604 30.9844 15.3555V43.1387C30.9844 44.7337 31.4076 45.9544 32.2539 46.8008C33.6862 48.2331 34.9883 48.9492 36.1602 48.9492C37.3646 48.9492 38.3086 48.8353 38.9922 48.6074C39.6758 48.347 40.2943 47.9889 40.8477 47.5332C41.987 46.5566 42.5566 45.2871 42.5566 43.7246V14.3789C42.5566 12.7839 42.9635 11.5957 43.7773 10.8145ZM97.0977 67.1621C98.3346 67.1621 99.3763 67.6016 100.223 68.4805C101.069 69.3594 101.492 70.4173 101.492 71.6543C101.492 72.8587 101.069 73.8841 100.223 74.7305C99.3763 75.5768 98.3346 76 97.0977 76H85.5742C81.6029 76 78.2012 74.584 75.3691 71.752C72.5371 68.9199 71.1211 65.5182 71.1211 61.5469V37.5723C71.1211 33.1452 72.6185 29.6133 75.6133 26.9766C78.7383 24.3073 83.0352 22.9727 88.5039 22.9727C93.9076 22.9727 98.1719 24.3073 101.297 26.9766C104.324 29.6458 105.838 33.2103 105.838 37.6699V51.3418C105.838 52.9694 105.431 54.1901 104.617 55.0039C103.217 56.4036 101.688 57.1035 100.027 57.1035H82.6934V61.4492C82.6934 63.1094 83.1003 64.3301 83.9141 65.1113C85.3464 66.4785 86.86 67.1621 88.4551 67.1621H97.0977ZM94.2656 37.5723C94.2656 35.9447 93.8587 34.724 93.0449 33.9102C91.6126 32.4779 90.099 31.7617 88.5039 31.7617C86.8763 31.7617 85.6393 32.1849 84.793 33.0312C83.3932 34.431 82.6934 35.9447 82.6934 37.5723V48.5586H94.2656V37.5723ZM155.838 71.2637C155.838 73.7376 154.666 75.4792 152.322 76.4883C151.606 76.8138 150.825 76.9766 149.979 76.9766C149.132 76.9766 148.4 76.8464 147.781 76.5859C147.163 76.3255 146.642 76.0326 146.219 75.707C145.633 75.1862 145.21 74.6816 144.949 74.1934C144.721 73.7051 144.51 73.2982 144.314 72.9727C144.119 72.6146 143.826 72.4355 143.436 72.4355C143.045 72.4355 142.703 72.582 142.41 72.875L141.531 73.7051C139.415 75.8861 136.893 76.9766 133.963 76.9766C130.447 76.9766 127.42 75.5443 124.881 72.6797C122.374 69.8802 121.121 66.4948 121.121 62.5234V38.4023C121.121 34.431 122.537 31.0293 125.369 28.1973C128.201 25.3652 131.603 23.9492 135.574 23.9492H144.266V6.66406C144.266 5.03646 144.673 3.81576 145.486 3.00195C146.886 1.60221 148.4 0.902344 150.027 0.902344C151.688 0.902344 152.924 1.30924 153.738 2.12305C155.138 3.52279 155.838 5.03646 155.838 6.66406V71.2637ZM132.693 62.9629C132.693 64.623 133.23 65.9089 134.305 66.8203C135.411 67.6992 136.567 68.1387 137.771 68.1387C139.008 68.1387 139.969 68.0247 140.652 67.7969C141.368 67.569 141.987 67.2435 142.508 66.8203C143.68 65.9089 144.266 64.7044 144.266 63.207V32.7383H138.455C136.86 32.7383 135.639 33.1615 134.793 34.0078C133.393 35.4076 132.693 36.9212 132.693 38.5488V62.9629ZM171.121 37.3281C171.121 32.9336 172.618 29.4505 175.613 26.8789C178.738 24.2747 183.035 22.9727 188.504 22.9727C193.908 22.9727 198.172 24.2747 201.297 26.8789C204.324 29.4831 205.838 32.9987 205.838 37.4258V62.6699C205.838 69.4733 202.518 73.9167 195.877 76C193.729 76.651 191.271 76.9766 188.504 76.9766C185.77 76.9766 183.328 76.651 181.18 76C179.031 75.3164 177.208 74.3398 175.711 73.0703C172.651 70.5312 171.121 67.0156 171.121 62.5234V37.3281ZM194.266 37.5723C194.266 35.9447 193.859 34.724 193.045 33.9102C191.613 32.4779 190.099 31.7617 188.504 31.7617C186.876 31.7617 185.639 32.1849 184.793 33.0312C183.393 34.431 182.693 35.9447 182.693 37.5723V62.9629C182.693 64.623 183.247 65.9089 184.354 66.8203C185.46 67.6992 186.827 68.1387 188.455 68.1387C190.115 68.1387 191.499 67.6992 192.605 66.8203C193.712 65.9089 194.266 64.623 194.266 62.9629V37.5723Z" fill="#FF6347" />
  </Svg>

)

const Logo = () => (
  <Svg width="206" height="69" viewBox="0 0 206 69"
    fill="none" xmlns="http://www.w3.org/2000/Svg">
    <Path
      d="M43.7773 10.8145C44.6237 10.0007 45.3887 9.44727 46.0723 9.1543C46.7884 8.82878 47.5371 8.66602 48.3184 8.66602C49.1322 8.66602 49.8971 8.82878 50.6133 9.1543C51.3294 9.44727 51.9479 9.85417 52.4688 10.375C53.6081 11.4492 54.1777 12.7839 54.1777 14.3789V61.5469C54.1777 65.5182 52.7292 68.9199 49.832 71.752C46.9674 74.584 43.5495 76 39.5781 76H30.9355C29.6986 76 28.6406 75.5768 27.7617 74.7305C26.9154 73.8841 26.4922 72.8424 26.4922 71.6055C26.4922 70.3685 26.9154 69.3268 27.7617 68.4805C28.6406 67.6016 29.6986 67.1621 30.9355 67.1621H36.6973C39.2689 67.1621 41.0755 66.0065 42.1172 63.6953C42.4102 62.9792 42.5566 62.2305 42.5566 61.4492V54.7598C42.5566 54.1413 42.3776 53.7344 42.0195 53.5391C41.694 53.3112 41.3685 53.1973 41.043 53.1973C40.7174 53.1973 40.4245 53.3438 40.1641 53.6367L39.334 54.418C37.1204 56.6315 34.5488 57.7383 31.6191 57.7383C28.1361 57.7383 25.2227 56.3223 22.8789 53.4902C20.5677 50.6908 19.4121 47.2891 19.4121 43.2852V18.4316H17.2637C15.7012 18.4316 14.513 18.8548 13.6992 19.7012C12.3646 21.1335 11.6973 22.6471 11.6973 24.2422V27.0254C11.6973 29.5645 10.5091 31.3223 8.13281 32.2988C7.41667 32.5918 6.65169 32.7383 5.83789 32.7383C5.05664 32.7383 4.30794 32.5918 3.5918 32.2988C2.9082 32.0059 2.30599 31.599 1.78516 31.0781C0.678385 29.9714 0.125 28.6204 0.125 27.0254V24.0957C0.125 20.0918 1.55729 16.6901 4.42188 13.8906C7.28646 11.0586 10.6719 9.64258 14.5781 9.64258H25.1738C26.7363 9.64258 27.9408 10.0495 28.7871 10.8633C30.252 12.263 30.9844 13.7604 30.9844 15.3555V43.1387C30.9844 44.7337 31.4076 45.9544 32.2539 46.8008C33.6862 48.2331 34.9883 48.9492 36.1602 48.9492C37.3646 48.9492 38.3086 48.8353 38.9922 48.6074C39.6758 48.347 40.2943 47.9889 40.8477 47.5332C41.987 46.5566 42.5566 45.2871 42.5566 43.7246V14.3789C42.5566 12.7839 42.9635 11.5957 43.7773 10.8145ZM97.0977 67.1621C98.3346 67.1621 99.3763 67.6016 100.223 68.4805C101.069 69.3594 101.492 70.4173 101.492 71.6543C101.492 72.8587 101.069 73.8841 100.223 74.7305C99.3763 75.5768 98.3346 76 97.0977 76H85.5742C81.6029 76 78.2012 74.584 75.3691 71.752C72.5371 68.9199 71.1211 65.5182 71.1211 61.5469V37.5723C71.1211 33.1452 72.6185 29.6133 75.6133 26.9766C78.7383 24.3073 83.0352 22.9727 88.5039 22.9727C93.9076 22.9727 98.1719 24.3073 101.297 26.9766C104.324 29.6458 105.838 33.2103 105.838 37.6699V51.3418C105.838 52.9694 105.431 54.1901 104.617 55.0039C103.217 56.4036 101.688 57.1035 100.027 57.1035H82.6934V61.4492C82.6934 63.1094 83.1003 64.3301 83.9141 65.1113C85.3464 66.4785 86.86 67.1621 88.4551 67.1621H97.0977ZM94.2656 37.5723C94.2656 35.9447 93.8587 34.724 93.0449 33.9102C91.6126 32.4779 90.099 31.7617 88.5039 31.7617C86.8763 31.7617 85.6393 32.1849 84.793 33.0312C83.3932 34.431 82.6934 35.9447 82.6934 37.5723V48.5586H94.2656V37.5723ZM155.838 71.2637C155.838 73.7376 154.666 75.4792 152.322 76.4883C151.606 76.8138 150.825 76.9766 149.979 76.9766C149.132 76.9766 148.4 76.8464 147.781 76.5859C147.163 76.3255 146.642 76.0326 146.219 75.707C145.633 75.1862 145.21 74.6816 144.949 74.1934C144.721 73.7051 144.51 73.2982 144.314 72.9727C144.119 72.6146 143.826 72.4355 143.436 72.4355C143.045 72.4355 142.703 72.582 142.41 72.875L141.531 73.7051C139.415 75.8861 136.893 76.9766 133.963 76.9766C130.447 76.9766 127.42 75.5443 124.881 72.6797C122.374 69.8802 121.121 66.4948 121.121 62.5234V38.4023C121.121 34.431 122.537 31.0293 125.369 28.1973C128.201 25.3652 131.603 23.9492 135.574 23.9492H144.266V6.66406C144.266 5.03646 144.673 3.81576 145.486 3.00195C146.886 1.60221 148.4 0.902344 150.027 0.902344C151.688 0.902344 152.924 1.30924 153.738 2.12305C155.138 3.52279 155.838 5.03646 155.838 6.66406V71.2637ZM132.693 62.9629C132.693 64.623 133.23 65.9089 134.305 66.8203C135.411 67.6992 136.567 68.1387 137.771 68.1387C139.008 68.1387 139.969 68.0247 140.652 67.7969C141.368 67.569 141.987 67.2435 142.508 66.8203C143.68 65.9089 144.266 64.7044 144.266 63.207V32.7383H138.455C136.86 32.7383 135.639 33.1615 134.793 34.0078C133.393 35.4076 132.693 36.9212 132.693 38.5488V62.9629ZM171.121 37.3281C171.121 32.9336 172.618 29.4505 175.613 26.8789C178.738 24.2747 183.035 22.9727 188.504 22.9727C193.908 22.9727 198.172 24.2747 201.297 26.8789C204.324 29.4831 205.838 32.9987 205.838 37.4258V62.6699C205.838 69.4733 202.518 73.9167 195.877 76C193.729 76.651 191.271 76.9766 188.504 76.9766C185.77 76.9766 183.328 76.651 181.18 76C179.031 75.3164 177.208 74.3398 175.711 73.0703C172.651 70.5312 171.121 67.0156 171.121 62.5234V37.3281ZM194.266 37.5723C194.266 35.9447 193.859 34.724 193.045 33.9102C191.613 32.4779 190.099 31.7617 188.504 31.7617C186.876 31.7617 185.639 32.1849 184.793 33.0312C183.393 34.431 182.693 35.9447 182.693 37.5723V62.9629C182.693 64.623 183.247 65.9089 184.354 66.8203C185.46 67.6992 186.827 68.1387 188.455 68.1387C190.115 68.1387 191.499 67.6992 192.605 66.8203C193.712 65.9089 194.266 64.623 194.266 62.9629V37.5723Z" fill="#FF6347"
    />
  </Svg>

)

const LogoIcon = () => (
  <Svg width="381" height="123" viewBox="0 0 381 123" fill="none" xmlns="http://www.w3.org/2000/Svg">
    <Path 
      d="M1.125 11.1719C0.916667 10.4948 0.8125 9.66146 0.8125 8.67188C0.8125 7.63021 1.02083 6.58854 1.4375 5.54688C1.90625 4.50521 2.50521 3.59375 3.23438 2.8125C4.79688 1.04167 6.41146 0.15625 8.07812 0.15625C9.79688 0.15625 11.151 0.3125 12.1406 0.625C13.1302 0.9375 14.0417 1.35417 14.875 1.875C16.75 3.125 17.8958 4.73958 18.3125 6.71875L23 24.2188C23.4688 26.1979 24.0938 28.5417 24.875 31.25L27.5312 40.3125C29.9271 48.8542 31.8281 56.6927 33.2344 63.8281C34.1198 59.401 35.0312 55.2083 35.9688 51.25C38.2604 41.6146 39.8229 35.1823 40.6562 31.9531L47.6094 6.71875C48.2344 3.75 50.2656 1.71875 53.7031 0.625C54.6927 0.3125 55.7344 0.15625 56.8281 0.15625C57.974 0.15625 59.0677 0.416667 60.1094 0.9375C61.151 1.40625 62.0365 2.05729 62.7656 2.89062C64.3281 4.66146 65.1094 6.32812 65.1094 7.89062C65.1094 9.45312 65.0052 10.5469 64.7969 11.1719L42.7656 78.9062C42.1406 81.0417 40.9948 82.8646 39.3281 84.375C37.6615 85.8333 35.8906 86.5625 34.0156 86.5625C32.1927 86.5625 30.7344 86.3542 29.6406 85.9375C28.599 85.5208 27.6354 84.9479 26.75 84.2188C25.0833 82.7604 23.9115 80.9115 23.2344 78.6719L1.125 11.1719ZM126.75 70.8594C128.729 70.8594 130.396 71.5625 131.75 72.9688C133.104 74.375 133.781 76.0677 133.781 78.0469C133.781 79.974 133.104 81.6146 131.75 82.9688C130.396 84.3229 128.729 85 126.75 85H108.312C101.958 85 96.5156 82.7344 91.9844 78.2031C87.4531 73.6719 85.1875 68.2292 85.1875 61.875V23.5156C85.1875 16.4323 87.5833 10.7812 92.375 6.5625C97.375 2.29167 104.25 0.15625 113 0.15625C121.646 0.15625 128.469 2.29167 133.469 6.5625C138.312 10.8333 140.734 16.5365 140.734 23.6719V45.5469C140.734 48.151 140.083 50.1042 138.781 51.4062C136.542 53.6458 134.094 54.7656 131.438 54.7656H103.703V61.7188C103.703 64.375 104.354 66.3281 105.656 67.5781C107.948 69.7656 110.37 70.8594 112.922 70.8594H126.75ZM122.219 23.5156C122.219 20.9115 121.568 18.9583 120.266 17.6562C117.974 15.3646 115.552 14.2188 113 14.2188C110.396 14.2188 108.417 14.8958 107.062 16.25C104.823 18.4896 103.703 20.9115 103.703 23.5156V41.0938H122.219V23.5156ZM206.75 70.8594C208.729 70.8594 210.396 71.5625 211.75 72.9688C213.104 74.375 213.781 76.0677 213.781 78.0469C213.781 79.974 213.104 81.6146 211.75 82.9688C210.396 84.3229 208.729 85 206.75 85H188.312C181.958 85 176.516 82.7344 171.984 78.2031C167.453 73.6719 165.188 68.2292 165.188 61.875V23.5156C165.188 16.4323 167.583 10.7812 172.375 6.5625C177.375 2.29167 184.25 0.15625 193 0.15625C201.646 0.15625 208.469 2.29167 213.469 6.5625C218.312 10.8333 220.734 16.5365 220.734 23.6719V45.5469C220.734 48.151 220.083 50.1042 218.781 51.4062C216.542 53.6458 214.094 54.7656 211.438 54.7656H183.703V61.7188C183.703 64.375 184.354 66.3281 185.656 67.5781C187.948 69.7656 190.37 70.8594 192.922 70.8594H206.75ZM202.219 23.5156C202.219 20.9115 201.568 18.9583 200.266 17.6562C197.974 15.3646 195.552 14.2188 193 14.2188C190.396 14.2188 188.417 14.8958 187.062 16.25C184.823 18.4896 183.703 20.9115 183.703 23.5156V41.0938H202.219V23.5156ZM245.266 58.2812C245.266 49.9479 249.12 44.2188 256.828 41.0938C252.974 39.0104 250.37 36.901 249.016 34.7656C246.516 30.9635 245.266 26.5104 245.266 21.4062V9.53125C245.266 6.92708 245.917 4.94792 247.219 3.59375C249.406 1.30208 251.802 0.15625 254.406 0.15625C257.01 0.15625 258.99 0.833333 260.344 2.1875C262.583 4.42708 263.703 6.875 263.703 9.53125V24.8438C263.703 27.3958 264.354 29.349 265.656 30.7031C267.792 32.9427 270.292 34.0625 273.156 34.0625C277.062 34.0625 279.823 32.1875 281.438 28.4375C281.958 27.3438 282.219 26.1458 282.219 24.8438V9.53125C282.219 5.41667 284.094 2.55208 287.844 0.9375C288.938 0.416667 290.135 0.15625 291.438 0.15625C292.792 0.15625 294.016 0.416667 295.109 0.9375C296.203 1.40625 297.167 2.05729 298 2.89062C299.771 4.66146 300.656 6.875 300.656 9.53125V21.4062C300.656 28.6979 298.365 34.2188 293.781 37.9688C292.375 39.1146 290.812 40.1562 289.094 41.0938C296.802 44.2188 300.656 49.9479 300.656 58.2812V77.4219C300.656 79.974 300.005 81.901 298.703 83.2031C296.464 85.4427 294.354 86.5625 292.375 86.5625C290.448 86.5625 288.911 86.3281 287.766 85.8594C286.672 85.3906 285.708 84.7396 284.875 83.9062C283.104 82.1354 282.219 79.974 282.219 77.4219V57.4219C282.219 54.8698 281.594 52.9167 280.344 51.5625C278.104 49.2708 275.995 48.125 274.016 48.125C272.089 48.125 270.552 48.3594 269.406 48.8281C268.26 49.2969 267.271 49.9479 266.438 50.7812C264.615 52.5 263.703 54.7135 263.703 57.4219V77.4219C263.703 79.974 263.052 81.901 261.75 83.2031C259.51 85.4427 257.062 86.5625 254.406 86.5625C251.75 86.5625 249.797 85.9115 248.547 84.6094C246.359 82.3177 245.266 79.9219 245.266 77.4219V58.2812ZM364.094 3.59375C365.448 2.29167 366.672 1.40625 367.766 0.9375C368.911 0.416667 370.109 0.15625 371.359 0.15625C372.661 0.15625 373.885 0.390625 375.031 0.859375C376.177 1.32812 377.167 1.97917 378 2.8125C379.823 4.63542 380.734 6.79688 380.734 9.29688V98.9062C380.734 105.312 378.469 110.755 373.938 115.234C369.302 119.766 363.807 122.031 357.453 122.031H343.625C341.646 122.031 339.953 121.354 338.547 120C337.193 118.646 336.516 116.979 336.516 115C336.516 113.021 337.193 111.328 338.547 109.922C339.953 108.568 341.646 107.891 343.625 107.891H352.844C355.5 107.891 357.479 107.24 358.781 105.938C361.021 103.698 362.141 101.302 362.141 98.75V81.7969C362.141 80.8073 361.854 80.1562 361.281 79.8438C360.76 79.4792 360.24 79.2969 359.719 79.2969C359.198 79.2969 358.729 79.5312 358.312 80L356.984 81.25C353.443 84.7917 349.354 86.5625 344.719 86.5625C339.094 86.5625 334.432 84.2708 330.734 79.6875C327.036 75.1562 325.188 69.7396 325.188 63.4375V9.29688C325.188 5.33854 327.062 2.55208 330.812 0.9375C331.906 0.416667 333.078 0.15625 334.328 0.15625C335.63 0.15625 336.854 0.390625 338 0.859375C339.146 1.32812 340.135 1.97917 340.969 2.8125C342.792 4.63542 343.703 6.79688 343.703 9.29688V63.2031C343.703 65.7552 344.354 67.7083 345.656 69.0625C347.844 71.3542 349.901 72.5 351.828 72.5C353.755 72.5 355.266 72.3177 356.359 71.9531C357.505 71.5365 358.521 70.9635 359.406 70.2344C361.229 68.6719 362.141 66.6406 362.141 64.1406V9.29688C362.141 6.74479 362.792 4.84375 364.094 3.59375Z" fill="#FF6347" 
      />
  </Svg>

);

const CreateButtonIcon = () => (
  <Svg
    width="81"
    height="80"
    viewBox="0 0 81 80"
    fill="none"
    xmlns="http://www.w3.org/2000/Svg"
    strokeWidth={4}
  >
    <Rect x="0.5" width="80" height="80" rx="40" fill="black" />
    <Rect x="8.5" y="8" width="64" height="64" rx="32" fill="#FF6347" />
    <Rect x="20.5" y="20" width="40" height="40" rx="20" fill="white" />
    <Path
      d="M40.5 26.6667V53.3333M53.8334 40L27.1667 40"
      stroke="#FF6347"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const MembersIcon = ({ color }) => (
  <Svg
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/Svg"
    color={color}
  >
    <Path
      d="M18.9167 21.6667H24.3334V19.5C24.3334 17.7051 22.8783 16.25 21.0834 16.25C20.0481 16.25 19.1259 16.734 18.5308 17.4881M18.9167 21.6667H8.08335M18.9167 21.6667V19.5C18.9167 18.7891 18.7797 18.1101 18.5308 17.4881M8.08335 21.6667H2.66669V19.5C2.66669 17.7051 4.12176 16.25 5.91669 16.25C6.95193 16.25 7.87412 16.734 8.46929 17.4881M8.08335 21.6667V19.5C8.08335 18.7891 8.22031 18.1101 8.46929 17.4881M8.46929 17.4881C9.26798 15.4928 11.2194 14.0833 13.5 14.0833C15.7806 14.0833 17.7321 15.4928 18.5308 17.4881M16.75 7.58334C16.75 9.37827 15.2949 10.8333 13.5 10.8333C11.7051 10.8333 10.25 9.37827 10.25 7.58334C10.25 5.78842 11.7051 4.33334 13.5 4.33334C15.2949 4.33334 16.75 5.78842 16.75 7.58334ZM23.25 10.8333C23.25 12.03 22.28 13 21.0834 13C19.8867 13 18.9167 12.03 18.9167 10.8333C18.9167 9.63673 19.8867 8.66668 21.0834 8.66668C22.28 8.66668 23.25 9.63673 23.25 10.8333ZM8.08335 10.8333C8.08335 12.03 7.1133 13 5.91669 13C4.72007 13 3.75002 12.03 3.75002 10.8333C3.75002 9.63673 4.72007 8.66668 5.91669 8.66668C7.1133 8.66668 8.08335 9.63673 8.08335 10.8333Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);


const SettingIcon = ({ color }) => (
  <Svg
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/Svg"
    color={color}
  >
    <Path
      d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const WorkIcon = ({ color }) => (
  <Svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M21.5 13.2554C18.7207 14.3805 15.6827 15 12.5 15C9.3173 15 6.2793 14.3805 3.5 13.2554M16.5 6V4C16.5 2.89543 15.6046 2 14.5 2H10.5C9.39543 2 8.5 2.89543 8.5 4V6M12.5 12H12.51M5.5 20H19.5C20.6046 20 21.5 19.1046 21.5 18V8C21.5 6.89543 20.6046 6 19.5 6H5.5C4.39543 6 3.5 6.89543 3.5 8V18C3.5 19.1046 4.39543 20 5.5 20Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const PersonalIcon = ({ color }) => (
  <Svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/Svg"
  >
    <Path
      d="M16.8333 7C16.8333 9.20914 15.0425 11 12.8333 11C10.6242 11 8.83331 9.20914 8.83331 7C8.83331 4.79086 10.6242 3 12.8333 3C15.0425 3 16.8333 4.79086 16.8333 7Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M12.8333 14C8.96732 14 5.83331 17.134 5.83331 21H19.8333C19.8333 17.134 16.6993 14 12.8333 14Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const HomeIcon = ({ color }) => (
  <Svg
    width="33"
    height="26"
    viewBox="0 0 33 26"
    fill="none"
    xmlns="http://www.w3.org/2000/Svg"
  >
    <Path
      d="M4.66071 13L7.29167 10.8333M7.29167 10.8333L16.5 3.25L25.7083 10.8333M7.29167 10.8333V21.6667C7.29167 22.265 7.88062 22.75 8.60714 22.75H12.5536M25.7083 10.8333L28.3393 13M25.7083 10.8333V21.6667C25.7083 22.265 25.1194 22.75 24.3929 22.75H20.4464M12.5536 22.75C13.2801 22.75 13.869 22.265 13.869 21.6667V17.3333C13.869 16.735 14.458 16.25 15.1845 16.25H17.8155C18.542 16.25 19.131 16.735 19.131 17.3333V21.6667C19.131 22.265 19.7199 22.75 20.4464 22.75M12.5536 22.75H20.4464"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const NotificationIcon = ({ color }) => (
  <Svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/Svg"
  >
    <Path
      d="M16.25 18.4167H21.6667L20.1447 16.8947C19.7319 16.4819 19.5 15.9221 19.5 15.3383V11.9167C19.5 9.08653 17.6913 6.67885 15.1667 5.78653V5.41667C15.1667 4.22005 14.1966 3.25 13 3.25C11.8034 3.25 10.8333 4.22005 10.8333 5.41667V5.78653C8.30876 6.67885 6.50001 9.08653 6.50001 11.9167V15.3383C6.50001 15.9221 6.26812 16.4819 5.85535 16.8947L4.33334 18.4167H9.75001M16.25 18.4167V19.5C16.25 21.2949 14.7949 22.75 13 22.75C11.2051 22.75 9.75001 21.2949 9.75001 19.5V18.4167M16.25 18.4167H9.75001"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export {
  YenoLogo,
  WorkIcon,
  HomeIcon,
  LogoIcon,
  Logo,
  CloseIcon,
  SettingIcon,
  CameraIcon,
  MembersIcon,
  PersonalIcon,
  CreateButtonIcon,
  NotificationIcon,
};