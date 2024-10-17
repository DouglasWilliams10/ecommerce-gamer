import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {

    // Configuração feita para que seja liberado o acesso as imagens para a aplicação
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com', // Se não funcionar, podes adicionar o **, que no caso libera de todos os hosts
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
