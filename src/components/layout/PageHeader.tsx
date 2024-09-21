/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from 'react';
import clsx from 'clsx'; // Import clsx for merging class names
import { createClient } from '@/utils/supabase/client';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

interface PageHeaderProps {
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
  const supabase = createClient();
  const [readAll, setReadAll] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const { data } = await supabase
        .from('notifications')
        .select('*');
        
      const unread = data?.filter((noti: any) => !noti.read);
      console.log(unread);
      if (unread?.length === 0) {
        setReadAll(true);
      } else {
        setReadAll(false);
      }
    }
    fetchData();
  }, [supabase]);

  const notReadSvg=<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.0001 24.5H6.00009C5.82506 24.4989 5.65338 24.452 5.5022 24.3638C5.35101 24.2756 5.22563 24.1492 5.13857 23.9974C5.05152 23.8456 5.00584 23.6735 5.0061 23.4985C5.00637 23.3235 5.05257 23.1516 5.14009 23C5.96384 21.575 7.00009 17.9762 7.00009 13.5C7.00009 11.1131 7.9483 8.82387 9.63613 7.13604C11.324 5.44821 13.6131 4.5 16.0001 4.5C18.387 4.5 20.6762 5.44821 22.364 7.13604C24.0519 8.82387 25.0001 11.1131 25.0001 13.5C25.0001 17.9775 26.0376 21.575 26.8626 23C26.9502 23.1518 26.9964 23.3239 26.9966 23.4991C26.9967 23.6744 26.9508 23.8466 26.8635 23.9985C26.7761 24.1504 26.6504 24.2767 26.4989 24.3647C26.3473 24.4527 26.1753 24.4994 26.0001 24.5Z" fill="#D3E4FF"/>
  <path d="M27.725 22.4925C27.0313 21.2975 26 17.9163 26 13.5C26 10.8478 24.9464 8.3043 23.0711 6.42893C21.1957 4.55357 18.6522 3.5 16 3.5C13.3479 3.5 10.8043 4.55357 8.92895 6.42893C7.05358 8.3043 6.00002 10.8478 6.00002 13.5C6.00002 17.9175 4.96752 21.2975 4.27377 22.4925C4.0966 22.7963 4.00268 23.1415 4.00148 23.4931C4.00027 23.8448 4.09182 24.1906 4.26689 24.4956C4.44196 24.8006 4.69437 25.0541 4.99865 25.2304C5.30293 25.4068 5.64833 25.4997 6.00002 25.5H11.1013C11.332 26.6289 11.9455 27.6436 12.8382 28.3722C13.7308 29.1009 14.8477 29.4989 16 29.4989C17.1523 29.4989 18.2692 29.1009 19.1618 28.3722C20.0545 27.6436 20.6681 26.6289 20.8988 25.5H26C26.3516 25.4995 26.6968 25.4064 27.0009 25.23C27.3051 25.0535 27.5573 24.8 27.7322 24.4951C27.9071 24.1901 27.9986 23.8444 27.9973 23.4928C27.996 23.1412 27.9021 22.7962 27.725 22.4925ZM16 27.5C15.3798 27.4998 14.7749 27.3074 14.2685 26.9492C13.7622 26.5911 13.3793 26.0848 13.1725 25H18.8275C18.6208 26.0848 18.2379 26.5911 17.7315 26.9492C17.2252 27.3074 16.6202 27.4998 16 27.5ZM6.00002 23.5C6.96252 21.845 8.00002 18.01 8.00002 13.5C8.00002 11.3783 8.84287 9.34344 10.3432 7.84315C11.8435 6.34285 13.8783 5.5 16 5.5C18.1217 5.5 20.1566 6.34285 21.6569 7.84315C23.1572 9.34344 24 11.3783 24 13.5C24 18.0063 25.035 21.8412 26 23.5H6.00002Z" fill="#2353A0"/>
  <circle cx="25" cy="8" r="6" fill="#E83B3B" stroke="#F2F4F7" strokeWidth="2"/>
  </svg>
  
  const readSvg= <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26.0001 24H6.00009C5.82506 23.9989 5.65338 23.952 5.5022 23.8638C5.35101 23.7756 5.22563 23.6492 5.13857 23.4974C5.05152 23.3456 5.00584 23.1735 5.0061 22.9985C5.00637 22.8235 5.05257 22.6516 5.14009 22.5C5.96384 21.075 7.00009 17.4762 7.00009 13C7.00009 10.6131 7.9483 8.32387 9.63613 6.63604C11.324 4.94821 13.6131 4 16.0001 4C18.387 4 20.6762 4.94821 22.364 6.63604C24.0519 8.32387 25.0001 10.6131 25.0001 13C25.0001 17.4775 26.0376 21.075 26.8626 22.5C26.9502 22.6518 26.9964 22.8239 26.9966 22.9991C26.9967 23.1744 26.9508 23.3466 26.8635 23.4985C26.7761 23.6504 26.6504 23.7767 26.4989 23.8647C26.3473 23.9527 26.1753 23.9994 26.0001 24ZM27.725 22C27.0313 20.805 26.0001 17.4237 26.0001 13C26.0001 10.3478 24.9464 7.8043 23.0711 5.92893C21.1957 4.05357 18.6522 3 16.0001 3C13.3479 3 10.8043 4.05357 8.92895 5.92893C7.05358 7.8043 6.00002 10.3478 6.00002 13C6.00002 17.4175 4.96752 20.7975 4.27377 21.9925C4.0966 22.2963 4.00268 22.6415 4.00148 22.9931C4.00027 23.3448 4.09182 23.6906 4.26689 23.9956C4.44196 24.3006 4.69437 24.5541 4.99865 24.7304C5.30293 24.9068 5.64833 24.9997 6.00002 25H11.1013C11.332 26.1289 11.9455 27.1436 12.8382 27.8722C13.7308 28.6009 14.8477 28.9989 16.0001 28.9989C17.1523 28.9989 18.2692 28.6009 19.1618 27.8722C20.0545 27.1436 20.6681 26.1289 20.8988 25H26.0001C26.3516 24.9995 26.6968 24.9064 27.0009 24.73C27.3051 24.5535 27.5573 24.3 27.7322 23.9951C27.9071 23.6901 27.9986 23.3444 27.9973 22.9928C27.996 22.6412 27.9021 22.2962 27.725 22ZM16.0001 27C15.3798 26.9998 14.7749 26.8074 14.2685 26.4492C13.7622 26.0911 13.3793 25.5848 13.1725 24.5H18.8275C18.6208 25.5848 18.2379 26.0911 17.7315 26.4492C17.2252 26.8074 16.6202 26.9998 16.0001 27Z" fill="#2353A0"/>
</svg>
  return (
    <div className={clsx("w-[350px] lg:w-[800px] md:w-[600px] sm:w-[500px] flex px-5 py-5 justify-between items-center bg-header_background", className)}>
      <div className="relative">
        <input 
          className="w-[250px] lg:w-[500px] md:w-[400px] sm:w-[35px] flex px-2 pr-[30px] py-[2px] h-[30px] bg-header_input_background border-2 rounded-md outline-none border-header_input_border"
          placeholder="Search study groups, tutors and learning paths"
        />
        <PiMagnifyingGlassBold size={32} className='text-magnifying_glass_color absolute right-2 w-[21px] h-[21px] my-auto top-0 bottom-0'/>
      </div>
      <div className="relative">
        {!readAll && (
          <>
            {notReadSvg}
          </>
        )}
        {readAll && (
          <>
            {readSvg}
          </>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
