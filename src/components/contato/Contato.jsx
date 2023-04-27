import React, {useState} from 'react'
import styles from './styles.module.css';
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify';

//service_kr87iur  ==> server id
//template_0woselp  => template id
//9Fk204d4daU3I1Y6n ==> public key


const Contato = () => {

    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [telefone,setTelefone] = useState('');
    const [mensagem,setMensagem] = useState('');


    const onEnviar = (e) => {
        e.preventDefault();
       // alert('form enviado');


     const templateParams = {
        from_name: nome,
        from_email: email,
        from_phone: telefone,
        message: mensagem
     }

     emailjs.send('service_kr87iur', 'template_0woselp', templateParams,'9Fk204d4daU3I1Y6n')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       toast.success('Obrigado por entrar em contato conosco. Em breve responderemos a sua mensagem.');
       setNome('');
       setEmail('');
       setTelefone('');
       setMensagem('');
       //alert('Sua mensagem foi enviada. Em breve entraremos em contato.')
    }, function(error) {
       console.log('FAILED...', error);
       toast.error("Houve um problema ao enviar a sua mensagem. Tente novamente por favor.");
      // alert("Houve um problema ao enviar a sua mensagem. Tente novamente por favor.")
    });

    }



  return (

    <section id="contato">
        <div className={styles.container}>
          <h2 className={styles.title}>Contato</h2>
          <p className={styles.frase}>Você pode entrar com contato conosco utilizando o formulário abaixo.</p>
          
            <form className={styles.form} onSubmit={onEnviar}>
                <h2 className={styles.formTitle}>Formulário para Contato</h2>
                <label className={styles.label} for="nome">Nome:</label>
                <input 
                   className={styles.input} 
                   id="nome" 
                   type="text" 
                   placeholder="Seu nome" 
                   required 
                   onChange={(e)=>setNome(e.target.value)}
                   value={nome}
                />
                <label className={styles.label} for="email">Email:</label>
                <input 
                    className={styles.input} 
                    id="email" 
                    type="email" 
                    placeholder="Seu email" 
                    required 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
                <label className={styles.label} for="telefone">Telefone:</label>
                <input 
                    className={styles.input} 
                    id="telefone" 
                    type="text" 
                    placeholder="Seu telefone" 
                    required 
                    onChange={(e)=>setTelefone(e.target.value)}
                    value={telefone}
                />
                <label className={styles.label} for="telefone">Mensagem:</label>
                <textarea
                   className={styles.textArea}
                   id="mensagem"
                   placeholder='Escreva aqui a sua mensagem'
                   required
                   onChange={(e)=>setMensagem(e.target.value)}
                   value={mensagem}
                />
                
                
                <button className={styles.button} type="submit">ENVIAR</button>
            </form>
         
        </div>
   </section>
      
  )
}

export default Contato