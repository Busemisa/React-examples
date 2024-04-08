

//!PARENT COMPONENT İÇİNDE CHİLD COMPONENT ÇAĞIRILMIŞ OLUR DŞYEBİLİRİZİ
/*
/ ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const handleClick = () => {
    alert('Butona tıklandı!');
  };

  return (
    <div>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;












// ChildComponent.jsx
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>Tıkla</button>
    </div>
  );
};

export default ChildComponent;





///////////////////////////////////




/!APP.JS İÇİNDE PARENT COMPOENET ÇAĞIRILDI VE BU PAENT COMPONENTİN ALDIĞI PROPSU DA BAŞKA BİR COMPONENTTE ÖYLE BİR ÖRNEKTİR BU 
// App.js
import React from 'react';
import ParentComponent from './ParentComponent';

const App = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  );
};

export default App;
*/
