import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { Recycle, Trash2, Target, TrendingUp, BarChart3, PieChart, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart as RechartsPieChart, Cell, LineChart, Line, Pie } from "recharts";

// Mock data for charts
const monthlyWasteData = [
  { month: "Jan", organic: 120, inorganic: 80, recycled: 60 },
  { month: "Feb", organic: 135, inorganic: 85, recycled: 70 },
  { month: "Mar", organic: 140, inorganic: 90, recycled: 75 },
  { month: "Apr", organic: 125, inorganic: 75, recycled: 65 },
  { month: "May", organic: 150, inorganic: 95, recycled: 85 },
  { month: "Jun", organic: 165, inorganic: 100, recycled: 90 }
];

const wasteTypeData = [
  { name: "Organic", value: 45, color: "#22c55e" },
  { name: "Plastic", value: 25, color: "#3b82f6" },
  { name: "Paper", value: 20, color: "#f59e0b" },
  { name: "Metal", value: 10, color: "#ef4444" }
];

const recyclingTrend = [
  { week: "Week 1", rate: 68 },
  { week: "Week 2", rate: 72 },
  { week: "Week 3", rate: 75 },
  { week: "Week 4", rate: 78 }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Waste Management Dashboard</h1>
          <p className="text-muted-foreground">Monitor and track your waste management performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Organic Waste"
            value="1,245"
            unit="kg"
            icon={Recycle}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Inorganic Waste"
            value="856"
            unit="kg"
            icon={Trash2}
            trend={{ value: 8, isPositive: false }}
          />
          <StatCard
            title="Total Waste"
            value="2,101"
            unit="kg"
            icon={Target}
            trend={{ value: 5, isPositive: true }}
          />
          <StatCard
            title="Recycling Rate"
            value="78"
            unit="%"
            icon={TrendingUp}
            trend={{ value: 15, isPositive: true }}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Waste Trends */}
          <Card className="hover:shadow-hover transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span>Monthly Waste Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyWasteData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Bar dataKey="organic" fill="#22c55e" name="Organic" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="inorganic" fill="#3b82f6" name="Inorganic" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="recycled" fill="#f59e0b" name="Recycled" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Waste Type Distribution */}
          <Card className="hover:shadow-hover transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="w-5 h-5 text-primary" />
                <span>Waste Type Distribution</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie data={wasteTypeData} cx="50%" cy="50%" outerRadius={100} dataKey="value">
                    {wasteTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {wasteTypeData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recycling Trend & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recycling Rate Trend */}
          <Card className="lg:col-span-2 hover:shadow-hover transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Recycling Rate Trend</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={recyclingTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="week" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#22c55e" 
                    strokeWidth={3}
                    dot={{ fill: "#22c55e", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="hover:shadow-hover transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <button className="w-full p-3 text-left border border-border rounded-lg hover:bg-accent transition-colors">
                <div className="font-medium">Schedule Collection</div>
                <div className="text-sm text-muted-foreground">Next pickup: Tomorrow</div>
              </button>
              
              <button className="w-full p-3 text-left border border-border rounded-lg hover:bg-accent transition-colors">
                <div className="font-medium">Generate Report</div>
                <div className="text-sm text-muted-foreground">Monthly summary</div>
              </button>
              
              <button className="w-full p-3 text-left border border-border rounded-lg hover:bg-accent transition-colors">
                <div className="font-medium">View Analytics</div>
                <div className="text-sm text-muted-foreground">Detailed insights</div>
              </button>
              
              <button className="w-full p-3 text-left border border-border rounded-lg hover:bg-accent transition-colors">
                <div className="font-medium">Update Goals</div>
                <div className="text-sm text-muted-foreground">Set new targets</div>
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}