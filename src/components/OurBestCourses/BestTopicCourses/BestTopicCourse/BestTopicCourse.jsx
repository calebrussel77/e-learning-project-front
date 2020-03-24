import React from 'react';
// import PhotoIcon from '../../../../assets/images/Icon material-add-a-photo.svg';
// import BusinessIcon from '../../../../assets/images/Icon material-business-center.svg';
import ComputerIcon from '../../../../assets/images/computer.svg';
// import PoliticsIcon from '../../../../assets/images/Icon map-local-government.svg';
import DeskImg from '../../../../assets/images/deskImg.png';

const BestTopicCourse = () => {
    return (
        <div className='mb-10 max-w-xss'>
                <img src={DeskImg} alt='images' className='object-center object-cover' />
            <div className='flex items-center justify-center -mt-12'>
                <img src={ComputerIcon} alt="computer" className='w-8 h-8 inline-block p-0 m-0' />
                <h2 className='uppercase text-white font-semibold text-center ml-2'>Developpement Personnel</h2>
            </div>
        </div>


    );
};

export default BestTopicCourse;