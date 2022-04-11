// import { JSEncrypt } from '../assets/js/jsencrypt.js';

// function getEncryptObj_msw() {
//   const publickey = `-----BEGIN PUBLIC KEY-----
//             MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDJySbJbk2PVbMzgzyXzGoRIURG
//             CCN5PSi/ve+AaQY2KqwnoOrilOaaojuvseN78xrBmwpR5cIPVNj733lKD6MxUWrw
//             69qgyrUA6YRB8K5ICbPQcYwr32b4z8NqLp3nDd1x1EmCoc5LkTxdhGBvXO2BjXvk
//             cGR3LTh8ScrVCRBnHwIDAQAB
//             -----END PUBLIC KEY-----
//             `;
//   const encrypt = JSEncrypt;

//   encrypt.setPublicKey(publickey);

//   return encrypt;
// }

validateUser = () => {
  debugger;
  console.log('inside function');
  let username = document.querySelector('#username');
  let password = document.querySelector('#password');
  let encypwd = getEncryptObj_msw().encrypt(password);
  // alert(`Username: ${username} & Password: ${encypwd}`);
};

