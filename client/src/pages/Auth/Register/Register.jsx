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
    <div className="container mx-auto theme-section !px-[15px]">
      <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
        <div className="flex flex-col justify-between gap-2">
          <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-[600]">Create a new account</h2>
          <input name="username" type="text" className='focus:outline-white' placeholder="johndoe*" onChange={handleChange} />
          <input name="email" type="email" className='focus:outline-white' placeholder="Email*" onChange={handleChange} />
          <input name="password" type="password" className='focus:outline-white' placeholder="**********" onChange={handleChange} />
          <input type="file" className='focus:outline-white' onChange={(event) => setImage(event.target.files[0])} />
          <button disabled={loading} type='submit' className="w-full hidden md:block">
            { loading ? 'Loading...' : 'Register' }
          </button>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <p className='text-white hidden md:block'>Already have an account? <Link to='/login' className='text-secondary mx-4 font-[500] text-[#ff66c4] underline'>Signin</Link></p>
          <h2 className="text-2xl md:text-2xl lg:text-4xl text-white font-[600]">I want to become a seller</h2>
          <div className="toggle mb-0">
            <label htmlFor="isSeller" className='text-md md:text-lg !text-white'>Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" name='isSeller' onChange={handleChange} />
              <span className="slider round"></span>
            </label>
          </div>
          <input name="phone" type="text" className='focus:outline-white' placeholder="+1 (516) 123-9879*" onChange={handleChange} />
          <textarea placeholder="A short description of yourself*" className='focus:outline-white' name="description" id="description"
            cols="30" rows="10" onChange={handleChange}></textarea>
          <button disabled={loading} type='submit' className="w-full md:hidden">
            { loading ? 'Loading...' : 'Register' }
          </button>
          <p className='text-white text-right md:hidden'>Already have an account? <Link to='/login' className='text-secondary mx-4 font-[500] text-[#ff66c4] underline'>Signin</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register;