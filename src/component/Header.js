import React, { useState } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { TbSquareRoundedNumber1, TbSquareRoundedNumber2, TbSquareRoundedNumber3 } from "react-icons/tb";
import CampaignDetail from './CampaignDetail';
import CreateMenu from './CreateMenu';
import MenuDetails from './MenuDetails';

const Header = () => {
  const [active, setActive] = useState(0);
  const [editedUsers, setEditedUsers] = useState({});

  const handleClickBtn = (index) => {
    setActive(index);
  };

  const handleNavigate = (i) => {
    if (i <= active) {
      handleClickBtn(i);
    }
  };

  const steps = [
    { label: 'Section 1', content: <CampaignDetail handleClickBtn={handleClickBtn} />, description: 'Enter Basic Campaign Details' },
    { label: 'Section 2', content: <CreateMenu handleClickBtn={handleClickBtn} editedUsers={editedUsers} setEditedUsers={setEditedUsers} />, description: 'Create Menu' },
    { label: 'Section 3', content: <MenuDetails />, description: 'Enter Menu Details' },
  ];

  const getStepIcon = (i) => {
    if (active > i) {
      return <FaCircleCheck className='size-10 pr-2 text-blue-500' />;
    } else {
      switch (i) {
        case 0:
          return <TbSquareRoundedNumber1 className='size-10 pr-2' />;
        case 1:
          return <TbSquareRoundedNumber2 className='size-10 pr-2' />;
        case 2:
          return <TbSquareRoundedNumber3 className='size-10 pr-2' />;
        default:
          return null;
      }
    }
  };

  return (
    <div className='p-4'>
      <h5 className='text-xs underline'>Recipe Management</h5>
      <h3 className='text-l mt-3 font-bold'>Create New Campaign</h3>

      <div className='flex items-center justify-start bg-white mt-6 rounded-md'>
        {steps.map((step, i) => (
          <div
            key={step.label}
            className={`px-4 py-4 border-r-2 flex items-center justify-center rounded-md cursor-pointer ${active === i ? 'text-blue-600' : 'text-gray-400'}`}
            onClick={() => handleNavigate(i)}
          >
            {getStepIcon(i)}
            <div>
              <h4 className='font-bold'>{step.label}</h4>
              <p className='text-sm text-gray-400'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {steps[active].content}
      </div>
    </div>
  );
};

export default Header;
