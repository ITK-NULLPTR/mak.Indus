export async function getNavigation(): Promise<TNavigationItem[]> {
  return [
    {
      id: '1',
      href: '/',
      name: 'Home',
    },
    {
      id: 'shop',
      href: '/collections/all',
      name: 'Shop',
      type: 'dropdown',
      children: [
        { id: 'kitchen', href: '/collections/kitchen', name: 'Kitchen Tools' },
        { id: 'gardening', href: '/collections/gardening', name: 'Gardening Tools' },
        { id: 'cookware', href: '/collections/cookware', name: 'Cookware' },
        { id: 'garden-acc', href: '/collections/garden-accessories', name: 'Garden Accessories' },
      ],
    },
    {
      id: '2',
      href: '/about',
      name: 'About Us',
    },
    {
      id: '3',
      href: '/contact',
      name: 'Contact us',
    },
  ]
}

export async function getNavMegaMenu(): Promise<TNavigationItem> {
  const navigation = await getNavigation()

  // Find the mega menu item in the navigation array
  return navigation[4]
}

// ============ TYPE =============
export type TNavigationItem = Partial<{
  id: string
  href: string
  name: string
  type?: 'dropdown' | 'mega-menu'
  isNew?: boolean
  children?: TNavigationItem[]
}>

