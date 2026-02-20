import { FiltersMenuTabs } from '@/components/FiltersMenu';
import { FilterSortByMenuListBox } from '@/components/FilterSortByMenu';
import { Divider } from '@/components/Divider';
import { getProducts } from '@/data/data';
import HeroSection from './HeroSection';
import ProductCard from '@/components/ProductCard';

export default async function CookwarePage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const sParams = await searchParams;
    const price_min = sParams.price_min as string | undefined;
    const price_max = sParams.price_max as string | undefined;
    const sort = (sParams.sort as string) || 'newest';

    const allProducts = await getProducts();
    // Strictly filter by cookware category
    let filteredProducts = allProducts.filter(p => p.categories?.includes('cookware'));

    // Filter by price if search params are present
    if (price_min || price_max) {
        const min = price_min ? Number(price_min) : 0;
        const max = price_max ? Number(price_max) : Infinity;
        filteredProducts = filteredProducts.filter((p) => (p.price || 0) >= min && (p.price || 0) <= max);
    }

    // Apply Sorting
    filteredProducts.sort((a, b) => {
        switch (sort) {
            case 'price-low-to-high':
                return (a.price || 0) - (b.price || 0);
            case 'price-high-low':
                return (b.price || 0) - (a.price || 0);
            case 'a-to-z':
                return (a.title || '').localeCompare(b.title || '');
            case 'z-to-a':
                return (b.title || '').localeCompare(a.title || '');
            case 'best-rating':
                return (b.rating || 0) - (a.rating || 0);
            case 'newest':
            default:
                return (b.id || '').localeCompare(a.id || '');
        }
    });

    return (
        <>
            <HeroSection />

            <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* TABS FILTER */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-8 text-start">
                        <FiltersMenuTabs />
                        <FilterSortByMenuListBox className="ml-auto" />
                    </div>

                    <Divider className="mb-10" />

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} data={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-neutral-50 rounded-3xl border-2 border-dashed border-neutral-200">
                            <p className="text-neutral-500">No cookware found.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
