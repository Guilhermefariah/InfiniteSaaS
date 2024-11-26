"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"

export function AuthForm() {
  const form = useForm()
  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data)
    await signIn('email', { email: data.email })
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-800">
      <div className="p-6 bg-black rounded-lg shadow-lg border-2 border-red-600 max-w-md w-full">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-red-600">
            InfineteSaas Login
          </h1>
          <p className="text-sm text-gray-400">
            Entre para fazer parte da equipe!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-red-400">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu email"
              className="pl-4 bg-gray-800 text-gray-100 border-red-600 focus:ring-red-500"
              {...form.register("email")}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  )
}
