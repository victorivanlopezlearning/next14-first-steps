import Link from 'next/link';

interface ActiveLinkProps {
  path: string;
  text: string;
}

export default function ActiveLink({ path, text }: ActiveLinkProps) {
  return (
    <li>
      <Link
        href={path}
        className="block py-2 px-3 md:p-0 text-white rounded md:hover:text-blue-500 transition-colors"
        aria-current="page"
      >
        {text}
      </Link>
    </li>
  )
}