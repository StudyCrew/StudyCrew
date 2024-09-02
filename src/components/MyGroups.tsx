'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { createClient } from '../utils/supabase/client';
import Button from './ui/button';
import { getLoggedInUser } from '@/utils/actions/user.actions';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function MyGroups() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [groups, setGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Índice del carrusel

  useEffect(() => {
    const fetchUserAndGroups = async () => {
      try {
        const loggedInUser = await getLoggedInUser();
        setUser(loggedInUser);

        const fetchGroups = async () => {
          try {
            setLoading(true);

            const { data, error, status } = await supabase
              .from('groups')
              .select('*')
              .contains('member_ids', [loggedInUser.uuid]);

            if (error && status !== 406) {
              throw error;
            }

            if (data) {
              setGroups(data);
            }
          } catch (error: any) {
            alert(error.message);
          } finally {
            setLoading(false);
          }
        };

        fetchGroups();
      } catch (error: any) {
        alert(error.message);
      }
    };

    fetchUserAndGroups();
  }, [supabase]);

  const handleNext = () => {
    if (currentIndex < groups.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-6 flex items-center gap-8">
      {currentIndex > 0 && (
        <FaChevronLeft onClick={handlePrev} className="w-[12px] h-[22px] text-blue-500 cursor-pointer" />
      )}
      <div className="grid grid-cols-3 gap-8">
        {groups.slice(currentIndex, currentIndex + 3).map((group) => (
          <div key={group.id} className="h-[280px] rounded-[16px] bg-white">
            <div className="relative">
              <div className="relative h-[128px] rounded-t-xl overflow-hidden">
                <Image
                  src={group.bannerimage}
                  alt={group.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-[16px]"
                />
              </div>
              <p className="absolute top-[14px] right-[14px] bg-white rounded-sm text-[12px] uppercase font-bold py-[5px] px-[8px]">
                {group.subject}
              </p>
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
                <Button
                  text="Enter"
                  className="py-[10px] px-[12px] w-[52px] h-[36px] uppercase font-dmSans text-[12px] text-primary-blue bg-white border-gray-300 border-solid border rounded-[4px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {currentIndex < groups.length - 3 && (
        <FaChevronRight onClick={handleNext} className="w-[12px] h-[22px] text-blue-500 cursor-pointer" />
      )}
    </div>
  );
}

export default MyGroups;
