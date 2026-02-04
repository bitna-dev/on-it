'use client';
import { Button } from '@components/ui/button';
import { Separator } from '@components/ui/separator';
import { cn } from '@lib/utils';
import { Briefcase, Coffee, LayoutDashboard, Plus, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    name: 'Dashboard',
    link: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'Applications',
    link: '/applications',
    icon: Briefcase,
  },
  {
    name: 'Contacts',
    link: '/contacts',
    icon: Users,
  },
  {
    name: 'Coffee Chats',
    link: '/coffee-chats',
    icon: Coffee,
  },
];
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Briefcase className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">On It</span>
        </div>

        {/* Add Job Button */}
        <div className="p-4">
          <Button className="w-full" size="default">
            <Plus className="mr-2 h-4 w-4" />
            Add Job
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={item.name}
                href={item.link}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <Separator />

        {/* Settings & User */}
        <div className="space-y-1 p-3">
          {/* <Link
            href="/settings"
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              pathname === '/settings'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link> */}
        </div>

        {/* User Profile */}
        {/* <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="" alt="User" />
              <AvatarFallback>BK</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium">Bitna Kim</p>
              <p className="truncate text-xs text-muted-foreground">bitna@example.com</p>
            </div>
          </div>
        </div> */}
      </div>
    </aside>
  );
};
export default Sidebar;
