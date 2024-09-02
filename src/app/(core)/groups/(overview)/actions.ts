// groups/actions.ts
import { createClient } from '@/utils/supabase/client';
import { Group } from '@/types';

export const filterGroupsBySubject = async (subject: string): Promise<Group[]> => {
  const supabase = createClient();

  try {
    const { data, error, status } = await supabase
      .from('groups')
      .select('*');

    if (error && status !== 406) {
      throw error;
    }

    if (!data) {
      return [];
    }

    switch (subject.toLowerCase()) {
      case 'math':
        return data.filter(group => group.subject.toLowerCase() === 'math');
      case 'science':
        return data.filter(group => group.subject.toLowerCase() === 'science');
      case 'english':
        return data.filter(group => group.subject.toLowerCase() === 'english');
      case 'social science':
        return data.filter(group => group.subject.toLowerCase() === 'social science');
      case 'computing':
        return data.filter(group => group.subject.toLowerCase() === 'computing');
      case 'languages':
        return data.filter(group => group.subject.toLowerCase() === 'languages');
      case 'all groups':
      default:
        return data; // Si se selecciona "All Groups" o no coincide, retorna todos los grupos
    }
  } catch (error: any) {
    console.error('Error fetching groups:', error.message);
    return [];
  }
};
