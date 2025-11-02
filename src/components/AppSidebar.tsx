import { Home, Inbox, BarChart3, FolderKanban, Target, Users, CheckSquare, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: CheckSquare, label: "My tasks", path: "/my-tasks" },
  { icon: Inbox, label: "Inbox", path: "/inbox" },
];

const insightItems = [
  { icon: BarChart3, label: "Reporting", path: "/reporting" },
  { icon: FolderKanban, label: "Portfolios", path: "/portfolios" },
  { icon: Target, label: "Goals", path: "/goals" },
];

const projectItems = [
  { label: "x zx", path: "/", active: true },
];

export function AppSidebar() {
  return (
    <aside className="w-60 bg-sidebar border-r border-sidebar-border flex flex-col h-screen">
      {/* Create button */}
      <div className="p-4">
        <button className="w-full flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          Create
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2">
        <div className="space-y-1 mb-6">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Insights */}
        <div className="mb-6">
          <div className="flex items-center justify-between px-3 mb-2">
            <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">
              Insights
            </h3>
            <button className="text-sidebar-foreground/70 hover:text-sidebar-foreground">
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-1">
            {insightItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <div className="flex items-center justify-between px-3 mb-2">
            <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">
              Projects
            </h3>
            <button className="text-sidebar-foreground/70 hover:text-sidebar-foreground">
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-1">
            {projectItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  item.active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                <div className="w-4 h-4 rounded bg-muted" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="flex items-center justify-between px-3 mb-2">
            <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">
              Team
            </h3>
          </div>
          <div className="space-y-1">
            <NavLink
              to="/my-workspace"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
            >
              <Users className="w-4 h-4" />
              My workspace
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Bottom section */}
      <div className="p-4 space-y-3 border-t border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <div className="flex-1 text-xs">
            <div className="text-sidebar-foreground">Advanced free trial</div>
            <div className="text-sidebar-foreground/60">14 days left</div>
          </div>
        </div>
        <button className="w-full bg-[#FCA740] hover:bg-[#FCA740]/90 text-background px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Add billing info
        </button>
        <div className="text-xs text-sidebar-foreground/60 flex items-center gap-2">
          <span>75K / 75K AI credits left</span>
          <span>→</span>
        </div>
        <button className="text-xs text-sidebar-foreground/80 hover:text-sidebar-foreground">
          Invite teammates
        </button>
      </div>
    </aside>
  );
}
