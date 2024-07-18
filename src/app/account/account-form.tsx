import Avatar from './avatar';
import { useCallback, useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { type User } from '@supabase/supabase-js';
import Button from '@/components/ui/button';

interface AccountFormProps {
  user: User | null;
}

export default function AccountForm({ user }: AccountFormProps): JSX.Element {
  const supabase = createClient();
  const [loading, setLoading] = useState<boolean>(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from('profiles')
        .select('fullName, username, website, avatarUrl')
        .eq('id', user?.id)
        .single();
      // Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator  
      // if (error || !data) {
      //   throw error || new Error('Profile data not found');
      // }

      if (error) {
        throw new Error(error.message);
      }

      if (!data) {
        throw new Error('Profile data not found');
      }

      setFullname(data.fullName ?? null);
      setUsername(data.username ?? null);
      setWebsite(data.website ?? null);
      setAvatarUrl(data.avatarUrl ?? null);
    } catch (error) {
      alert('Error fetching profile data!');
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    if (user) {
      getProfile();
    }
  }, [user, getProfile]);

  const updateProfile = async ({
    username,
    fullname,
    website,
    avatarUrl,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatarUrl: string | null;
  }): Promise<void> => {
    try {
      setLoading(true);

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        fullName: fullname,
        username,
        website,
        avatarUrl,
        updatedAt: new Date().toISOString(),
      });

      if (error) {
        throw new Error(error.message);
      }

      alert('Profile updated!');
    } catch (error) {
      alert('Error updating the data!');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateClick = async (): Promise<void> => {
    await updateProfile({ fullname, username, website, avatarUrl });
  };

  const handleSignOut = (): void => {
    const form = document.createElement('form');
    form.method = 'post';
    form.action = '/auth/signout';
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="form-widget flex flex-col h-screen w-full justify-center items-center gap-2">
      <div className="flex justify-center items-center">
        <Avatar
          uid={user?.id ?? null}
          url={avatarUrl}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url);
            updateProfile({ fullname, username, website, avatarUrl: url });
          }}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={user?.email ?? ''}
          className="border border-grey rounded-lg px-2"
          disabled
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={fullname ?? ''}
          onChange={(e) => { setFullname(e.target.value); }}
          className="border border-grey rounded-lg px-2"
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username ?? ''}
          onChange={(e) => { setUsername(e.target.value); }}
          className="border border-grey rounded-lg px-2"
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="url"
          value={website ?? ''}
          onChange={(e) => { setWebsite(e.target.value); }}
          className="border border-grey rounded-lg px-2"
        />
      </div>

      <div className="flex gap-2">
        <Button
          className="rounded-lg py-0.5 px-2 w-full"
          onClick={handleUpdateClick}
          disabled={loading}
          text={loading ? 'Loading ...' : 'Update'}
        />
      </div>

      <div className="flex gap-2">
        <Button
          type="button"
          onClick={handleSignOut}
          text="Sign out"
          className="rounded-lg py-0.5 px-2 w-full"
        />
      </div>
    </div>
  );
}
