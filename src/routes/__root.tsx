import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import * as React from 'react'
import type { QueryClient } from '@tanstack/react-query'
import appCss from '~/styles/app.css?url'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'SparkleClean Pro | Premium Cleaning Services – Residential & Commercial',
      },
      {
        name: 'description',
        content: 'Trusted by 5,000+ customers. Professional home & office cleaning with eco-friendly products. 100% satisfaction guaranteed. Get your free quote today!',
      },
      {
        name: 'keywords',
        content: 'cleaning service, home cleaning, office cleaning, eco-friendly cleaning, deep cleaning, move out cleaning, residential cleaning, commercial cleaning, SparkleClean',
      },
      // Open Graph
      {
        property: 'og:title',
        content: 'SparkleClean Pro | Premium Cleaning Services – Book Instantly',
      },
      {
        property: 'og:description',
        content: 'Hotel-quality cleaning for your home or business. Eco-friendly products, vetted cleaners, 100% guaranteed. Get your free quote in 2 minutes.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.sparklecleanpro.com',
      },
      {
        property: 'og:site_name',
        content: 'SparkleClean Pro',
      },
      {
        property: 'og:locale',
        content: 'en_US',
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'SparkleClean Pro – Premium Cleaning Services',
      },
      {
        name: 'twitter:description',
        content: 'Professional cleaning with eco-friendly products. 5,000+ happy customers. Satisfaction guaranteed.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://www.sparklecleanpro.com' },
      // Preconnect to Google Fonts
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
      },
    ],
  }),
  notFoundComponent: () => <div>Route not found</div>,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
