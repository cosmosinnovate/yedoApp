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

const Logo = () => (
  <Svg
    width="283"
    height="89" 
    viewBox="0 0 283 89"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path 
      d="M22.627 27.8555C23.1478 27.2044 23.6198 26.5371 24.043 25.8535C24.4661 25.1374 24.6777 24.3236 24.6777 23.4121C24.6777 22.5007 24.515 21.7031 24.1895 21.0195C23.8639 20.3034 23.4082 19.6849 22.8223 19.1641C21.5527 18.0247 19.9414 17.4551 17.9883 17.4551C16.0352 17.4551 14.4889 18.0247 13.3496 19.1641C12.2428 20.2708 11.6895 21.638 11.6895 23.2656V62.9141C11.6895 64.5742 12.2266 65.86 13.3008 66.7715C14.4076 67.6504 15.7747 68.0898 17.4023 68.0898C19.0625 68.0898 20.446 67.6504 21.5527 66.7715C22.6595 65.86 23.2129 64.5742 23.2129 62.9141V59.7402C23.2129 58.1126 23.6198 56.8919 24.4336 56.0781C25.8333 54.6784 27.1354 53.9785 28.3398 53.9785C29.5443 53.9785 30.5046 54.125 31.2207 54.418C31.9368 54.7109 32.5553 55.1178 33.0762 55.6387C34.2155 56.778 34.7852 58.1452 34.7852 59.7402V62.6211C34.7852 69.4245 31.4648 73.8516 24.8242 75.9023C22.6758 76.5859 20.2181 76.9277 17.4512 76.9277C14.7168 76.9277 12.2754 76.6022 10.127 75.9512C7.97852 75.2676 6.17188 74.3073 4.70703 73.0703C1.64714 70.4661 0.117188 66.9342 0.117188 62.4746V23.0215C0.117188 18.627 1.61458 15.1602 4.60938 12.6211C7.73438 9.98438 12.015 8.66602 17.4512 8.66602C23.0501 8.66602 27.4284 9.98438 30.5859 12.6211C33.7109 15.1927 35.2734 18.6758 35.2734 23.0703C35.2734 29.9388 33.5156 34.5775 30 36.9863C28.9258 37.735 27.8353 38.1094 26.7285 38.1094C25.6543 38.1094 24.7591 37.9629 24.043 37.6699C23.3594 37.377 22.7572 36.9701 22.2363 36.4492C21.1296 35.4076 20.5762 34.2194 20.5762 32.8848C20.5762 31.5501 20.7878 30.541 21.2109 29.8574C21.6341 29.1413 22.1061 28.474 22.627 27.8555ZM63.9355 61.4492C63.9355 63.1094 64.3424 64.3301 65.1562 65.1113C66.5885 66.4785 68.1022 67.1621 69.6973 67.1621H70.1855C71.39 67.1621 72.3177 67.4876 72.9688 68.1387C74.0755 69.2454 74.6289 70.2546 74.6289 71.166C74.6289 72.0775 74.515 72.8099 74.2871 73.3633C74.0592 73.8841 73.75 74.3398 73.3594 74.7305C72.4479 75.5768 71.39 76 70.1855 76H66.8164C62.8451 76 59.4434 74.584 56.6113 71.752C53.7793 68.9199 52.3633 65.5182 52.3633 61.5469V6.66406C52.3633 5.03646 52.7702 3.81576 53.584 3.00195C54.9837 1.60221 56.4974 0.902344 58.125 0.902344C59.7852 0.902344 61.0221 1.30924 61.8359 2.12305C63.2357 3.52279 63.9355 5.03646 63.9355 6.66406V61.4492ZM86.3965 28.832C86.3965 27.237 86.8034 26 87.6172 25.1211C89.0169 23.6888 90.5632 22.9727 92.2559 22.9727C93.8835 22.9727 95.0879 23.3958 95.8691 24.2422C97.3014 25.707 98.0176 27.237 98.0176 28.832V71.2637C98.0176 72.8262 97.6107 74.0143 96.7969 74.8281C95.3646 76.2604 94.0462 76.9766 92.8418 76.9766C91.6374 76.9766 90.6771 76.8138 89.9609 76.4883C89.2448 76.1953 88.6263 75.8047 88.1055 75.3164C86.9661 74.2096 86.3965 72.8587 86.3965 71.2637V28.832ZM92.2559 0.902344C94.0462 0.902344 95.5924 1.55339 96.8945 2.85547C98.1966 4.15755 98.8477 5.47591 98.8477 6.81055C98.8477 8.14518 98.6686 9.20312 98.3105 9.98438C97.9525 10.7656 97.4805 11.4492 96.8945 12.0352C95.5924 13.3372 94.0462 13.9883 92.2559 13.9883C90.4655 13.9883 88.9193 13.3372 87.6172 12.0352C86.3151 10.7331 85.6641 9.43099 85.6641 8.12891C85.6641 5.91536 86.3151 4.15755 87.6172 2.85547C88.9193 1.55339 90.4655 0.902344 92.2559 0.902344ZM149.873 96.9961C149.059 97.8424 148.294 98.4121 147.578 98.7051C146.862 98.998 146.097 99.1445 145.283 99.1445C144.502 99.1445 143.753 98.998 143.037 98.7051C142.354 98.4121 141.751 98.0052 141.23 97.4844C140.091 96.3451 139.521 94.9779 139.521 93.3828V73.998C139.521 73.3796 139.342 72.9727 138.984 72.7773C138.659 72.5495 138.333 72.4355 138.008 72.4355C137.682 72.4355 137.389 72.582 137.129 72.875L136.299 73.6562C134.085 75.8698 131.546 76.9766 128.682 76.9766C125.199 76.9766 122.285 75.5443 119.941 72.6797C117.598 69.8802 116.426 66.4948 116.426 62.5234V38.4023C116.426 34.431 117.842 31.0293 120.674 28.1973C123.506 25.3652 126.908 23.9492 130.879 23.9492H145.283C147.855 23.9492 149.661 25.1374 150.703 27.5137C150.996 28.2298 151.143 28.9948 151.143 29.8086V93.3828C151.143 94.9779 150.719 96.1823 149.873 96.9961ZM127.998 62.377C127.998 64.0046 128.405 65.2253 129.219 66.0391C130.651 67.4714 131.953 68.1875 133.125 68.1875C134.329 68.1875 135.273 68.0736 135.957 67.8457C136.641 67.5853 137.259 67.2272 137.812 66.7715C138.952 65.7949 139.521 64.5254 139.521 62.9629V32.7383H133.76C132.165 32.7383 130.944 33.1615 130.098 34.0078C128.698 35.4076 127.998 36.9212 127.998 38.5488V62.377ZM190.791 25.1211C191.637 24.3073 192.402 23.7539 193.086 23.4609C193.802 23.1354 194.551 22.9727 195.332 22.9727C196.146 22.9727 196.895 23.1191 197.578 23.4121C198.294 23.7051 198.913 24.112 199.434 24.6328C200.573 25.7721 201.143 27.123 201.143 28.6855V71.1172C201.143 72.7122 200.736 73.9492 199.922 74.8281C198.522 76.2604 197.188 76.9766 195.918 76.9766C194.681 76.9766 193.753 76.8301 193.135 76.5371C192.516 76.2767 192.012 75.9674 191.621 75.6094C191.003 75.0885 190.563 74.5677 190.303 74.0469C190.075 73.4935 189.863 73.0866 189.668 72.8262C189.473 72.5658 189.163 72.4355 188.74 72.4355C188.35 72.4355 188.024 72.582 187.764 72.875C187.503 73.1354 187.08 73.5586 186.494 74.1445C184.541 76.0326 182.393 76.9766 180.049 76.9766C177.738 76.9766 175.801 76.6022 174.238 75.8535C172.676 75.0723 171.309 74.0143 170.137 72.6797C167.663 69.8477 166.426 66.4622 166.426 62.5234V28.6855C166.426 26.2116 167.598 24.4701 169.941 23.4609C170.625 23.1354 171.357 22.9727 172.139 22.9727C172.952 22.9727 173.717 23.1191 174.434 23.4121C175.15 23.7051 175.768 24.112 176.289 24.6328C177.428 25.7721 177.998 27.123 177.998 28.6855V62.377C177.998 64.0046 178.405 65.2253 179.219 66.0391C180.651 67.4714 182.148 68.1875 183.711 68.1875C186.283 68.1875 188.073 67.1784 189.082 65.1602C189.408 64.5091 189.57 63.7767 189.57 62.9629V28.6855C189.57 27.0905 189.977 25.9023 190.791 25.1211ZM242.402 67.1621C243.639 67.1621 244.681 67.6016 245.527 68.4805C246.374 69.3594 246.797 70.4173 246.797 71.6543C246.797 72.8587 246.374 73.8841 245.527 74.7305C244.681 75.5768 243.639 76 242.402 76H230.879C226.908 76 223.506 74.584 220.674 71.752C217.842 68.9199 216.426 65.5182 216.426 61.5469V37.5723C216.426 33.1452 217.923 29.6133 220.918 26.9766C224.043 24.3073 228.34 22.9727 233.809 22.9727C239.212 22.9727 243.477 24.3073 246.602 26.9766C249.629 29.6458 251.143 33.2103 251.143 37.6699V51.3418C251.143 52.9694 250.736 54.1901 249.922 55.0039C248.522 56.4036 246.992 57.1035 245.332 57.1035H227.998V61.4492C227.998 63.1094 228.405 64.3301 229.219 65.1113C230.651 66.4785 232.165 67.1621 233.76 67.1621H242.402ZM239.57 37.5723C239.57 35.9447 239.163 34.724 238.35 33.9102C236.917 32.4779 235.404 31.7617 233.809 31.7617C232.181 31.7617 230.944 32.1849 230.098 33.0312C228.698 34.431 227.998 35.9447 227.998 37.5723V48.5586H239.57V37.5723Z" 
      fill="#FF6347"/>
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
  WorkIcon,
  HomeIcon,
  LogoIcon,
  Logo,
  CloseIcon,
  CameraIcon,
  MembersIcon,
  PersonalIcon,
  CreateButtonIcon,
  NotificationIcon,
};
