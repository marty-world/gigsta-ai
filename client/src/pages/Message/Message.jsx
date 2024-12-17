import toast from 'react-hot-toast';
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms";
import { axiosFetch } from '../../utils';
import { Loader } from '../../components';
import "./Message.scss";

const Message = () => {
  const user = useRecoilValue(userState);
  const { conversationID } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { isLoading, error, data } = useQuery({
    queryKey: ['messages'],
    queryFn: () =>
      axiosFetch.get(`/messages/${conversationID}`)
        .then(({ data }) => {
          return data;
        })
        .catch(({ response }) => {
          toast.error(response.data.message)
        })
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (message) =>
      axiosFetch.post('/messages', message)
    ,
    onSuccess: () =>
      queryClient.invalidateQueries(['messages'])
  })

  const handleMessageSubmit = (event) => {
    event.preventDefault();

    mutation.mutate({
      conversationID,
      description: event.target[0].value
    });

    event.target.reset();
  }

  return (
    <div className='theme-section'>
      <div className="message">
        <div className="custom-container">
          <h1 className="text-[24px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-[600] mb-4">
            <Link to="/messages" className="link">Messages</Link>
          </h1>
          {isLoading
            ? <div className="loader"> <Loader /> </div>
            : error ? 'Something went wrong'
              : <div className="messages flex flex-col gap-2 border rounded-theme-s-r rounded-theme-s-r mb-4 p-4">
                {data.map((message) => (
                  <div className={message.userID._id === user._id ? 'owner item flex gap-4 row-reverse' : 'item flex gap-4 row-reverse'} key={message._id}>
                    <img
                      src={message.userID.image || '/media/noavatar.png'}
                      alt=""
                    />
                    <p>
                      {message.description}
                    </p>
                  </div>
                ))}
              </div>}
          <form className="flex items-start gap-4" onSubmit={handleMessageSubmit}>
            <textarea cols="30" rows="5" placeholder="Write a message" className='w-full focus:outline-white focus:outline-1 rounded-theme-s-r'></textarea>
            <button type='submit' className='btn-primary'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;