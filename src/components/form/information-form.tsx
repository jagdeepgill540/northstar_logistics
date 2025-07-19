'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';
import React from 'react';

interface IProps {
  btnClass?: string;
}

// Booking interface fields
interface BookingFormData {
  timeStart: string; // ISO string for input type="datetime-local"
  timeEnd: string;
  fullName: string;
  mobile: string;
  pickUpFrom: string;
  dropOffLocation: string;
  orderNo: string;
  contactDetails: string;
  loadType: string;
  specialRequirements: string;
}

const schema = yup.object({
  timeStart: yup.string().required('Start time is required'),
  timeEnd: yup.string().required('End time is required'),
  fullName: yup.string().required('Full name is required'),
  mobile: yup.string().required('Mobile is required'),
  pickUpFrom: yup.string().required('Pick up location is required'),
  dropOffLocation: yup.string().required('Drop off location is required'),
  orderNo: yup.string().required('Order number is required'),
  contactDetails: yup.string().required('Contact details are required'),
  loadType: yup.string().required('Load type is required'),
  specialRequirements: yup.string().required('Special requirements are required'),
});

const API_BASE_URL = 'https://backend.northstarlogistics.com.au';

export default function InformationForm({ btnClass }: IProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState('');
  const [error, setError] = React.useState('');

  const onSubmit = handleSubmit(async (data: BookingFormData) => {
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      // Convert time fields to Date if needed by backend, else send as string
      const response = await fetch(`${API_BASE_URL}/booking/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timeStart: new Date(data.timeStart),
          timeEnd: new Date(data.timeEnd),
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }
      setSuccess('Booking submitted successfully!');
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
    <form onSubmit={onSubmit}>
      {/* Success/Error Messages */}
      {success && <div className="alert alert-success mb-3">{success}</div>}
      {error && <div className="alert alert-danger mb-3">{error}</div>}
      <div className="row gx-20">
        <div className="col-lg-6 col-md-6">
          <div className="it-information-input-box mb-20">
            <label>Start Time</label>
            <input type="datetime-local" {...register('timeStart')} />
            <ErrorMsg msg={errors.timeStart?.message || ''} />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="it-information-input-box mb-20">
            <label>End Time</label>
            <input type="datetime-local" {...register('timeEnd')} />
            <ErrorMsg msg={errors.timeEnd?.message || ''} />
          </div>
        </div>
      </div>
      <div className="row gx-20">
        <div className="col-lg-6 col-md-6">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Full Name" {...register('fullName')} />
            <ErrorMsg msg={errors.fullName?.message || ''} />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Mobile" {...register('mobile')} />
            <ErrorMsg msg={errors.mobile?.message || ''} />
          </div>
        </div>
      </div>
      <div className="row gx-20">
        <div className="col-lg-6 col-md-6">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Pick Up From" {...register('pickUpFrom')} />
            <ErrorMsg msg={errors.pickUpFrom?.message || ''} />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Drop Off Location" {...register('dropOffLocation')} />
            <ErrorMsg msg={errors.dropOffLocation?.message || ''} />
          </div>
        </div>
      </div>
      <div className="row gx-20">
        <div className="col-lg-6 col-md-6">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Order No" {...register('orderNo')} />
            <ErrorMsg msg={errors.orderNo?.message || ''} />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Contact Details" {...register('contactDetails')} />
            <ErrorMsg msg={errors.contactDetails?.message || ''} />
          </div>
        </div>
      </div>
      <div className="row gx-20">
        <div className="col-lg-6 col-md-6">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Load Type" {...register('loadType')} />
            <ErrorMsg msg={errors.loadType?.message || ''} />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Special Requirements" {...register('specialRequirements')} />
            <ErrorMsg msg={errors.specialRequirements?.message || ''} />
          </div>
        </div>
      </div>
      <button className={btnClass || 'it-btn-orange w-100'} type="submit" disabled={loading}>
        <span>{loading ? 'Submitting...' : 'Book a Service'}</span>
      </button>
    </form>
  );
}
