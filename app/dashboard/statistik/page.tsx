"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { TrendingUp, Users, UserPlus, Calendar } from "lucide-react"

// Data dummy untuk grafik pendaftaran harian
const dailyRegistrations = [
    { date: "1 Jan", siswa: 12 },
    { date: "2 Jan", siswa: 19 },
    { date: "3 Jan", siswa: 15 },
    { date: "4 Jan", siswa: 25 },
    { date: "5 Jan", siswa: 22 },
    { date: "6 Jan", siswa: 30 },
    { date: "7 Jan", siswa: 28 },
    { date: "8 Jan", siswa: 35 },
    { date: "9 Jan", siswa: 32 },
    { date: "10 Jan", siswa: 40 },
    { date: "11 Jan", siswa: 38 },
    { date: "12 Jan", siswa: 45 },
    { date: "13 Jan", siswa: 42 },
    { date: "14 Jan", siswa: 48 },
]

// Data untuk grafik mingguan
const weeklyRegistrations = [
    { minggu: "Minggu 1", siswa: 93, target: 100 },
    { minggu: "Minggu 2", siswa: 145, target: 150 },
    { minggu: "Minggu 3", siswa: 168, target: 150 },
    { minggu: "Minggu 4", siswa: 185, target: 200 },
]

// Data untuk distribusi per program
const programDistribution = [
    { program: "IPA", jumlah: 245 },
    { program: "IPS", jumlah: 189 },
    { program: "Bahasa", jumlah: 87 },
    { program: "Kejuruan", jumlah: 134 },
]

export default function StatistikPage() {
    return (
        <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-neutral-50 dark:bg-neutral-800">
            <div className="mx-auto max-w-7xl space-y-6">
                {/* Header */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-blue-500 dark:text-yellow-300">Statistik Pendaftaran Siswa Baru</h1>
                    <p className="text-muted-foreground dark:text-neutral-300">Pantau perkembangan pendaftaran siswa baru secara real-time</p>
                </div>

                {/* Stat Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-border bg-card">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-card-foreground dark:text-neutral-100">Total Pendaftar</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground dark:text-blue-300" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-card-foreground dark:text-neutral-100">655</div>
                            <p className="text-xs text-muted-foreground dark:text-blue-300">
                                <span className="text-chart-1 dark:text-blue-400">+12.5%</span> dari bulan lalu
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border bg-card">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-card-foreground dark:text-neutral-100">Hari Ini</CardTitle>
                            <UserPlus className="h-4 w-4 text-muted-foreground dark:text-green-300" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-card-foreground dark:text-neutral-100">48</div>
                            <p className="text-xs text-muted-foreground dark:text-green-300">
                                <span className="text-chart-1 dark:text-green-400">+8</span> dari kemarin
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border bg-card">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-card-foreground dark:text-neutral-100">Rata-rata Harian</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground dark:text-yellow-300" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-card-foreground dark:text-neutral-100">32</div>
                            <p className="text-xs text-muted-foreground dark:text-yellow-300">siswa per hari</p>
                        </CardContent>
                    </Card>

                    <Card className="border-border bg-card">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-card-foreground dark:text-neutral-100">Pertumbuhan</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground dark:text-pink-300" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-card-foreground dark:text-neutral-100">+23%</div>
                            <p className="text-xs text-muted-foreground dark:text-pink-300">dibanding periode lalu</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts Grid */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Daily Registrations Chart */}
                    <Card className="border-border bg-card">
                        <CardHeader>
                            <CardTitle className="text-card-foreground dark:text-neutral-100">Pendaftaran Harian</CardTitle>
                            <CardDescription className="text-muted-foreground dark:text-neutral-300">
                                Jumlah siswa yang mendaftar setiap hari
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={dailyRegistrations}>
                                    <defs>
                                        <linearGradient id="colorSiswa" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorSiswaDark" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#facc15" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} className="dark:stroke-neutral-700" />
                                    <XAxis
                                        dataKey="date"
                                        stroke="#64748b"
                                        fontSize={12}
                                        tickLine={false}
                                        className="dark:stroke-neutral-300"
                                    />
                                    <YAxis
                                        stroke="#64748b"
                                        fontSize={12}
                                        tickLine={false}
                                        className="dark:stroke-neutral-300"
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#fff",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "0.5rem",
                                            color: "#0f172a",
                                        }}
                                        wrapperStyle={{
                                            color: "#0f172a",
                                        }}
                                        labelStyle={{
                                            color: "#0f172a",
                                        }}
                                        itemStyle={{
                                            color: "#3b82f6",
                                        }}
                                        // dark mode
                                        cursor={{ fill: "rgba(59,130,246,0.1)" }}
                                    />
                                    {/* Use different color for dark mode */}
                                    <Area
                                        type="monotone"
                                        dataKey="siswa"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        fill="url(#colorSiswa)"
                                        className="dark:hidden"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="siswa"
                                        stroke="#facc15"
                                        strokeWidth={2}
                                        fill="url(#colorSiswaDark)"
                                        className="hidden dark:block"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Weekly Registrations Chart */}
                    <Card className="border-border bg-card">
                        <CardHeader>
                            <CardTitle className="text-card-foreground dark:text-neutral-100">Pendaftaran Mingguan</CardTitle>
                            <CardDescription className="text-muted-foreground dark:text-neutral-300">Perbandingan dengan target mingguan</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={weeklyRegistrations}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} className="dark:stroke-neutral-700" />
                                    <XAxis
                                        dataKey="minggu"
                                        stroke="#64748b"
                                        fontSize={12}
                                        tickLine={false}
                                        className="dark:stroke-neutral-300"
                                    />
                                    <YAxis
                                        stroke="#64748b"
                                        fontSize={12}
                                        tickLine={false}
                                        className="dark:stroke-neutral-300"
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#fff",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "0.5rem",
                                            color: "#0f172a",
                                        }}
                                        wrapperStyle={{
                                            color: "#0f172a",
                                        }}
                                        labelStyle={{
                                            color: "#0f172a",
                                        }}
                                        itemStyle={{
                                            color: "#3b82f6",
                                        }}
                                        cursor={{ fill: "rgba(59,130,246,0.1)" }}
                                    />
                                    {/* siswa bar */}
                                    <Bar
                                        dataKey="siswa"
                                        fill="#3b82f6"
                                        radius={[4, 4, 0, 0]}
                                        className="dark:hidden"
                                    />
                                    <Bar
                                        dataKey="siswa"
                                        fill="#facc15"
                                        radius={[4, 4, 0, 0]}
                                        className="hidden dark:block"
                                    />
                                    {/* target bar */}
                                    <Bar
                                        dataKey="target"
                                        fill="#38bdf8"
                                        radius={[4, 4, 0, 0]}
                                        className="dark:hidden"
                                    />
                                    <Bar
                                        dataKey="target"
                                        fill="#f472b6"
                                        radius={[4, 4, 0, 0]}
                                        className="hidden dark:block"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Program Distribution Chart */}
                    <Card className="border-border bg-card lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="text-card-foreground dark:text-neutral-100">Distribusi per Program</CardTitle>
                            <CardDescription className="text-muted-foreground dark:text-neutral-300">
                                Jumlah pendaftar berdasarkan program studi
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={programDistribution} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} className="dark:stroke-neutral-700" />
                                    <XAxis
                                        type="number"
                                        stroke="#64748b"
                                        fontSize={12}
                                        tickLine={false}
                                        className="dark:stroke-neutral-300"
                                    />
                                    <YAxis
                                        type="category"
                                        dataKey="program"
                                        stroke="#64748b"
                                        fontSize={12}
                                        tickLine={false}
                                        width={80}
                                        className="dark:stroke-neutral-300"
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#fff",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "0.5rem",
                                            color: "#0f172a",
                                        }}
                                        wrapperStyle={{
                                            color: "#0f172a",
                                        }}
                                        labelStyle={{
                                            color: "#0f172a",
                                        }}
                                        itemStyle={{
                                            color: "#3b82f6",
                                        }}
                                        cursor={{ fill: "rgba(59,130,246,0.1)" }}
                                    />
                                    <Bar
                                        dataKey="jumlah"
                                        fill="#3b82f6"
                                        radius={[0, 4, 4, 0]}
                                        className="dark:hidden"
                                    />
                                    <Bar
                                        dataKey="jumlah"
                                        fill="#facc15"
                                        radius={[0, 4, 4, 0]}
                                        className="hidden dark:block"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activity */}
                <Card className="border-border bg-card">
                    <CardHeader>
                        <CardTitle className="text-card-foreground dark:text-neutral-100">Aktivitas Terbaru</CardTitle>
                        <CardDescription className="text-muted-foreground dark:text-neutral-300">Pendaftaran siswa dalam 24 jam terakhir</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { name: "Ahmad Fauzi", time: "5 menit yang lalu", program: "IPA" },
                                { name: "Siti Nurhaliza", time: "12 menit yang lalu", program: "IPS" },
                                { name: "Budi Santoso", time: "28 menit yang lalu", program: "Kejuruan" },
                                { name: "Dewi Lestari", time: "1 jam yang lalu", program: "IPA" },
                                { name: "Rizki Pratama", time: "2 jam yang lalu", program: "Bahasa" },
                            ].map((activity, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-yellow-400/10">
                                            <Users className="h-5 w-5 text-primary dark:text-yellow-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-card-foreground dark:text-neutral-100">{activity.name}</p>
                                            <p className="text-xs text-muted-foreground dark:text-neutral-300">{activity.time}</p>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground dark:bg-yellow-400/20 dark:text-yellow-400">
                                        {activity.program}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
