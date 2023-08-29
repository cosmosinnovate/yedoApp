import { Path, Rect, Svg } from "react-native-svg";

const CloseIcon = () => (
  <Svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M10 30L30 10M10 10L30 30"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
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
  <Svg
    width="283"
    height="89"
    viewBox="0 0 283 89"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M57.1 11.2C51.8333 8.93333 46.1 7.8 39.9 7.8C33.7667 7.8 28.7667 9.76667 24.9 13.7C21.1 17.6333 19.2 22.7667 19.2 29.1H17C17 22.1667 19.1333 16.5333 23.4 12.2C27.6667 7.8 33.1333 5.6 39.8 5.6C45.1333 5.6 50.9 6.63333 57.1 8.7C64.2333 11.3 71.9667 12.6 80.3 12.6V14.7C75.3 14.7 71.3 14.4667 68.3 14C66.7667 21.4667 64.6333 30.8667 61.9 42.2C59.1667 53.5333 57.2667 60.7667 56.2 63.9C55.2 67.0333 53.8 70.2667 52 73.6C50.2 76.9333 48.1667 79.6333 45.9 81.7C43.7 83.8333 40.9 85.5667 37.5 86.9C34.1667 88.3 30.5333 89 26.6 89C22.7333 89 19.0667 88.2667 15.6 86.8C12.1333 85.3333 9.23333 83.3 6.9 80.7C2.9 76.1 0.9 70.5333 0.9 64C0.9 62.9333 0.933333 61.8667 1 60.8L3.2 61.1C3.13333 62.0333 3.1 62.9667 3.1 63.9C3.1 70.1 4.96667 75.2667 8.7 79.4C12.5 83.6 17.6 85.7 24 85.7C30.4 85.7 34.9 84 37.5 80.6C40.1 77.2 42.5667 70.6667 44.9 61C47.3 51.3333 51.3667 34.7333 57.1 11.2ZM114 -2.14577e-06H116.3C116.3 3.8 114.867 9.16666 112 16.1C109.2 22.9667 107.8 27.9 107.8 30.9H105.6C105.6 27.9 106.067 25.2 107 22.8C107.933 20.3333 108.833 18.0667 109.7 16C110.633 13.8667 111.3 12.2333 111.7 11.1C101.167 11.7 90.5333 19 79.8 33C77.4 35.9333 75.2 38.8 73.2 41.6C79.5333 54.8 84.1667 64.1 87.1 69.5C90.1 74.9667 92.6 78.7333 94.6 80.8C96.6 82.8667 98.7333 83.9 101 83.9C103.267 83.9 105.2 83.2333 106.8 81.9C108.467 80.6333 109.633 78.9 110.3 76.7H112.8C110.667 83.6333 105.433 87.1 97.1 87.1C91.8333 87.1 87.5 85.8333 84.1 83.3C80.7 80.8333 77.8 77.0667 75.4 72L64.4 48.8L78.7 30.2C83.5667 23.8667 88.7 18.7667 94.1 14.9C99.5667 10.9667 105.7 8.9 112.5 8.7C113.5 5.7 114 2.8 114 -2.14577e-06ZM118.913 29.6C117.313 29.6 115.646 30.5333 113.913 32.4L112.413 31.2C112.879 30.2667 113.913 29.4333 115.513 28.7C117.113 27.9667 118.879 27.6 120.813 27.6C126.879 27.6 129.913 30.3333 129.913 35.8C129.913 38.1333 129.313 42.3 128.113 48.3C126.913 54.3 126.313 58.2333 126.313 60.1C126.313 62.9667 127.679 64.4 130.413 64.4C132.346 64.4 134.213 63.2667 136.013 61C137.879 58.7333 139.479 55.6 140.813 51.6L145.013 28.5C149.946 28.5 153.546 28.3 155.813 27.9L157.113 27.6L150.413 65.4C152.413 65.2 154.079 64.2667 155.413 62.6L156.913 63.8C154.913 66.2 152.413 67.4 149.413 67.4C146.413 67.4 144.079 66.6667 142.413 65.2C140.746 63.7333 139.879 61.6667 139.813 59C137.013 64.6 132.879 67.4 127.413 67.4C123.479 67.4 120.413 66.3 118.213 64.1C116.013 61.8333 114.913 58.7333 114.913 54.8C114.913 52.7333 115.546 48.7667 116.813 42.9C118.079 36.9667 118.779 32.5333 118.913 29.6ZM201.315 65.4C202.915 65.4 204.582 64.4667 206.315 62.6L207.815 63.8C207.348 64.7333 206.315 65.5667 204.715 66.3C203.115 67.0333 201.348 67.4 199.415 67.4C193.348 67.4 190.315 64.6667 190.315 59.2C190.315 56.8667 190.915 52.7 192.115 46.7C193.315 40.7 193.915 36.7667 193.915 34.9C193.915 32.0333 192.548 30.6 189.815 30.6C187.615 30.6 185.482 32.0333 183.415 34.9C181.415 37.7667 179.748 41.7 178.415 46.7L175.015 65.4C177.082 65.2 178.782 64.2667 180.115 62.6L181.615 63.8C179.615 66.2 177.115 67.4 174.115 67.4C171.115 67.4 168.748 66.6333 167.015 65.1C165.348 63.5667 164.515 61.5667 164.515 59.1C164.515 58.1667 165.048 54.5 166.115 48.1L169.415 29.6C167.415 29.8 165.748 30.7333 164.415 32.4L162.915 31.2C164.915 28.8 167.415 27.6 170.415 27.6C173.482 27.6 175.848 28.3667 177.515 29.9C179.182 31.4333 180.015 33.6 180.015 36.4V37C182.748 30.7333 187.015 27.6 192.815 27.6C196.748 27.6 199.815 28.7333 202.015 31C204.215 33.2 205.315 36.2667 205.315 40.2C205.315 42.2667 204.682 46.2667 203.415 52.2C202.148 58.0667 201.448 62.4667 201.315 65.4ZM247.217 67.4C241.351 67.4 238.151 64.9 237.617 59.9C234.684 64.9 230.951 67.4 226.417 67.4C221.884 67.4 218.417 66.1333 216.017 63.6C213.617 61 212.417 57.4667 212.417 53C212.417 45.1333 214.284 38.9333 218.017 34.4C221.751 29.8667 226.584 27.6 232.517 27.6C235.917 27.6 238.551 28.6333 240.417 30.7C241.217 31.7667 241.717 32.5667 241.917 33.1L247.317 3.7C245.317 3.9 243.651 4.83333 242.317 6.5L240.817 5.3C242.817 2.9 245.317 1.7 248.317 1.7C251.384 1.7 253.751 2.46667 255.417 4C257.084 5.53333 257.917 7.7 257.917 10.5C257.917 11.0333 257.851 11.9 257.717 13.1C254.451 31.4333 251.284 48.8667 248.217 65.4C250.217 65.2 251.884 64.2667 253.217 62.6L254.717 63.8C252.717 66.2 250.217 67.4 247.217 67.4ZM223.717 57.1C223.717 60.1667 224.017 62.2667 224.617 63.4C225.284 64.5333 226.284 65.1 227.617 65.1C229.017 65.1 230.351 64.6333 231.617 63.7C232.884 62.7667 233.951 61.5667 234.817 60.1C236.417 57.6333 237.551 55.5333 238.217 53.8L241.117 38C240.984 35.8667 240.284 33.9333 239.017 32.2C237.751 30.4 235.584 29.5 232.517 29.5C230.384 29.5 228.384 32.6333 226.517 38.9C224.651 45.1667 223.717 51.2333 223.717 57.1ZM278.771 63.8C276.771 66.2 274.271 67.4 271.271 67.4C268.271 67.4 265.904 66.6333 264.171 65.1C262.504 63.5667 261.671 61.5667 261.671 59.1C261.671 58.2333 262.204 54.6 263.271 48.2L266.571 30.3H262.371L262.571 28.5H266.871C271.804 28.5 275.438 28.3 277.771 27.9L279.171 27.6L272.271 65.4C274.271 65.2 275.938 64.2667 277.271 62.6L278.771 63.8ZM269.971 18C268.571 16.6 267.871 14.9 267.871 12.9C267.871 10.9 268.571 9.2 269.971 7.8C271.371 6.33333 273.071 5.6 275.071 5.6C277.071 5.6 278.771 6.33333 280.171 7.8C281.638 9.2 282.371 10.9 282.371 12.9C282.371 14.9 281.638 16.6 280.171 18C278.771 19.4 277.071 20.1 275.071 20.1C273.071 20.1 271.371 19.4 269.971 18Z"
      fill="#FF6347"
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
