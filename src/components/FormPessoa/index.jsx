import React, { useState } from 'react';
import '../../css/pure-min.css';
import '../../css/side-menu.css';
import { create } from '../../apicalls/Person'

// class TesteA extends Component {
//     state = {
//         name: '',
//         email: '',
//         rg: '',
//         telephone: ''
//     }

//     salvarPessoa = async (e) => {
//         e.preventDefault();
//         const response = await create('learon', 'agae', 'ueg@ega.de', '13.637.670-8', '15996074423');
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     render() {
//         const { name, email, rg, telephone } = this.state;
//         console.log(this.state);

//         return (
//             <div className="pure-form pure-form-aligned">
//                 <form className="pure-form pure-form-aligned" onSubmit={this.salvarPessoa}>
//                     <div className="pure-control-group">
//                         <label htmlFor="name">Nome</label>
//                         <input value={name} onChange={this.handleChange} name="name" />
//                     </div>
//                     <div className="pure-control-group">
//                         <label htmlFor="email">Email</label>
//                         <input value={email} onChange={this.handleChange} type="email" name="email" />
//                     </div>
//                     <div className="pure-control-group">
//                         <label htmlFor="rg">RG</label>
//                         <input value={rg} onChange={this.handleChange} name="rg" />
//                     </div>
//                     <div className="pure-control-group">
//                         <label htmlFor="telefone">Telefone</label>
//                         <input value={telephone} onChange={this.handleChange} name="telephone" />
//                     </div>
//                     <div className="pure-control-group">
//                         <label></label>
//                         <button type="submit" className="pure-button pure-button-primary">Salvar</button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

// export default TesteA;

export default function FormPessoa() {

    // state = {
    //     Name: '',
    //     Email: '',
    //     RG: '',
    //     Telephone: ''
    // }

    const [person, setPerson] = useState({
        Name: '',
        Email: '',
        RG: '',
        Telephone: ''
    });

    async function salvarPessoa(e) {
        e.preventDefault();
        console.log(person);
        const response = await create(person);
        alert(response.data.Message);
    }

    function handleChange(ev) {
        ev.preventDefault();
        person[ev.target.name] = ev.target.value;
        setPerson(person);
    }

    return (
        <div className="pure-form pure-form-aligned">
            <form className="pure-form pure-form-aligned" onSubmit={salvarPessoa}>
                <div className="pure-control-group">
                    <label htmlFor="Name">Nome</label>
                    <input onChange={handleChange} id="Name" type="text" name="Name" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="Email">Email</label>
                    <input onChange={handleChange} id="Email" type="email" name="Email" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="RG">RG</label>
                    <input onChange={handleChange} id="RG" type="text" name="RG" />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="Telephone">Telefone</label>
                    <input onChange={handleChange} id="Telephone" type="text" name="Telephone" />
                </div>
                <div className="pure-control-group">
                    <label></label>
                    <button type="submit" className="pure-button pure-button-primary">Salvar</button>
                </div>
            </form>
        </div>
    );
}