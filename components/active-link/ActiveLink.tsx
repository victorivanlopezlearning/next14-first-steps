'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
  path: string;
  text: string;
}

export default function ActiveLink({ path, text }: ActiveLinkProps) {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`${path === pathName ? 'text-blue-500' : 'text-white'} block py-2 px-3 md:p-0 rounded md:hover:text-blue-500 transition-colors`}
      >
        {text}
      </Link>
    </li>
  )
}