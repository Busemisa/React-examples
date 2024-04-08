import React from 'react';
//!User componentinin arow fonksiyon ve props alan hali bu şekilde
const User = (props) => {
  return (
    <div>
      <p>Kullanıcı Adı: {props.username}</p>
    </div>
  );
}

export default User;







/*
Props Kullanımı:
Şimdi, "User" bileşenimizi kullanalım ve username prop'unu geçirelim.

App.js dosyası:


import React from 'react';
import User from './User';

const App = () => {
  return (
    <div>
      <h1>React Props Örneği</h1>
      <User username="JohnDoe" />  ==burda da props a gidecek olan değeri app.js de veriyoruz burdan user componentte propsa gitmiş olacaktır
    </div>
  );
}

export default App;
*/