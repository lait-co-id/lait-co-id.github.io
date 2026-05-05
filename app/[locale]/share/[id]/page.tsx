import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  params: Promise<{ locale: string; id: string }>;
}

async function getSharedData(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shares/${id}`, {
      next: { revalidate: 60 } // cache for 1 minute
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.success ? json.data : null;
  } catch (e) {
    return null;
  }
}

export async function generateMetadata(
  props: Props
): Promise<Metadata> {
  const { id } = await props.params;
  const data = await getSharedData(id);

  if (!data) {
    return { title: 'Share Not Found | LAIT' };
  }

  const runName = data.run?.name || 'Run Activity';
  const userName = data.run?.user?.name || 'A runner';
  const title = `${userName}'s Run: ${runName} | LAIT`;
  const description = `Check out this run activity by ${userName} on LAIT.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: data.imageUrl, width: 1080, height: 1080 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [data.imageUrl],
    },
  };
}

export default async function SharedImagePage(props: Props) {
  const { id } = await props.params;
  const data = await getSharedData(id);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative w-full aspect-square">
          <Image 
            src={data.imageUrl} 
            alt="Shared Run Activity" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="p-8 text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white">
              {data.run?.user?.name ? `${data.run.user.name}'s Run` : 'Run Activity'}
            </h1>
            <p className="text-slate-400">
              {data.run?.distance ? `${(data.run.distance / 1000).toFixed(2)} km` : ''} 
              {data.run?.duration ? ` • ${Math.floor(data.run.duration / 60)} min` : ''}
            </p>
          </div>
          
          <div className="pt-4 space-y-3">
            <a 
              href={data.imageUrl} 
              download={`lait-run-${id}.jpg`}
              className="block w-full py-3 px-4 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl transition-colors"
            >
              Download Image
            </a>
            
            <Link 
              href="/"
              className="block w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors"
            >
              Get the LAIT App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
