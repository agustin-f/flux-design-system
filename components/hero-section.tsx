"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background pattern with floating icons */}
      <div className="absolute inset-0 opacity-20">
        {/* Top right icons */}
        <div className="absolute top-20 right-20 text-muted-foreground animate-float">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className="absolute top-32 right-32 text-muted-foreground animate-float-delayed">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="absolute top-48 right-48 text-muted-foreground animate-float">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="absolute top-64 right-64 text-muted-foreground animate-float-delayed">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </div>

        {/* Middle right icons */}
        <div className="absolute top-1/2 right-40 text-muted-foreground animate-float">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <div className="absolute top-1/2 right-56 text-muted-foreground animate-float-delayed">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Bottom right icons */}
        <div className="absolute bottom-40 right-32 text-muted-foreground animate-float-delayed">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <div className="absolute bottom-56 right-48 text-muted-foreground animate-float">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Logo and title */}
          <div className="flex-1 text-center lg:text-left">
            <div className="relative mb-8 inline-block">
              {/* Animated spiral background */}
              <div className="relative w-64 h-64 mx-auto lg:mx-0">
                <div className="absolute inset-0 animate-spin-slow">
                  <Image
                    src="/images/bg-logo.png"
                    alt="FLUX spiral logo"
                    width={256}
                    height={256}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                {/* Text overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/text-overlay-logo.png"
                    alt="FLUX Design System"
                    width={300}
                    height={200}
                    className="w-auto h-auto max-w-[280px] object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mt-6">
           Flux is an exploratory project developing a scalable token-based design system, testing visual coherence and light/dark modes. Current components and data are temporary examples.
            </p>
          </div>


          <div className="flex-1">
            <div className="relative w-full max-w-lg mx-auto">
                  <Image
                    src="/images/flux-page.png"
                    alt="FLUX page preview"
                    width={256}
                    height={256}
                    className="w-full h-full object-contain"
                    priority
                  />
             </div>
          </div>
          
          

      
        </div>
      </div>


      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
