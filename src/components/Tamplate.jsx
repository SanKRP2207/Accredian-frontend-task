
import React, {useState} from 'react'
import ReferralModal from './ReferralModal';

function Tamplate() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='grid sm:grid-cols-12 sm:w-[1360px] sm:h-[692px] bg-custom-white bg-custom-image bg-cover bg-center rounded-lg shadow-lg'>
      <div className='sm:col-span-4 ml-8 mt-10'>
        <strong className='custom-strong'>
          Let’s Learn & Earn
        </strong>
        <div className='mb-2 custom-div'>
          Get a chance to win up-to <span className='custom-span'>Rs. 15,000</span>
        </div>
        <div className='custom-button-container'>
          <button type='button' className='custom-button' onClick={handleOpen}>Refer Now</button>
          <ReferralModal open={open} handleClose={handleClose} />
        </div>
      </div>
      <div className='sm:col-span-8 overflow-hidden'>
        <img
          className='object-cover w-full h-full mt-10'
          src='https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hIbh0cHW8rTmM860DX4~6Bf0tZgFlRVDcCJq1vgRkfZfjvUJ0~6ox9wYsO-qQ9R7CdUzK~09lhsg8-vQzN1MZ7xNYA-MtvlsOoJLC9xm6~YRIq2E4X5HYwvPC4tQw8dRdgAevuI0sSzUE6H-3uuZdu4ioHUI~qWqzoEyE8qvwkCKbal02~7fpDpgVreiA9xhSNAhP4Pi9VGj3tOHn7cPsCdYUsJufpLnQK7zf9Bhe~ZxOlekRM2QdociYG4bgLpe6U6RZFR6ImpQ8PQzww8j-m69ytI1zeA9PQdhXEXOSw5L2iLP6UMD8hV9uEB7ODNsuESyTo59t17DJFLkThXFKA__'
          alt="Description"
        />
      </div>
    </div>


  )
}

export default Tamplate
