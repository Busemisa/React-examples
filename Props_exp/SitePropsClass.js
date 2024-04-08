
//!TABİ BURDA YAZILAN TÜM COMPONENTLER FARKLI DOSYALARDA OLURLAR AYRI AYRI COMPONENT ŞEKLİNDE OLURLAR VE APP.JS DE İSİMLERİ <> İÇİNE YAZILARAK ÇAĞIRILIRLAR KULLANIM BU ŞEKİLDE OLMALIDIR VE BU ŞEKİLDE WEB SİTESİNDE GÖRÜNMESİ SAĞLANMIŞ OLUR 
//!FUNCTİON COMPONENTLER DAHA KULLANIŞLIDIR CLASS COMPONENTLERE GÖRE DAHA KOLAY KULLANIM SUNMAKTADIR 
//!CLASS PROPSLARDA THİS ANAHTAR KELİMESİ KULLANILIR PROPSU ALIRKEN COMPONENTİN İÇİNDE {THİS.PROPS.NEALACAKSA} ŞEKLİNDE KULLANILIR
/*
/Header.js:
import React, { Component } from 'react';

class Header extends Component {
    render(){

        const = {title} = this.props dersek eğer h1 içindeki kullanımda sadece title yazmamız yeterli olur {} parantezler içerisine daha sade bir kullanım sağlamış olur
        return(
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
}
export default Header;







/Footer.js:
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <p>{this.props.text}</p>
            </footer>
        );
    }
}

export default Footer;






/About.js:
import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default About;







/Contact.js:
import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Contact;





////////////////////////////////







/App.js:
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="React Uygulaması" />
        
        <About title="Hakkında" content="Bu bir örnek React uygulamasıdır." />

        <Contact title="İletişim" content="Bize ulaşmak için..." />

        <Footer text="Tüm hakları saklıdır. &copy; 2022" />
      </div>
    );
  }
}

export default App;


*/