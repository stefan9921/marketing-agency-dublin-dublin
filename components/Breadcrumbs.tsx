import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-100 py-3 px-6">
      <ol className="max-w-7xl mx-auto flex flex-wrap items-center gap-1 text-sm text-slate-500">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-primary transition-colors">{item.name}</Link>
            ) : (
              <span className="text-slate-900 font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
