import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, AreaChart, Area } from "recharts";
import { BarChart3, Calendar, Filter, Download, Map, Target } from "lucide-react";

// Mock data for different area codes
const areaData = [
  { area: "Zone A", organic: 450, inorganic: 320, recycled: 380 },
  { area: "Zone B", organic: 380, inorganic: 280, recycled: 290 },
  { area: "Zone C", organic: 520, inorganic: 400, recycled: 440 },
  { area: "Zone D", organic: 300, inorganic: 250, recycled: 220 },
  { area: "Zone E", organic: 420, inorganic: 350, recycled: 380 }
];

const dailyTrend = [
  { day: "Mon", total: 340, recycled: 180 },
  { day: "Tue", total: 380, recycled: 210 },
  { day: "Wed", total: 420, recycled: 250 },
  { day: "Thu", total: 360, recycled: 190 },
  { day: "Fri", total: 480, recycled: 290 },
  { day: "Sat", total: 520, recycled: 320 },
  { day: "Sun", total: 290, recycled: 160 }
];

const efficiencyData = [
  { month: "Jan", efficiency: 65, target: 70 },
  { month: "Feb", efficiency: 68, target: 70 },
  { month: "Mar", efficiency: 72, target: 75 },
  { month: "Apr", efficiency: 70, target: 75 },
  { month: "May", efficiency: 78, target: 80 },
  { month: "Jun", efficiency: 82, target: 80 }
];

export default function DataAnalysis() {
  const [selectedAreaCode, setSelectedAreaCode] = useState("");
  const [selectedWasteType, setSelectedWasteType] = useState("");
  const [dateRange, setDateRange] = useState({ from: null, to: null });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Data Analysis</h1>
          <p className="text-muted-foreground">
            Comprehensive waste management analytics with interactive filters and insights
          </p>
        </div>

        {/* Filters Section */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-primary" />
              <span>Analysis Filters</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Date Range */}
              <div className="space-y-2">
                <Label>Date Range</Label>
                <div className="flex space-x-2">
                  <Input
                    type="date"
                    placeholder="From"
                    className="flex-1"
                  />
                  <Input
                    type="date"
                    placeholder="To"
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Area Code */}
              <div className="space-y-2">
                <Label>Area Code</Label>
                <Select value={selectedAreaCode} onValueChange={setSelectedAreaCode}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Areas</SelectItem>
                    <SelectItem value="zone-a">Zone A</SelectItem>
                    <SelectItem value="zone-b">Zone B</SelectItem>
                    <SelectItem value="zone-c">Zone C</SelectItem>
                    <SelectItem value="zone-d">Zone D</SelectItem>
                    <SelectItem value="zone-e">Zone E</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Waste Type */}
              <div className="space-y-2">
                <Label>Waste Type</Label>
                <Select value={selectedWasteType} onValueChange={setSelectedWasteType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="organic">Organic</SelectItem>
                    <SelectItem value="inorganic">Inorganic</SelectItem>
                    <SelectItem value="recyclable">Recyclable</SelectItem>
                    <SelectItem value="hazardous">Hazardous</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Label>&nbsp;</Label>
                <div className="flex space-x-2">
                  <Button className="flex-1">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Apply
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Area-wise Waste Distribution */}
          <Card className="hover:shadow-hover transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Map className="w-5 h-5 text-primary" />
                <span>Waste by Area Code</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={areaData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="area" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Bar dataKey="organic" fill="#22c55e" name="Organic" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="inorganic" fill="#3b82f6" name="Inorganic" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="recycled" fill="#f59e0b" name="Recycled" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Daily Collection Trends */}
          <Card className="hover:shadow-hover transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Daily Collection Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={dailyTrend} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Area 
                    type="monotone" 
                    dataKey="total" 
                    stackId="1" 
                    stroke="#3b82f6" 
                    fill="#3b82f6" 
                    fillOpacity={0.3}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="recycled" 
                    stackId="2" 
                    stroke="#22c55e" 
                    fill="#22c55e" 
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Efficiency Analysis */}
        <Card className="mb-8 hover:shadow-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary" />
              <span>Efficiency vs Target Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={efficiencyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" domain={['dataMin - 5', 'dataMax + 5']} />
                <Line 
                  type="monotone" 
                  dataKey="efficiency" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  dot={{ fill: "#22c55e", strokeWidth: 2, r: 6 }}
                  name="Actual Efficiency"
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                  name="Target"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-hover transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Top Performer</h3>
                  <p className="text-sm text-muted-foreground">Zone C leads with 82% efficiency</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-hover transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Peak Collection</h3>
                  <p className="text-sm text-muted-foreground">Saturdays show highest volume</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-hover transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Map className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Growth Area</h3>
                  <p className="text-sm text-muted-foreground">Zone D shows 15% improvement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}