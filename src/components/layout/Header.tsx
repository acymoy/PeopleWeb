import Link from 'next/link'

const HEADER_ITEMS = [
  {
    name: 'Features',
    link: '/features',
  },
  {
    name: 'Pricing',
    link: '/pricing',
  },
  {
    name: 'Dashboard',
    link: '/dashboard',
  },
]

const Header = () => {
  //TODO: Add authentication data/info
  const _isAuthenticated = true

  return (
    <header className='sticky w-full h-12 bg-white px-10 py-8 flex items-center border-b border-border'>
      <nav aria-label='Global' className='flex justify-between w-full items-center'>
        <Link href='/' className='shrink-0'>
          <div className='text-xl font-bold'>
            <span className='text-charcoal'>People</span>
            <span className='text-lavender-deep'>Web</span>
          </div>
        </Link>
        <ul className='flex justify-around gap-8 font-semibold text-sm items-center'>
          {HEADER_ITEMS.map((item) => (
            <li key={item.name} className='text-warm-gray'>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
          <li className='rounded-lg bg-charcoal text-cream px-4 py-3'>
            <Link href='/signup'>Get Started Free</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
