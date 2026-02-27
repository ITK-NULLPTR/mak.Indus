import collectionImage1 from '@/images/collections/1.png'
import collectionImage2 from '@/images/collections/2.png'
import collectionImage3 from '@/images/collections/3.png'
import collectionImage4 from '@/images/collections/4.png'
import avatarImage1 from '@/images/users/avatar1.jpg'
import avatarImage2 from '@/images/users/avatar2.jpg'
import avatarImage3 from '@/images/users/avatar3.jpg'
import avatarImage4 from '@/images/users/avatar4.jpg'
import kitchenImage1 from '@/images/kitchen/1.webp'
import kitchenImage2 from '@/images/kitchen/2.webp'
import kitchenImage3 from '@/images/kitchen/3.webp'
import gardeningImage1 from '@/images/gardening/1.webp'
import gardeningImage2 from '@/images/gardening/2.webp'
import gardeningImage3 from '@/images/gardening/3.webp'

export async function getOrder(number: string) {
  const products = await getProducts();
  const favoriteProducts = products.filter(p => p.id);

  const order = {
    number: number,
    status: 'Delivered',
    createdAt: '2025-01-06',
  }

  return order
}

export async function getCountries() {
  return [
    {
      name: 'Canada',
      code: 'CA',
      flagUrl: '/flags/ca.svg',
      regions: [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',
      ],
    },
    {
      name: 'Mexico',
      code: 'MX',
      flagUrl: '/flags/mx.svg',
      regions: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de Mexico',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Mexico State',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
      ],
    },
    {
      name: 'United States',
      code: 'US',
      flagUrl: '/flags/us.svg',
      regions: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Washington DC',
        'Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'U.S. Virgin Islands',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
        'Armed Forces Americas',
        'Armed Forces Europe',
        'Armed Forces Pacific',
      ],
    },
  ]
}

export async function getShopData() {
  return {
    description: 'An example shop with GraphQL.',
    name: 'graphql',
    termsOfService: {
      url: 'https://checkout.shopify.com/13120893/policies/30401347.html?locale=en',
      title: 'Terms of Service',
      id: 'gid://shopify/ShopPolicy/30401347',
      handle: 'terms-of-service',
      body: 'lorem ispsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nunc, vitae facilisis nunc nisi euismod nisi.',
    },
    subscriptionPolicy: {
      body: '<p>Subscription Policy</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401219.html?locale=en',
    },
    shippingPolicy: {
      body: '<p>Shipping Policy</p>',
      handle: 'shipping-policy',
      id: 'gid://shopify/ShopPolicy/23745298488',
      title: 'Shipping Policy',
      url: 'https://checkout.shopify.com/13120893/policies/23745298488.html?locale=en',
    },
    refundPolicy: {
      body: '<p>refundPolicy</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401219.html?locale=en',
    },
    privacyPolicy: {
      body: '<p>privacyPolicy</p>',
      handle: 'privacy-policy',
      id: 'gid://shopify/ShopPolicy/30401283',
      title: 'Privacy Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401283.html?locale=en',
    },
    primaryDomain: {
      url: 'https://graphql.myshopify.com',
    },
  }
}

export async function getProductReviews(handle: string) {
  return [
    {
      id: '1',
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. </p>
      `,
      author: 'S. Walkinshaw',
      authorAvatar: avatarImage1,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: '2',
      title: 'Perfect for going out when you want to stay comfy',
      rating: 4,
      content: `
        <p>The product quality is amazing, it looks and feel even better than I had anticipated.</p>
        <p>I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
      `,
      author: 'Risako M',
      authorAvatar: avatarImage2,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: '3',
      title: 'Very nice feeling sweater!',
      rating: 4,
      content: `
        <p> I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times.</p>
        <p>The product quality is amazing!</p>
      `,
      author: 'Eden Birch',
      authorAvatar: avatarImage3,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: '4',
      title: 'Very nice feeling sweater!',
      rating: 5,
      content: `
        <p> I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times.</p>
        <p>The product quality is amazing!</p>
      `,
      author: 'Jonathan Edwards',
      authorAvatar: avatarImage4,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
  ]
}




export async function getCollections() {
  return [
    {
      id: 'gid://1',
      title: 'Gardening Tools',
      handle: 'gardening-tools',
      href: '/collections/gardening',
      sortDescription: 'Most popular tools',
      description: 'Durable gardening tools designed for planting, pruning, and maintaining healthy outdoor spaces.',
      color: 'bg-green-50',
      count: 12,
      image: {
        src: collectionImage1.src,
        width: collectionImage1.width,
        height: collectionImage1.height,
        alt: 'Gardening tools collection',
      },
    },
    {
      id: 'gid://2',
      title: 'Kitchen Tools',
      handle: 'kitchen-tools',
      href: '/collections/kitchen',
      sortDescription: 'Top kitchen tools',
      description: 'Essential kitchen tools crafted for cooking, baking, and everyday meal preparation.',
      image: {
        src: collectionImage2.src,
        width: collectionImage2.width,
        height: collectionImage2.height,
        alt: 'Kitchen tools collection',
      },
      color: 'bg-yellow-50',
      count: 15,
    },
    {
      id: 'gid://3',
      title: 'Cookware',
      handle: 'cookware',
      href: '/collections/cookware',
      sortDescription: 'Premium cookware',
      description: 'High-quality cookware built for even heating, durability, and effortless cooking.',
      image: {
        src: collectionImage3.src,
        width: collectionImage3.width,
        height: collectionImage3.height,
        alt: 'Cookware collection',
      },
      color: 'bg-orange-50',
      count: 8,
    },
    {
      id: 'gid://4',
      title: 'Garden Accessories',
      handle: 'garden-accessories',
      href: '/collections/garden-accessories',
      sortDescription: 'Plant care access',
      description: 'Practical garden accessories to support plant care, storage, and outdoor organization.',
      image: {
        src: collectionImage4.src,
        width: collectionImage4.width,
        height: collectionImage4.height,
        alt: 'Garden accessories collection',
      },
      color: 'bg-green-100',
      count: 20,
    },
  ]
}

export async function getGroupCollections() {
  const allCollections = await getCollections()

  return [
    {
      id: '1',
      title: 'Gardening',
      handle: 'gardening',
      description: 'Premium tools and accessories for your garden.',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 8H9L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
      collections: allCollections.filter(c => c.id === 'gid://1' || c.id === 'gid://4'),
    },
    {
      id: '2',
      title: 'Kitchen',
      handle: 'kitchen',
      description: 'Essential tools and cookware for your modern kitchen.',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21V18H3V6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 10H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
      collections: allCollections.filter(c => c.id === 'gid://2' || c.id === 'gid://3'),
    },
  ]
}


export async function getCollectionByHandle(handle: string) {
  // lowercase handle
  handle = handle.toLowerCase()
  // const all products slug: /collections/all
  if (handle === 'all') {
    return {
      id: 'gid://all',
      title: 'All products',
      handle: 'all',
      description: 'Explore our entire collection of products, from clothing to accessories.',
      sortDescription: 'All products',
      color: 'bg-indigo-50',
      count: 77,
      image: {
        src: collectionImage1.src,
        width: collectionImage1.width,
        height: collectionImage1.height,
        alt: 'Explore new arrivals',
      },
    }
  }

  const allCollections = await getCollections()
  let collection = allCollections?.find((collection) => collection?.handle === handle)

  if (!collection) {
    //  throw new Error(`Collection with handle "${handle}" not found`)

    // for demo purposes, return a default collection
    collection = allCollections[0] // fallback to the first collection
  }

  return collection
}

export async function getProducts() {
  return [
    {
      id: 'gid://2001',
      title: 'Professional Chef Knife',
      handle: 'professional-chef-knife',
      price: 89.99,
      featuredImage: {
        src: kitchenImage1.src,
        width: kitchenImage1.width,
        height: kitchenImage1.height,
        alt: 'Professional Chef Knife',
      },
      categories: ['kitchen'],
      images: [{ src: kitchenImage1.src, width: kitchenImage1.width, height: kitchenImage1.height, alt: 'Knife' }],
      reviewNumber: 234,
      rating: 4.8,
      status: 'New in',
      options: [
        { name: 'Size', optionValues: [{ name: '8 inch' }, { name: '10 inch' }] },
        {
          name: 'Color',
          optionValues: [
            { name: 'Silver', swatch: { color: '#C0C0C0' } },
            { name: 'Black', swatch: { color: '#000000' } }
          ]
        }
      ],
      selectedOptions: [{ name: 'Size', value: '8 inch' }],
    },
    {
      id: 'gid://2002',
      title: 'Cast Iron Skillet',
      handle: 'cast-iron-skillet',
      price: 64.99,
      featuredImage: {
        src: kitchenImage2.src,
        width: kitchenImage2.width,
        height: kitchenImage2.height,
        alt: 'Cast Iron Skillet',
      },
      categories: ['kitchen'],
      images: [{ src: kitchenImage2.src, width: kitchenImage2.width, height: kitchenImage2.height, alt: 'Skillet' }],
      reviewNumber: 189,
      rating: 4.7,
      status: '',
      options: [{ name: 'Size', optionValues: [{ name: '12 inch' }] }, { name: 'Color', optionValues: [{ name: 'Black' }] }],
      selectedOptions: [{ name: 'Size', value: '12 inch' }],
    },
    {
      id: 'gid://2003',
      title: 'Stand Mixer',
      handle: 'stand-mixer',
      price: 299.99,
      featuredImage: {
        src: kitchenImage3.src,
        width: kitchenImage3.width,
        height: kitchenImage3.height,
        alt: 'Stand Mixer',
      },
      categories: ['kitchen'],
      images: [{ src: kitchenImage3.src, width: kitchenImage3.width, height: kitchenImage3.height, alt: 'Mixer' }],
      reviewNumber: 456,
      rating: 4.9,
      status: 'New in',
      options: [{ name: 'Color', optionValues: [{ name: 'Red' }, { name: 'Silver' }] }],
      selectedOptions: [{ name: 'Color', value: 'Red' }],
    },
    {
      id: 'gid://3001',
      title: 'Hand Trowel',
      handle: 'hand-trowel',
      price: 19.99,
      featuredImage: {
        src: gardeningImage1.src,
        width: gardeningImage1.width,
        height: gardeningImage1.height,
        alt: 'Hand Trowel',
      },
      categories: ['gardening'],
      images: [{ src: gardeningImage1.src, width: gardeningImage1.width, height: gardeningImage1.height, alt: 'Trowel' }],
      reviewNumber: 156,
      rating: 4.6,
      status: 'New in',
      options: [{ name: 'Size', optionValues: [{ name: 'Standard' }] }, { name: 'Color', optionValues: [{ name: 'Green' }] }],
      selectedOptions: [{ name: 'Size', value: 'Standard' }],
    },
    {
      id: 'gid://3002',
      title: 'Pruning Shears',
      handle: 'pruning-shears',
      price: 24.99,
      featuredImage: {
        src: gardeningImage2.src,
        width: gardeningImage2.width,
        height: gardeningImage2.height,
        alt: 'Pruning Shears',
      },
      categories: ['gardening'],
      images: [{ src: gardeningImage2.src, width: gardeningImage2.width, height: gardeningImage2.height, alt: 'Shears' }],
      reviewNumber: 210,
      rating: 4.8,
      status: '',
      options: [{ name: 'Size', optionValues: [{ name: 'Large' }] }, { name: 'Color', optionValues: [{ name: 'Red' }] }],
      selectedOptions: [{ name: 'Size', value: 'Large' }],
    },
    {
      id: 'gid://3003',
      title: 'Garden Hoe',
      handle: 'garden-hoe',
      price: 49.99,
      featuredImage: {
        src: gardeningImage3.src,
        width: gardeningImage3.width,
        height: gardeningImage3.height,
        alt: 'Garden Hoe',
      },
      categories: ['gardening'],
      images: [{ src: gardeningImage3.src, width: gardeningImage3.width, height: gardeningImage3.height, alt: 'Hoe' }],
      reviewNumber: 120,
      rating: 4.5,
      status: '',
      options: [{ name: 'Size', optionValues: [{ name: 'Standard' }] }],
      selectedOptions: [{ name: 'Size', value: 'Standard' }],
    },
    {
      id: 'gid://2004',
      title: 'Stainless Steel Whisk',
      handle: 'stainless-steel-whisk',
      price: 14.99,
      featuredImage: {
        src: kitchenImage1.src,
        width: kitchenImage1.width,
        height: kitchenImage1.height,
        alt: 'Stainless Steel Whisk',
      },
      categories: ['kitchen'],
      images: [{ src: kitchenImage1.src, width: kitchenImage1.width, height: kitchenImage1.height, alt: 'Whisk' }],
      reviewNumber: 89,
      rating: 4.6,
      status: 'Trending',
      options: [{ name: 'Color', optionValues: [{ name: 'Silver' }] }],
      selectedOptions: [{ name: 'Color', value: 'Silver' }],
    },
    {
      id: 'gid://3004',
      title: 'Garden Rake',
      handle: 'garden-rake',
      price: 34.99,
      featuredImage: {
        src: gardeningImage1.src,
        width: gardeningImage1.width,
        height: gardeningImage1.height,
        alt: 'Garden Rake',
      },
      categories: ['gardening', 'garden-accessories'],
      images: [
        { src: gardeningImage1.src, width: gardeningImage1.width, height: gardeningImage1.height, alt: 'Rake' },
        { src: gardeningImage2.src, width: gardeningImage2.width, height: gardeningImage2.height, alt: 'Rake detail' },
        { src: gardeningImage3.src, width: gardeningImage3.width, height: gardeningImage3.height, alt: 'Rake use' },
        { src: gardeningImage1.src, width: gardeningImage1.width, height: gardeningImage1.height, alt: 'Rake' },
      ],
      reviewNumber: 74,
      rating: 4.4,
      status: '',
      options: [{ name: 'Size', optionValues: [{ name: 'Modern' }] }],
      selectedOptions: [{ name: 'Size', value: 'Modern' }],
    },
    {
      id: 'gid://2005',
      title: 'Ceramic Bowl Set',
      handle: 'ceramic-bowl-set',
      price: 49.99,
      featuredImage: {
        src: kitchenImage2.src,
        width: kitchenImage2.width,
        height: kitchenImage2.height,
        alt: 'Ceramic Bowl Set',
      },
      categories: ['kitchen', 'cookware'],
      images: [
        { src: kitchenImage2.src, width: kitchenImage2.width, height: kitchenImage2.height, alt: 'Bowl Set' },
        { src: kitchenImage3.src, width: kitchenImage3.width, height: kitchenImage3.height, alt: 'Bowl Detail' },
        { src: kitchenImage1.src, width: kitchenImage1.width, height: kitchenImage1.height, alt: 'Bowl Use' },
        { src: kitchenImage2.src, width: kitchenImage2.width, height: kitchenImage2.height, alt: 'Bowl Set' },
      ],
      reviewNumber: 128,
      rating: 4.9,
      status: 'Popular',
      options: [{ name: 'Color', optionValues: [{ name: 'White' }, { name: 'Grey' }] }],
      selectedOptions: [{ name: 'Color', value: 'White' }],
    },
    {
      id: 'gid://3005',
      title: 'Garden Pruner',
      handle: 'garden-pruner',
      price: 29.99,
      featuredImage: {
        src: gardeningImage2.src,
        width: gardeningImage2.width,
        height: gardeningImage2.height,
        alt: 'Garden Pruner',
      },
      categories: ['gardening', 'garden-accessories'],
      images: [
        { src: gardeningImage2.src, width: gardeningImage2.width, height: gardeningImage2.height, alt: 'Pruner' },
        { src: gardeningImage1.src, width: gardeningImage1.width, height: gardeningImage1.height, alt: 'Pruner Detail' },
        { src: gardeningImage3.src, width: gardeningImage3.width, height: gardeningImage3.height, alt: 'Pruner Use' },
        { src: gardeningImage2.src, width: gardeningImage2.width, height: gardeningImage2.height, alt: 'Pruner' },
      ],
      reviewNumber: 92,
      rating: 4.7,
      status: 'Limited',
      options: [{ name: 'Color', optionValues: [{ name: 'Black' }, { name: 'Red' }] }],
      selectedOptions: [{ name: 'Color', value: 'Black' }],
    },
    {
      id: 'gid://2006',
      title: 'Vegetable Steamer',
      handle: 'vegetable-steamer',
      price: 39.99,
      featuredImage: {
        src: kitchenImage3.src,
        width: kitchenImage3.width,
        height: kitchenImage3.height,
        alt: 'Vegetable Steamer',
      },
      categories: ['kitchen', 'cookware'],
      images: [
        { src: kitchenImage3.src, width: kitchenImage3.width, height: kitchenImage3.height, alt: 'Steamer' },
        { src: kitchenImage1.src, width: kitchenImage1.width, height: kitchenImage1.height, alt: 'Steamer Detail' },
        { src: kitchenImage2.src, width: kitchenImage2.width, height: kitchenImage2.height, alt: 'Steamer Use' },
        { src: kitchenImage3.src, width: kitchenImage3.width, height: kitchenImage3.height, alt: 'Steamer' },
      ],
      reviewNumber: 56,
      rating: 4.5,
      status: 'New',
      options: [{ name: 'Material', optionValues: [{ name: 'Stainless Steel' }] }],
      selectedOptions: [{ name: 'Material', value: 'Stainless Steel' }],
    },
  ]
}

export async function getProductByHandle(handle: string) {
  // lowercase handle
  handle = handle.toLowerCase()

  const products = await getProducts()
  let product = products.find((product) => product.handle === handle)

  if (!product) {
    // throw new Error(`Product with handle "${handle}" not found.`)

    // for demo purposes, we are using a static product detail
    product = products[0] // fallback to the first product
  }

  return product
}

// get product by handle
export async function getProductDetailByHandle(handle: string) {
  // lowercase handle
  handle = handle.toLowerCase()

  // for demo purposes, we are using a static product detail
  const product = await getProductByHandle(handle)

  // if ( !product?.id ) {
  //   throw new Error(`Product with handle "${handle}" not found.`)
  // }

  return {
    ...product,
    status: 'In Stock',
    breadcrumbs: [
      { id: 1, name: 'Home', href: '/' },
      { id: 2, name: 'Jackets', href: '/collections/jackets' },
    ],
    description:
      'Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.',
    publishedAt: '2019-03-27T17:43:25Z',
    selectedOptions: [
      {
        name: 'Color',
        value: product?.options?.find((option) => option.name === 'Color')?.optionValues?.[0]?.name || '',
      },
      {
        name: 'Size',
        value: product?.options?.find((option) => option.name === 'Size')?.optionValues?.[0]?.name || '',
      },
    ],
    features: [
      'Material: 43% Sorona Yarn + 57% Stretch Polyester',
      'Casual pants waist with elastic elastic inside',
      'The pants are a bit tight so you always feel comfortable',
      'Excool technology application 4-way stretch',
    ],
    careInstruction:
      'Machine wash cold with like colors. Do not bleach. Tumble dry low. Iron low if needed. Do not dry clean.',
    shippingAndReturn:
      'We offer free shipping on all orders over $50. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.',
  }
}

// COMMON Types ------------------------------------------------------------------------
export type TCollection = Partial<Awaited<ReturnType<typeof getCollections>>[number]> & { href?: string }
export type TProductItem = Partial<
  Awaited<ReturnType<typeof getProducts>>[number] & {
    options: {
      name: string
      optionValues: {
        name: string
        swatch?: {
          color?: string
          image?: string
        }
      }[]
    }[]
  }
>
export type TProductDetail = Partial<Awaited<ReturnType<typeof getProductDetailByHandle>>>
export type TCardProduct = Partial<
  TProductItem & {
    quantity?: number
    name?: string
    image?: TProductItem['featuredImage']
    size?: string
    color?: string
  }
>
// export type TBlogPost = Partial<Awaited<ReturnType<typeof getBlogPosts>>[number]>
export type TReview = Partial<Awaited<ReturnType<typeof getProductReviews>>[number]>
