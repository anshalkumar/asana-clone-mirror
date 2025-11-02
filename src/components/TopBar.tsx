import { Menu, Search, HelpCircle, Settings, Share2, Star, ListIcon, LayoutGrid, Calendar, GitBranch, BarChart3, Workflow, MessageSquare, FileText, Plus, SlidersHorizontal, ArrowUpDown, Filter } from "lucide-react";

const tabs = [
  { icon: ListIcon, label: "Overview", active: false },
  { icon: ListIcon, label: "List", active: true },
  { icon: LayoutGrid, label: "Board", active: false },
  { icon: Calendar, label: "Timeline", active: false },
  { icon: BarChart3, label: "Dashboard", active: false },
  { icon: Calendar, label: "Calendar", active: false },
  { icon: Workflow, label: "Workflow", active: false },
  { icon: MessageSquare, label: "Messages", active: false },
  { icon: FileText, label: "Files", active: false },
];

export function TopBar() {
  return (
    <div className="flex flex-col border-b border-border">
      {/* Top header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <div className="flex items-center gap-4">
          <button className="text-foreground hover:text-foreground/80">
            <Menu className="w-5 h-5" />
          </button>
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-muted/50 border border-border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-foreground hover:text-foreground/80 p-2">
            <HelpCircle className="w-5 h-5" />
          </button>
          <button className="text-foreground hover:text-foreground/80 p-2">
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#F4A93F] flex items-center justify-center text-xs font-medium text-background">
            ww
          </div>
        </div>
      </div>

      {/* Project header */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <ListIcon className="w-5 h-5 text-foreground" />
            <h1 className="text-xl font-semibold">X ZX</h1>
            <button className="text-muted-foreground hover:text-foreground">
              <Star className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-muted rounded-full p-1">
            <div className="w-6 h-6 rounded-full bg-[#F4A93F] flex items-center justify-center text-xs font-medium text-background">
              ww
            </div>
            <button className="w-6 h-6 rounded-full bg-muted hover:bg-accent flex items-center justify-center">
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button className="flex items-center gap-2 bg-muted hover:bg-accent text-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors">
            <Settings className="w-4 h-4" />
            Customize
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-6">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
              tab.active
                ? "text-foreground border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
        <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 border-t border-border">
        <button className="flex items-center gap-2 bg-muted hover:bg-accent text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          Add task
        </button>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowUpDown className="w-4 h-4" />
            Sort
          </button>
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <SlidersHorizontal className="w-4 h-4" />
            Group
          </button>
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Settings className="w-4 h-4" />
            Options
          </button>
          <button className="text-muted-foreground hover:text-foreground p-1">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
