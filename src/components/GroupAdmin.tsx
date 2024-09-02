import React, { useEffect, useState } from 'react';
import { createClient } from '../utils/supabase/client';
import Image from 'next/image';

interface GroupAdminProps {
  adminId: string;
}

function GroupAdmin({ adminId }: GroupAdminProps) {
  const supabase = createClient();
  const [admin, setAdmin] = useState<{ name: string; avatar: string } | null>(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const { data, error } = await supabase
          .from('users')
          .select('name, avatar')
          .eq('user_id', adminId)
          .single();

        if (error) {
          console.error('Error fetching admin data:', error);
          return;
        }

        if (data) {
          setAdmin(data);
        }
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchAdminData();
  }, [supabase, adminId]);

  if (!admin) {
    return <p className="text-[14px] font-bold text-red-400">Admin not found</p>;
  }

  return (
    <div className="flex items-center gap-4">
      <div className="w-6 h-6 rounded-full overflow-hidden">
        <Image
          src={admin.avatar}
          alt={admin.name}
          width={24}
          height={24}
          className="object-cover"
        />
      </div>
      <p className="text-[14px] font-bold">{admin.name}</p>
    </div>
  );
}

export default GroupAdmin;
