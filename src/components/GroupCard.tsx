'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from './ui/button';
import GroupAdmin from './GroupAdmin';
import GroupCard from "../components/widgets/groupcard/GroupCard";

interface GroupCardProps {
  groups: any[];
}

function GroupCards({ groups }: GroupCardProps) {
  const [admins, setAdmins] = useState<{ [key: string]: { name: string; avatar: string } }>({});
  if (!groups || groups.length === 0) {
    return <p className='text-center font-bold text-2xl p-8'>No groups found.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-[64px] mt-6">
      {groups.map((group) => (
        <GroupCard
        key={group.id}
        bannerImageLink={group.bannerimage}
        avatarLink={admins[group.admin_id]?.avatar || ''}
        adminName={admins[group.admin_id]?.name || ''}
        name={group.name}
        description={group.description}
        members={group.member_ids.length}
        subject={group.subject}
        actionName="Enter"
        handleClickAction={() => {/* Acción cuando se hace clic en el botón "Enter" */}}
      />
      ))}
    </div>
  );
}

export default GroupCards;
