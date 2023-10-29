// tabler:search
import { FC, PropsWithChildren, useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

import TransformateurLogo from '../TransformateurLogo';

const CATEGORY_ITEMS = [
  'Mathematics',
  'Physics',
  'Earth Science',
  'Computer Science',
];

export type ArchiveAsideProps = {
  collapsed?: boolean;
};

/** The Sidebar for the Archive Page. */
const ArchiveAside: FC<ArchiveAsideProps> = (props) => {
  const { collapsed } = props;
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <aside
      className={cn(
        'transition-[width] overflow-hidden duration-300',
        collapsed ? 'w-0' : 'w-96',
      )}
    >
      <div className="bg-white p-16 flex flex-col w-96">
        <TransformateurLogo color="#2E2FA5" />
        <div className="h-10" />
        <div className="flex items-center gap-x-2 border-b primary-100 py-2">
          <Icon className="text-dark-300" icon="tabler:search" />
          <input
            className={input({ class: 'text-dark-500 font-medium' })}
            placeholder="Search"
          />
        </div>
        <div className="h-10" />

        <h2 className="text-dark-800 font-medium mb-2">Categories</h2>
        <div
          className="flex flex-col gap-y-0"
          onMouseLeave={() => setHovered(null)}
        >
          {CATEGORY_ITEMS.map((categoryItem, i) => (
            <CategoryListItem
              key={i.toString()}
              id={i.toString()}
              currentHoverId={hovered}
              onClick={() => {}}
              onHover={setHovered}
            >
              {categoryItem}
            </CategoryListItem>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ArchiveAside;

// =================
// Subcomponents
// =================
import { AnimatePresence, motion } from 'framer-motion';
import { FieldBase } from 'payload/types';

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
