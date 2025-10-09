"use client";

import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingUp, Users, UserPlus, Calendar } from "lucide-react";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Registration, RegistrationStatus } from "@/lib/generated/prisma";

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
function fmtShort(d: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
  }).format(d);
}
function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
function rangeDays(n: number) {
  const arr: Date[] = [];
  const today = startOfDay(new Date());
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    arr.push(d);
  }
  return arr;
}
function timeAgo(date: Date) {
  const rtf = new Intl.RelativeTimeFormat("id-ID", { numeric: "auto" });
  const diffMs = date.getTime() - Date.now();
  const minutes = Math.round(diffMs / (60 * 1000));
  const hours = Math.round(diffMs / (60 * 60 * 1000));
  const days = Math.round(diffMs / (24 * 60 * 60 * 1000));
  if (Math.abs(minutes) < 60) return rtf.format(minutes, "minute");
  if (Math.abs(hours) < 24) return rtf.format(hours, "hour");
  return rtf.format(days, "day");
}

function aggregateDaily(regs: Registration[], days: number) {
  const buckets = rangeDays(days).map((d) => ({
    key: d,
    label: fmtShort(d),
    siswa: 0,
  }));
  for (const r of regs) {
    const cd = new Date(r.createdAt);
    const cdStart = startOfDay(cd).getTime();
    const found = buckets.find((b) => b.key.getTime() === cdStart);
    if (found) found.siswa++;
  }
  return buckets.map((b) => ({ date: b.label, siswa: b.siswa }));
}

function aggregateWeekly(regs: Registration[], weeks = 4) {
  // Ambil 4 pekan terakhir (setiap pekan = 7 hari)
  const today = startOfDay(new Date());
  const buckets = Array.from({ length: weeks }).map((_, idx) => {
    const start = new Date(today);
    start.setDate(today.getDate() - (weeks - idx - 1) * 7 - 6);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return { label: `Minggu ${idx + 1}`, start, end, siswa: 0, target: 0 };
  });
  for (const r of regs) {
    const cd = startOfDay(new Date(r.createdAt)).getTime();
    const bucket = buckets.find(
      (b) => cd >= b.start.getTime() && cd <= b.end.getTime(),
    );
    if (bucket) bucket.siswa++;
  }
  // Target mingguan berdasarkan rata-rata pendaftar pada minggu tersebut
  buckets.forEach((b) => {
    b.target = Math.round((b.siswa / 7) * 7); // target mingguan berdasarkan data minggu tsb
  });
  return buckets.map((b) => ({
    minggu: b.label,
    siswa: b.siswa,
    target: b.target,
  }));
}

function aggregateStatus(regs: Registration[]) {
  const labels = Object.values(RegistrationStatus);

  return labels.map((s) => ({
    status: s,
    jumlah: regs.filter((r) => r.status === s).length,
  }));
}

export function StatistikContent() {
  const trpc = useTRPC();
  const { data: registrations } = useSuspenseQuery(
    trpc.registration.getAllRegistrations.queryOptions(),
  );

  const [days, setDays] = useState<number>(14);

  const today = startOfDay(new Date());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const dailyData = useMemo(
    () => aggregateDaily(registrations, days),
    [registrations, days],
  );
  const weeklyData = useMemo(
    () => aggregateWeekly(registrations, 4),
    [registrations],
  );
  const statusData = useMemo(
    () => aggregateStatus(registrations),
    [registrations],
  );

  const total = registrations.length;
  const todayCount = registrations.filter((r) =>
    isSameDay(new Date(r.createdAt), today),
  ).length;
  const yesterdayCount = registrations.filter((r) =>
    isSameDay(new Date(r.createdAt), yesterday),
  ).length;
  // Hitung total pendaftar dalam rentang hari yang dipilih
  const totalInRange = dailyData.reduce((sum, d) => sum + d.siswa, 0);
  const avgDaily = Math.round(totalInRange / Math.max(1, days));
  const growthPct =
    yesterdayCount === 0
      ? 100
      : Math.round(
          ((todayCount - yesterdayCount) / Math.max(1, yesterdayCount)) * 100,
        );

  const recent = [...registrations]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance">
              Statistik Pendaftaran Siswa Baru
            </h1>
            <p className="text-muted-foreground">
              Pantau perkembangan pendaftaran berdasarkan data Registration
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Rentang:</span>
            <Select
              value={String(days)}
              onValueChange={(v) => setDays(Number(v))}
            >
              <SelectTrigger size="sm" className="w-[140px]">
                <SelectValue placeholder="Pilih rentang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">7 Hari</SelectItem>
                <SelectItem value="14">14 Hari</SelectItem>
                <SelectItem value="30">30 Hari</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">
                Total Pendaftar
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">
                {total.toLocaleString("id-ID")}
              </div>
              <p className="text-xs text-muted-foreground">
                Total dari seluruh data
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">
                Hari Ini
              </CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">
                {todayCount}
              </div>
              <p className="text-xs text-muted-foreground">
                {yesterdayCount >= 0 ? (
                  <span className="text-chart-1">
                    +{Math.max(0, todayCount - yesterdayCount)}
                  </span>
                ) : null}{" "}
                dari kemarin
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">
                Rata-rata Harian
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">
                {avgDaily}
              </div>
              <p className="text-xs text-muted-foreground">
                siswa per hari (± {days} hari)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="flex flex-col">
          {/* Daily Registrations Chart */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">
                Pendaftaran Harian
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Jumlah siswa yang mendaftar setiap hari (± {days} hari)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  siswa: { label: "Pendaftar", color: "hsl(var(--chart-1))" },
                }}
                className="h-[300px] w-full"
              >
                <AreaChart data={dailyData}>
                  <defs>
                    <linearGradient id="fill-siswa" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="hsl(var(--chart-1))"
                        stopOpacity={0.32}
                      />
                      <stop
                        offset="95%"
                        stopColor="hsl(var(--chart-1))"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                    opacity={0.3}
                  />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Area
                    type="monotone"
                    dataKey="siswa"
                    stroke="var(--color-siswa)"
                    strokeWidth={2}
                    fill="url(#fill-siswa)"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Weekly Registrations Chart */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">
                Pendaftaran Mingguan
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Perbandingan dengan target mingguan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  siswa: { label: "Realisasi", color: "hsl(var(--chart-1))" },
                  target: { label: "Target", color: "hsl(var(--chart-2))" },
                }}
                className="h-[300px] w-full"
              >
                <BarChart data={weeklyData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                    opacity={0.3}
                  />
                  <XAxis dataKey="minggu" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="siswa"
                    fill="var(--color-siswa)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="target"
                    fill="var(--color-target)"
                    radius={[4, 4, 0, 0]}
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="border-border bg-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-card-foreground">
                Distribusi Status Pendaftaran
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Jumlah pendaftar berdasarkan status: TERDAFTAR, DITERIMA,
                DITOLAK
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  jumlah: { label: "Jumlah", color: "hsl(var(--chart-1))" },
                }}
                className="h-[300px] w-full"
              >
                <BarChart data={statusData} layout="vertical">
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                    opacity={0.3}
                  />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="status" width={110} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="jumlah"
                    fill="var(--color-jumlah)"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">
              Aktivitas Terbaru
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Pendaftaran siswa terbaru
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recent.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">
                        {r.namaLengkap}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {timeAgo(new Date(r.createdAt))}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {r.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
