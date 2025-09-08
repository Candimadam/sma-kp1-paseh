"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { registerSchema, RegisterSchema } from "@/schemas/register.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserPlus, EyeOff, Eye, Link } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function RegisterPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const form = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    async function onSubmit(values: RegisterSchema) {
        if (values.password !== values.confirmPassword) {
            form.setError("confirmPassword", {
                message: "Password tidak sama"
            })
            return
        }

        const { data, error } = await authClient.signUp.email({
            name: values.name,
            email: values.email,
            password: values.password
        });

        if (error) {
            toast.error("Gagal daftar!", {
                description: error.message
            })
            return
        }

        if (data) {
            router.push("/dashboard")
        }
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Card className="shadow-lg">
                    <CardHeader className="text-center space-y-2">
                        <div className="mx-auto w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                            <UserPlus className="w-6 h-6 text-secondary-foreground" />
                        </div>
                        <CardTitle className="text-2xl font-bold">Create Admin Account</CardTitle>
                        <CardDescription className="text-muted-foreground">Register for admin access to the system</CardDescription>
                    </CardHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <CardContent className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Nama Lengkap
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="masukan nama" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="masukan email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Kata Sandi
                                            </FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="masukan kata sandi" {...field}
                                                    />
                                                    <Button
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        size={"icon"} type="button" variant="ghost" className="absolute right-1 top-0">
                                                        <Eye />
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Konfirmasi Kata Sandi
                                            </FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type={showConfirmPassword ? "text" : "password"}
                                                        placeholder="masukan kata sandi" {...field}
                                                    />
                                                    <Button
                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                        size={"icon"} type="button" variant="ghost" className="absolute right-1 top-0">
                                                        <Eye />
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>

                            <CardFooter className="flex flex-col space-y-4 mt-4">
                                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>Masuk</Button>
                            </CardFooter>
                        </form>
                    </Form>
                </Card>
            </div>
        </div>
    )
}