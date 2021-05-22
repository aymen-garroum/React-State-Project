import React from 'react';
import './App.css';
import pic from './aymen-cropped.png'

class App extends React.Component {

constructor(props){
super(props)
this.state = {fullName: "NON SAISI", bio: "NON SAISI", imgSrc: "", profession: "NON SAISI", afficher:false, etat_bouton: "Afficher", temps: 0}
}

etat_initial = {fullName: "NON SAISI", bio: "NON SAISI", imgSrc: "", profession: "NON SAISI", afficher:false, etat_bouton: "Afficher"};

profile = {fullName: "Aymen Garroum", bio: "Expérience de 10 ans dans le commerce de gros", imgSrc: pic, profession:"En formation à GomyCode"}

update = () =>  {if(this.state.afficher === false)
                {this.setState({...this.profile, afficher: true, etat_bouton:"Ne pas afficher"});}
                else {this.setState({...this.etat_initial})}
                }

componentDidMount() {
setInterval(() => {this.setState({temps: this.state.temps + 1})}, 1000);
}

render()
{
return(
<div  className="box">
<img src={this.state.imgSrc} alt="Non fourni"/>
<h1>Name : {this.state.fullName}</h1>
<p>Parcours : {this.state.bio}</p>
<p>Profession : {this.state.profession}</p>
<p onClick={this.maj_temps}>Component mounted since : {this.state.temps} secondes</p>
<button onClick={this.update}>{this.state.etat_bouton}</button>

</div>)}

}

export default App;
