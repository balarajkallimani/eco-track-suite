import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, unit, icon: Icon, trend, className }: StatCardProps) {
  return (
    <Card className={`hover:shadow-hover transition-all duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-3xl font-bold">{value}</p>
              {unit && <span className="text-lg text-muted-foreground">{unit}</span>}
            </div>
            {trend && (
              <div className={`flex items-center space-x-1 text-xs ${
                trend.isPositive ? "text-success" : "text-destructive"
              }`}>
                <span>{trend.isPositive ? "↗" : "↘"}</span>
                <span>{Math.abs(trend.value)}% from last month</span>
              </div>
            )}
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}