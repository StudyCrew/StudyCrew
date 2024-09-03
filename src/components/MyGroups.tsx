'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '../utils/supabase/client';
import { getLoggedInUser } from '@/utils/actions/user.actions';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import GroupCard from "../components/widgets/groupcard/GroupCard";

function MyGroups() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [groups, setGroups] = useState<any[]>([]);
  const [admins, setAdmins] = useState<{ [key: string]: { name: string; avatar: string } }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchUserAndGroups = async () => {
      try {
        const loggedInUser = await getLoggedInUser();
        setUser(loggedInUser);

        setLoading(true);

        // Fetch groups
        const { data: groupsData, error: groupsError } = await supabase
          .from('groups')
          .select('*')
          .contains('member_ids', [loggedInUser.uuid]);

        if (groupsError) {
          throw groupsError;
        }

        if (groupsData) {
          setGroups(groupsData);

          // Fetch admins data for all groups
          const adminIds = [...new Set(groupsData.map((group: any) => group.admin_id))];
          if (adminIds.length > 0) {
            const { data: adminsData, error: adminsError } = await supabase
              .from('users')
              .select('user_id, name, avatar')
              .in('user_id', adminIds);

            if (adminsError) {
              throw adminsError;
            }

            if (adminsData) {
              const adminsMap = adminsData.reduce((acc: any, admin: any) => {
                acc[admin.user_id] = { name: admin.name, avatar: admin.avatar };
                return acc;
              }, {});
              setAdmins(adminsMap);
            }
          }
        }
      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoading(false);
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
      {currentIndex < groups.length - 3 && (
        <FaChevronRight onClick={handleNext} className="w-[12px] h-[22px] text-blue-500 cursor-pointer" />
      )}
    </div>
  );
}

export default MyGroups;
