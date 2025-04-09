'use client'


import { useRouter } from 'next/navigation';
import CenteredTextBanner from './CenteredTextBanner'

interface ClientCenteredBannerProps {
    bgColor?: string;
    title: string;
    buttonText?: string;
}

export default function ClientCenteredBanner(props: ClientCenteredBannerProps) {
    const router = useRouter();
    const handleClick = () => {
        router.push('/specials');
    };

    return <CenteredTextBanner {...props} onClick={handleClick} />
} 