'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './theme-provider';

export default function ThemeClient({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // On the server (before mount), render plain children so SSR and client HTML match
    if (!mounted) return <>{children}</>;

    // After mount, enable next-themes provider (avoids hydration mismatch)
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
            {children}
        </ThemeProvider>
    );
}
