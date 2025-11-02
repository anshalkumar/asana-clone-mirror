import { useState } from "react";
import { ChevronDown, ChevronRight, Circle, Plus, GripVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: string;
  name: string;
  assignee?: {
    name: string;
    avatar: string;
  };
  dueDate?: string;
  priority?: "Low" | "Medium" | "High";
  status?: "On track" | "At risk" | "Off track";
}

interface TaskSection {
  id: string;
  name: string;
  tasks: Task[];
  expanded: boolean;
}

export function TaskList() {
  const [sections, setSections] = useState<TaskSection[]>([
    {
      id: "to-do",
      name: "To do",
      expanded: true,
      tasks: [
        {
          id: "1",
          name: "czd",
          assignee: { name: "white walker", avatar: "ww" },
          dueDate: "Today – 4 Nov",
          priority: "Low",
          status: "On track",
        },
        {
          id: "2",
          name: "zd",
          assignee: { name: "white walker", avatar: "ww" },
          dueDate: "3 – 5 Nov",
          priority: "Medium",
          status: "At risk",
        },
        {
          id: "3",
          name: "zdv",
          dueDate: "4 – 6 Nov",
          priority: "High",
          status: "Off track",
        },
      ],
    },
    {
      id: "doing",
      name: "Doing",
      expanded: true,
      tasks: [],
    },
    {
      id: "done",
      name: "done",
      expanded: true,
      tasks: [],
    },
  ]);

  const toggleSection = (sectionId: string) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, expanded: !section.expanded }
          : section
      )
    );
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case "Low":
        return "bg-priority-low text-background";
      case "Medium":
        return "bg-priority-medium text-background";
      case "High":
        return "bg-priority-high text-background";
      default:
        return "";
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "On track":
        return "bg-status-on-track text-background";
      case "At risk":
        return "bg-status-at-risk text-background";
      case "Off track":
        return "bg-status-off-track text-background";
      default:
        return "";
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <table className="w-full">
        <thead className="sticky top-0 bg-background border-b border-border z-10">
          <tr className="text-xs text-muted-foreground">
            <th className="text-left font-medium px-6 py-3">Name</th>
            <th className="text-left font-medium px-6 py-3">Assignee</th>
            <th className="text-left font-medium px-6 py-3">Due date</th>
            <th className="text-left font-medium px-6 py-3">Priority</th>
            <th className="text-left font-medium px-6 py-3">Status</th>
            <th className="w-8"></th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section) => (
            <tr key={section.id} className="group">
              <td colSpan={6} className="px-0 py-0">
                <div className="border-b border-border">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center gap-2 px-4 py-3 hover:bg-hover-row transition-colors text-left"
                  >
                    {section.expanded ? (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    )}
                    <span className="text-sm font-semibold">{section.name}</span>
                  </button>
                </div>

                {section.expanded && (
                  <>
                    {section.tasks.map((task, index) => (
                      <div
                        key={task.id}
                        className={`grid grid-cols-[1fr_200px_180px_120px_140px_32px] items-center hover:bg-hover-row transition-colors ${
                          index === 0 && section.id === "to-do" ? "bg-[#1e3a5f]" : ""
                        }`}
                      >
                        <div className="px-6 py-3 flex items-center gap-3">
                          <Circle className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{task.name}</span>
                        </div>
                        <div className="px-6 py-3">
                          {task.assignee && (
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-[#F4A93F] flex items-center justify-center text-xs font-medium text-background">
                                {task.assignee.avatar}
                              </div>
                              <span className="text-sm">{task.assignee.name}</span>
                            </div>
                          )}
                        </div>
                        <div className="px-6 py-3">
                          <span className="text-sm text-muted-foreground">{task.dueDate}</span>
                        </div>
                        <div className="px-6 py-3">
                          {task.priority && (
                            <Badge className={`${getPriorityColor(task.priority)} text-xs font-medium px-2 py-1`}>
                              {task.priority}
                            </Badge>
                          )}
                        </div>
                        <div className="px-6 py-3">
                          {task.status && (
                            <Badge className={`${getStatusColor(task.status)} text-xs font-medium px-2 py-1`}>
                              {task.status}
                            </Badge>
                          )}
                        </div>
                        <div className="px-2 py-3">
                          <button className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-foreground">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button className="w-full px-6 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-hover-row transition-colors flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Add task...
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={6} className="px-4 py-3">
              <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add section
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
