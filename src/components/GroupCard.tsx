'use client';
import Image from 'next/image';
import React from 'react';
import Button from './ui/button';

interface GroupCardProps {
  groups: any[]; // Define el tipo adecuado aquí si tienes tipos específicos
}

function GroupCard({ groups }: GroupCardProps) {
  if (!groups || groups.length === 0) {
    return <p className='text-center font-bold text-2xl p-8'>No groups found.</p>; // Mensaje si no hay grupos
  }

  return (
    <div className="grid grid-cols-3 gap-[64px] mt-6">
      {groups.map((group) => (
        <div key={group.id} className="h-[280px] rounded-[16px] bg-white">
          <div className="relative">
            <div className="h-[128px] rounded-t-xl">
              <Image src={group.bannerimage} alt={group.name} layout="fill" objectFit="cover" className="rounded-t-[16px]" />
            </div>
            <p className="absolute top-[14px] right-[14px] bg-white rounded-sm text-[12px] uppercase font-bold py-[5px] px-[8px]">{group.subject}</p>
          </div>
          <div className="p-4 h-[152px]">
            <h3 className="text-[22px] font-bold truncate">{group.name}</h3>
            <div className="flex justify-between items-center my-2">
              <p className="text-[14px] font-bold">Posts: {group.posts}</p>
              <p className="text-[12px] font-bold text-primary-600">{group.members ? group.members.length : 0} Members</p>
            </div>
            <div className="flex justify-around items-start gap-x-[8px] mt-2 mb-4">
              <div className="w-[258px] h-[54px] overflow-hidden">
                <p className="text-[14px] line-clamp-2">{group.description}</p>
              </div>
              <Button text="Join" className="py-[10px] px-[12px] w-[52px] h-[36px] uppercase font-dmSans text-[12px] text-primary-blue bg-white border-gray-300 border-solid border rounded-[4px]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroupCard;
