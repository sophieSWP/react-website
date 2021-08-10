
// import 'react-toastify/dist/ReactToastify.min.css';
// import React, {Component} from 'react';
// import './ContactPage.css';
// import ReactDOM from 'react-dom';



// class ContactPage extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       nameError: false,
//       contact: '',
//       email: '',
//       emailError: false,
//       emailError2: false,
//       message: '',
//       messageError: false,
//       formValid: false
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleBlur   = this.handleBlur.bind(this);
//   }
  
//   isValidEmail(email) {
//     return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
//   }
  
//   // isValidcontact(contactno) {
//   //   return /^[6-9]\d{9}$/.test(contactno);
//   // }  
  
//   handleBlur(e) {
   
//     const name = e.target.name; 
//     const value = e.target.value;

//     this.setState({ [name]: value  });

//     if (value.length <= 0 && (name == 'name')) {
//       this.setState({ nameError: true });
//     } else {
//       this.setState({ nameError: false });
//     } 

//     if (value.length <= 0 && (name == 'email')) {
//       this.setState({ emailError: true });
//       this.setState({ emailError2: false });
//     } else {
//       this.setState({ emailError: false });
//       if(this.isValidEmail(value)) {
//         this.setState({ emailError2: false });  
//       } else {
//         this.setState({ emailError2: true });  
//       }
//     } 

//   }
  
//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value  });
//   }

//   handleSubmit(e) {
//     const { name, email, message, nameError, emailError, emailError2, messageError } = this.state;
    
//     this.setState({ nameError: name ? false : true });
//     this.setState({ messageError: message ? false : true });
//     this.setState({ emailError: email ? false : true });
//     if (email && !emailError) { this.setState({ emailError2: this.isValidEmail(email) ? false : true }); }
    

//     if (name && email && message && !nameError && !emailError && !emailError2 && !messageError) {
//       this.setState({ formValid: true });
//     } else {
//       this.setState({ formValid: false });
//     }

//     e.preventDefault(); 
//   }
  
//   render() {
    
//     const { name, email, message, nameError, emailError, emailError2, messageError, formValid } = this.state;

//     if(!formValid) {
      
//     return (
// <>
// <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
//   <div className="card-header bg-transparent border-0 text-center text-uppercase"><h3>{this.props.title}</h3></div>
//   <div className="card-body">
//     <form action="/" onSubmit={(e) => this.handleSubmit(e)} encType="multipart/form-data" autoComplete="off">
//       <div className="form-group">
//         <label className="mb-0">Your name<span className="text-danger">*</span></label>
//         <input name="name" type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} />
//         { nameError
//           ? <div className="alert alert-danger mt-2">Name is a required field.</div>
//           : ''
//         }
//       </div>
//       <div className="form-group">
//         <label className="mb-0">Your email<span className="text-danger">*</span></label>
//         <input name="email" type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur} />
//         { emailError
//           ? <div className="alert alert-danger mt-2">Email is a required field.</div>
//           : ''
//         }
//         { emailError2
//           ? <div className="alert alert-danger mt-2">Email invalid.</div>
//           : ''
//         }
//       </div>
//       <div className="form-group">
//         <label className="mb-0">Your contact number (Optional)</label>
//         <input name="contact" type="text" className="form-control" placeholder="Contact" onChange={this.handleChange} value={this.state.contact}  />
//       </div>
//       <div className="form-group">
//         <label className="mb-0">Message<span className="text-danger">*</span></label>
//         <textarea name="message" type="text" className="form-control" placeholder="Message" value={this.state.message} onChange={this.handleChange} onBlur={this.handleBlur} />
//         { messageError
//           ? <div className="alert alert-danger mt-2">Message is a required field.</div>
//           : ''
//         }
//       </div>
//         <p className="text-center mb-0"><input type="submit" className="btn btn-primary btn-lg w-100 text-uppercase" value="Submit Now" /></p>
//     </form>
    
//   </div>
// </div>
//       <hr />
//         <div className="text-center"><a href="https://codepen.io/shrikant9907/pen/MWbxbdP" target="_blank">You can check login form here</a></div>
//     </>
//     );
//       } else {
//        return (
//          <div className="thankyou_details">
//            <div className="alert alert-success mt-3">Thank for your message. We will contact you soon.</div>
//             <ul className="list-group">
//               <li className="list-group-item">Name: {this.state.name}</li>
//               <li className="list-group-item">Email: {this.state.email}</li>
//               <li className="list-group-item">contact: {this.state.contact}</li>
//               <li className="list-group-item">Message: {this.state.message}</li>
//             </ul>
//          </div>
//         )
//       }
//   }
// }

// // ReactDOM.render(
// //   <ContactPage title="Contact Form" />,
// //   document.getElementById('root')
// // );

// export default ContactPage;











import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  
  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="header">
        <h1>CONTACT US</h1>
        <div className="second-header">
        <p></p>
              <div className="info">
              <p></p>
              <p></p>
              <p></p>
              </div>
        </div>
      
      </div>
    </div>
  );
};

export default ContactPage;






