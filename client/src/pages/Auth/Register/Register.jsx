import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { axiosFetch, generateImageURL } from '../../../utils';
import './Register.scss'

const Register = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
    phone: '',
    description: '',
    isSeller: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    for (let key in formInput) {
      if (formInput[key] === '') {
        toast.error('Please fill all input field: ' + key);
        return;
      }
      else if (key === 'phone' && formInput[key].length < 9) {
        toast.error('Enter valid phone number!');
        return;
      }
    }

    setLoading(true);
    try {
      const { url } = await generateImageURL(image);
      const { data } = await axiosFetch.post('/auth/register', { ...formInput, image: url });
      toast.success('Registration successful!');
      setLoading(false);
      navigate('/login');
    }
    catch ({ response }) {
      toast.error(response.data.message);
      setLoading(false);
    }
  }

  const handleChange = (event) => {
    const { value, name, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormInput({
      ...formInput,
      [name]: inputValue
    });
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h2 className="text-4xl text-white font-[600]">Create a new account</h2>
          <input
            name="username"
            type="text"
            placeholder="johndoe*"
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email*"
            onChange={handleChange}
          />
          <input name="password" type="password" placeholder="**********" onChange={handleChange} />
          <input type="file" onChange={(event) => setImage(event.target.files[0])} />
          <div className="section-top-content__buttons">
            <button disabled={loading} type='submit' className="section-top-content__buttons-link section-top-content__buttons-link--green w-full">
              { loading ? 'Loading...' : 'Register' }
            </button>
          </div>
        </div>
        <div className="right">
          <p className='text-white'>Already have an account? <Link to='/login' className='text-secondary mx-4 font-[500] text-[#ad6ca5] underline'>Signin</Link></p>
          <h2 className="text-4xl text-white font-[600]">I want to become a seller</h2>
          <div className="toggle">
            <label htmlFor="" className='!text-white'>Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" name='isSeller' onChange={handleChange} />
              <span className="slider round"></span>
            </label>
          </div>
          <input
            name="phone"
            type="text"
            placeholder="+1 (516) 123-9879*"
            onChange={handleChange}
          />
          <textarea
            placeholder="A short description of yourself*"
            name="description"
            id="description"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  )
}

export default Register;