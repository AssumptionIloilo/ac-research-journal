// tabler:search
import { FC, PropsWithChildren, useMemo, useState } from 'react';
import Link from 'next/link';

import { GetArchiveCategoriesDocument } from '@/gql/graphql';
import { Icon } from '@iconify/react';

import Logo from '../Logo';

export type ArchiveAsideProps = {
  collapsed?: boolean;
};

/** The Sidebar for the Archive Page. */
const ArchiveAside: FC<ArchiveAsideProps> = (props) => {
  const { collapsed } = props;

  const [searchValue, setSearchValue] = useState<string>('');

  const [hovered, setHovered] = useState<string | null>(null);

  const [{ data: categoriesData }] = useQuery({
    query: GetArchiveCategoriesDocument,
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  const categorySearch = searchParams.get('category');
  const titleSearch = searchParams.get('title');

  const searchExists = categorySearch || titleSearch;

  // ===========================================================================
  // Handlers
  // ===========================================================================

  const handleSearchChange = useMemo(() => {
    const _handleSearchChange = (value: string) => {
      const url = new URL(window.location.href);

      if (value === '') {
        url.searchParams.delete('title');
        router.replace(url.toString());
        return;
      }

      url.searchParams.set('title', value);
      router.replace(url.toString());
    };

    return debounce(_handleSearchChange, 500);
  }, [router]);

  const handleCategoryClick = (value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('category', value);
    router.replace(url.toString());
  };

  const handleClearSearch = () => {
    setSearchValue('');
    router.replace(pageRoutes.archive);
  };

  return (
    <aside
      className={cn(
        'transition-[width] overflow-hidden duration-300',
        collapsed ? 'w-0' : 'w-96',
      )}
    >
      <div className="bg-white p-16 flex flex-col w-96 flex-1 h-full">
        <Logo color="#2E2FA5" />
        <div className="h-10" />
        <div className="flex items-center gap-x-2 border-b primary-100 py-2">
          <Icon className="text-dark-300" icon="tabler:search" />
          <input
            className={input({ class: 'text-dark-500 font-medium' })}
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              handleSearchChange(e.target.value);
              setSearchValue(e.target.value);
            }}
          />
        </div>
        <div className="h-10" />
        <h2 className="text-dark-800 font-medium mb-2">Categories</h2>
        <div
          className="flex flex-col gap-y-0"
          onMouseLeave={() => setHovered(null)}
        >
          {categoriesData?.ArchiveCategories?.docs?.map((category, i) => (
            <CategoryListItem
              key={category?.id}
              id={category?.id ?? i.toString()}
              currentHoverId={hovered}
              onClick={() => {
                if (!category?.id) return;

                handleCategoryClick(category.id);
              }}
              onHover={setHovered}
            >
              {category?.name}
            </CategoryListItem>
          ))}
        </div>
        <div className="flex-1" />
        <div>
          {searchExists && (
            <button className="text-sm" onClick={handleClearSearch}>
              🗑️ Clear Filters
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default ArchiveAside;

// ===========================================================================
// Subcomponents
// ===========================================================================
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuery } from 'urql';

import { debounce } from '@/lib/debounce';
import pageRoutes from '@/lib/pageRoutes';
import { cn } from '@/lib/utils';
import { input } from '@/styles/variants';

type CategoryListItemType = PropsWithChildren & {
  id?: string;
  currentHoverId?: string | null;
  onClick: () => void;
  onHover?: (id: string) => void;
};

const CategoryListItem: FC<CategoryListItemType> = (props) => {
  const { id, currentHoverId, onClick, onHover, children } = props;

  return (
    <button
      className="relative text-sm text-left rounded-md px-2 py-1"
      onClick={onClick}
      onMouseOver={() => id && onHover?.(id)}
    >
      <AnimatePresence>
        {currentHoverId === id && (
          <motion.div
            className="inset-0 rounded-md bg-primary-100 absolute"
            exit={{
              opacity: 0,
              transition: { duration: 0.15, ease: 'easeOut' },
            }}
            transition={{
              layout: {
                duration: 0.2,
                ease: 'easeOut',
              },
            }}
            layoutId="category-item"
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{children}</span>
    </button>
  );
};
