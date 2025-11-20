/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    domains: ["unsplash.com"],
  },
};

const ContentSecurityPolicy = `
  default-src 'self' https://static.elfsight.com/ https://api.simplesvg.com/ https://api.iconify.design/ https://core.service.elfsight.com/ https://elfsightcdn.com/ https://universe-static.elfsightcdn.com/ https://service-reviews-ultimate.elfsight.com/ https://service-reviews-ultimate.elfsight.com/ 'unsafe-inline' 'unsafe-eval';
  child-src 'self' ;
  style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline' data:;
  font-src 'self' https://fonts.gstatic.com/ 'unsafe-inline' data:;
  img-src 'self' https://files.elfsightcdn.com/ https://phosphor.utils.elfsightcdn.com/ data: blob:;
`;

const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

export default nextConfig;
