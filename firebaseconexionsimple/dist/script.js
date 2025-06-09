
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB-pgL2IWLqZBWuLUxhzV69AviXMrtUpoY",
  authDomain: "my-first-app-aeef3.firebaseapp.com",
  databaseURL: "https://my-first-app-aeef3.firebaseio.com",
  projectId: "my-first-app-aeef3",
  storageBucket: "my-first-app-aeef3.appspot.com",
  messagingSenderId: "299477485977"
};
firebase.initializeApp(config);

const ref = 'posts/email';
let num = 0;

function setData() {
  firebase.database().ref(ref).set({
    username: 'dylan',
    email: 'xxx@xxx.com',
    num
  });
}

function updateData() {
  num += 1;

  const postData = {
    username: 'my name4',
    email: 'my email4',
    num
  }
  
  var updates = {};
  updates[ref] = postData;
  firebase.database().ref().update(updates);
}

firebase.database().ref(ref).on('value', snapshot => {
  num = snapshot.val().num;
  
  console.log(snapshot.val());
  data.innerText = JSON.stringify(snapshot.val(), null, 2);
});
document.addEventListener("DOMContentLoaded", function(event) {       
  // console.log('as')
  // console.log(firebase.database().ref())
  // console.log(firebase.database().ref().child('DEFAULT'))
  // let UserRef = firebase.database().ref().child('DEFAULT');
  //     UserRef.on('value',
  //                 function (snap){
  //                   console.log(snap)
  //                 }
  //               );
  // firebase.database().ref(ref).on('value', snapshot => {
  // num = snapshot.val().num;
    
  // console.log(snapshot.val());
  // console.log('as')
  //   // data.innerText = JSON.stringify(snapshot.val(), null, 2);
  // });
});