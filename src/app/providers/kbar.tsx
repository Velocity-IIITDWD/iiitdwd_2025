'use client';

import data from '@/data/navigation';
import { type NavigationItem } from '@/types/navigation';
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches
} from 'kbar';

const generateActions = () => {
  interface Action {
    id: string;
    name: string;
    subtitle?: string;
    section: string;
    perform: () => void;
  }

  const actions: Action[] = [];

  const processMenuItem = (item: NavigationItem, parentSection?: string) => {
    actions.push({
      id: item.href,
      name: item.title,
      section: parentSection || 'Main Menu',
      perform: () => (window.location.pathname = item.href)
    });

    if (item.items) {
      item.items.forEach((subItem) => {
        processMenuItem(subItem, item.title);
      });
    }
  };

  data.forEach((item) => processMenuItem(item));

  return actions;
};

export default function CustomKBarProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <KBarProvider actions={generateActions()}>
      <KBarPortal>
        <KBarPositioner className="z-50 bg-black/15">
          <KBarAnimator className="max-w-[600px] w-full rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
            <KBarSearch
              className="w-full py-3 px-4 text-base outline-none border-none bg-white"
              style={{ padding: '12px 16px' }}
              defaultPlaceholder="Search for anything..."
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div
            style={{ padding: '8px 16px' }}
            className="text-xs uppercase opacity-50"
          >
            {item}
          </div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
}

function ResultItem({ action, active }: { action: any; active: boolean }) {
  return (
    <div
      style={{ padding: '12px 16px' }}
      className={`flex items-center justify-between cursor-pointer ${
        active
          ? 'bg-gray-100 border-l-2 border-l-gray-800'
          : 'border-l-2 border-l-transparent'
      }`}
    >
      <div className="flex items-center text-sm" style={{ gap: '8px' }}>
        <div className="flex flex-col">
          <div>{action.name}</div>
          {action.subtitle && (
            <span className="text-xs text-gray-500">{action.subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
}
