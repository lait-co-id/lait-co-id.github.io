import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

interface Props {
  params: Promise<{ id: string }>;
}

const getPreferredLocale = async () => {
  const headerStore = await headers();
  const acceptLanguage = headerStore.get('accept-language')?.toLowerCase() || '';

  if (acceptLanguage.includes('id')) {
    return 'id';
  }

  return 'en';
};

export default async function ShareRedirectPage(props: Props) {
  const { id } = await props.params;
  const locale = await getPreferredLocale();

  redirect(`/${locale}/share/${id}`);
}
