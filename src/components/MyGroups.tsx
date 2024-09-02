'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { createClient } from '../utils/supabase/client';
import Button from './ui/button';
import { getLoggedInUser } from '@/utils/actions/user.actions';

function MyGroups() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [groups, setGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserAndGroups = async () => {
      try {
        // Fetch logged in user
        const loggedInUser = await getLoggedInUser();
        setUser(loggedInUser);

        // Fetch groups for the logged-in user
        const fetchGroups = async () => {
          try {
            setLoading(true);

            const { data, error, status } = await supabase
              .from('groups')
              .select('*')
              .contains('member_ids', [loggedInUser.uuid]); // Usa contains para buscar en un array

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
  }, [supabase]); // Dependencia para evitar recrear el cliente de Supabase en cada renderizado

  if (loading) {
    return <p>Loading...</p>; // Mostrar un mensaje de carga mientras se recuperan los datos
  }

  return (
    <div className="grid grid-cols-3 gap-[64px] mt-6">
      {groups.map((group) => (
        <div key={group.id} className="w-[360px] h-[280px] rounded-[16px] bg-white">
          <div className="relative">
            <div className="relative w-[360px] h-[128px] rounded-t-xl overflow-hidden">
              <Image
                src={group.bannerimage}
                alt={group.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-[16px]"
              />
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
              <Button text="Enter" className="py-[10px] px-[12px] w-[52px] h-[36px] uppercase font-dmSans text-[12px] text-primary-blue bg-white border-gray-300 border-solid border rounded-[4px]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyGroups;
