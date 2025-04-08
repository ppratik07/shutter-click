'use client'

import CenteredTextBanner from './CenteredTextBanner'

interface ClientCenteredBannerProps {
    bgColor?: string;
    title: string;
    buttonText?: string;
}

export default function ClientCenteredBanner(props: ClientCenteredBannerProps) {
    const handleClick = () => {
        console.log('Banner clicked!');
    };

    return <CenteredTextBanner {...props} onClick={handleClick} />
} 