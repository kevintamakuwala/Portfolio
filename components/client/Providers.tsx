"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { Suspense, useEffect, ReactNode } from "react";
// import { jsx as _jsx } from 'react/jsx-runtime';

interface ProvidersProps {
 children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {

 return (
  <>
   <Suspense fallback={<></>}>
    <AppProgressBar color="#3b82f6" height="2px" options={{ showSpinner: false }} shallowRouting />
   </Suspense>
   {children}
  </>
 );
}
