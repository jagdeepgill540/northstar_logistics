'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';
import React from 'react';


interface IProps {
  btnClass?: string;
  inputClass?: string;
}
interface FormData {
  name: string;
  email: string;
  phone: string;
  website?: string;
  messages: string;
}

// Create a validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required('Your Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  website: yup.string(),
  messages: yup
    .string()
    .min(10, 'Note must be at least 10 characters')
    .required('Note is required'),
});

const API_BASE_URL = 'https://backend.northstarlogistics.com.au';

const ContactFormThree = ({ btnClass,inputClass }: IProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState('');
  const [error, setError] = React.useState('');

  const onSubmit = handleSubmit(async (data: FormData) => {
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/contact-us/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      setSuccess('Your message has been sent successfully!');
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong.');
      }
    } finally {
      setLoading(false);
    }
  });
  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Success/Error Messages */}
      {success && <div className="alert alert-success mb-3">{success}</div>}
      {error && <div className="alert alert-danger mb-3">{error}</div>}
      <div className="it-contact-input-wrap">
        <div className="row gx-20">
          <div className="col-sm-6 mb-20">
            <div className={inputClass || 'it-contact-input-box'}>
              <input type="text" placeholder="Name:" {...register('name')} />
              <ErrorMsg msg={errors.name?.message || ''} />
            </div>
          </div>
          <div className="col-sm-6 mb-20">
            <div className={inputClass || 'it-contact-input-box'}>
              <input type="email" placeholder="Email:" {...register('email')} />
              <ErrorMsg msg={errors.email?.message || ''} />
            </div>
          </div>
          <div className="col-sm-6 mb-20">
            <div className={inputClass || 'it-contact-input-box'}>
              <input type="text" placeholder="Phone:" {...register('phone')} />
              <ErrorMsg msg={errors.phone?.message || ''} />
            </div>
          </div>
          <div className="col-sm-6 mb-20">
            <div className={inputClass || 'it-contact-input-box'}>
              <input
                type="text"
                placeholder="Website:"
                {...register('website')}
              />
              <ErrorMsg msg={errors.website?.message || ''} />
            </div>
          </div>
          <div className="col-sm-12 mb-30">
            <div className={inputClass?'it-contact-textarea-box-white': 'it-contact-textarea-box'} >
              <textarea
                placeholder="Message:"
                {...register('messages')}
              ></textarea>
              <ErrorMsg msg={errors.messages?.message || ''} />
            </div>
          </div>
        </div>
        <div className="it-contact-btn">
          <button type="submit" className={btnClass || 'it-btn-orange'} disabled={loading}>
            <span>{loading ? 'Submitting...' : 'submit comment'}</span>
          </button>
        </div>
      </div>
    </form>
  );
};
export default ContactFormThree;
